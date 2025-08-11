import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

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

    // Format the email content for Globtek team
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

    // Format confirmation email for the user
    const confirmationSubject = `Thank you for contacting Globtek Engineering`;
    const confirmationBody = `
Dear ${firstName} ${lastName},

Thank you for reaching out to Globtek Engineering. We have successfully received your inquiry and appreciate you taking the time to contact us.

Your submission details:
- Project Type: ${projectType}
- Company: ${company || 'Not provided'}
- Budget: ${budget || 'Not specified'}
- Timeframe: ${timeframe || 'Not specified'}

Our team will review your requirements and get back to you within 24 hours with a detailed response and next steps.

If you have any urgent questions, please don't hesitate to contact us directly at:
- Phone: +27 87 057 5956
- Email: info@globtek.co.za

Best regards,
The Globtek Engineering Team

---
Globtek Engineering
62 Smiso Nkwanyana Road, Morningside, Durban, 4001, South Africa
Phone: +27 87 057 5956 | Email: info@globtek.co.za
    `.trim();

    // Send email to Globtek team
    const teamEmailResult = await sendEmail({
      to: 'info@globtek.co.za',
      subject,
      body: emailBody
    });

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: confirmationSubject,
      body: confirmationBody
    });

    // Check if both emails were sent successfully
    if (teamEmailResult.success && userEmailResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We will get back to you within 24 hours.' 
        },
        { status: 200 }
      );
    } else {
      console.error('Email sending failed:', { teamEmailResult, userEmailResult });
      return NextResponse.json(
        { error: 'Failed to send confirmation email. Please try again.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
} 