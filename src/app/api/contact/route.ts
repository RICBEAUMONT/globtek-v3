import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, projectType, message, budget, timeframe } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const subject = `New Contact Form Submission - ${projectType}`;
    const emailBody = `
New contact form submission from Globtek website:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Project Type: ${projectType}
Budget: ${budget || 'Not specified'}
Timeframe: ${timeframe || 'Not specified'}

Message:
${message}

---
This message was sent from the Globtek website contact form.
    `.trim();

    // For now, we'll use a simple email service
    // In production, you should use a proper email service like SendGrid, Mailgun, or AWS SES
    
    // Option 1: Using a service like EmailJS (client-side)
    // Option 2: Using a server-side email service
    // Option 3: Using a form service like Formspree or Netlify Forms
    
    // For this example, I'll create a response that suggests using a form service
    // You can replace this with actual email sending logic
    
    console.log('Contact form submission:', {
      to: 'info@globtek.co.za',
      subject,
      body: emailBody
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 