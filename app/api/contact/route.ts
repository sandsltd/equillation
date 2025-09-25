import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, interest, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP environment variables')
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Verify transporter
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error('SMTP transporter verification failed:', verifyError)
      return NextResponse.json(
        { error: 'Email service connection error' },
        { status: 500 }
      )
    }

    // Email to business (notification)
    const businessEmailContent = `
New Contact Form Submission from Equillation Website

Name: ${name}
Email: ${email}
Area of Interest: ${interest || 'Not specified'}

Message:
${message}

---
Please respond to: ${email}
Sent from: ${process.env.NEXT_PUBLIC_SITE_URL || 'Equillation Website'}
    `

    // Professional HTML template for business notification
    const businessEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f8fffe;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #459688 0%, #748562 100%); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
      <p style="color: #f0f9f7; margin: 10px 0 0 0; font-size: 16px;">Equillation Website</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <div style="background-color: #f0f9f7; padding: 24px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #459688;">
        <h2 style="color: #374151; margin: 0 0 20px 0; font-size: 18px;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 140px;">Name:</td>
            <td style="padding: 8px 0; color: #6b7280;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
            <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #459688; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 600; color: #374151;">Interest:</td>
            <td style="padding: 8px 0; color: #6b7280;">${interest || 'Not specified'}</td>
          </tr>
        </table>
      </div>
      
      <div style="margin-bottom: 24px;">
        <h2 style="color: #374151; margin: 0 0 16px 0; font-size: 18px;">Message</h2>
        <div style="background-color: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; border-left: 4px solid #459688;">
          <p style="color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <a href="mailto:${email}" style="background-color: #459688; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: 500;">Reply to ${name}</a>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 14px; margin: 0;">Sent from Equillation Website Contact Form</p>
    </div>
  </div>
</body>
</html>
    `

    // Customer thank you email HTML template
    const customerEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thank you for contacting Equillation</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f8fffe;">
  <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #459688 0%, #748562 100%); padding: 30px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Thank You</h1>
      <p style="color: #f0f9f7; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px;">
      <h2 style="color: #374151; margin: 0 0 16px 0; font-size: 20px;">Dear ${name},</h2>
      
      <p style="color: #6b7280; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
        Thank you for your interest in Equillation and our equine facilitated constellation training. We've received your message and will be in touch with you soon.
      </p>
      
      <div style="background-color: #f0f9f7; padding: 20px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #459688;">
        <h3 style="color: #374151; margin: 0 0 12px 0; font-size: 16px;">What happens next?</h3>
        <ul style="color: #6b7280; margin: 0; padding-left: 20px; line-height: 1.6;">
          <li>We'll review your message within 24-48 hours</li>
          <li>One of our team members will respond personally</li>
          <li>We'll answer any questions about our training approach</li>
          <li>If appropriate, we'll arrange a consultation call</li>
        </ul>
      </div>
      
      <p style="color: #6b7280; line-height: 1.6; margin: 20px 0; font-size: 16px;">
        In the meantime, if you have any urgent questions, please don't hesitate to contact us directly at 
        <a href="tel:+447470369948" style="color: #459688; text-decoration: none;">07470 369948</a> or 
        <a href="mailto:info@equillation.com" style="color: #459688; text-decoration: none;">info@equillation.com</a>.
      </p>
      
      <p style="color: #374151; line-height: 1.6; margin: 24px 0 0 0; font-size: 16px; font-weight: 500;">
        Warm regards,<br>
        The Equillation Team<br>
        <span style="color: #6b7280; font-weight: normal; font-size: 14px;">Maria-Lucy, Ursula & Kate</span>
      </p>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0;">
        Equillation - Equine Facilitated Constellations
      </p>
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Fostering authentic connection and collaboration with horses
      </p>
    </div>
  </div>
</body>
</html>
    `

    // Email options
    const businessMailOptions = {
      from: process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER,
      to: `${process.env.CONTACT_EMAIL_TO || 'info@equillation.com'}, hello@saunders-simmons.co.uk`,
      subject: `New Contact Form Submission - ${name}`,
      text: businessEmailContent,
      html: businessEmailHTML,
    }

    const customerMailOptions = {
      from: process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Equillation',
      html: customerEmailHTML,
    }

    // Send both emails
    try {
      await Promise.all([
        transporter.sendMail(businessMailOptions),
        transporter.sendMail(customerMailOptions)
      ])

      console.log('Emails sent successfully to:', businessMailOptions.to, 'and', email)

      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
