import nodemailer from 'nodemailer';

// Create transporter for Gmail (you can change this to your email provider)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

export interface EmailData {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmail(emailData: EmailData) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.body,
      html: emailData.body.replace(/\n/g, '<br>') // Convert line breaks to HTML
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Alternative: Using a service like SendGrid (recommended for production)
export async function sendEmailWithSendGrid(emailData: EmailData) {
  try {
    // This is a placeholder for SendGrid integration
    // You would need to install @sendgrid/mail and configure it
    console.log('SendGrid email would be sent:', emailData);
    return { success: true, messageId: 'sendgrid-placeholder' };
  } catch (error: any) {
    console.error('Error sending email with SendGrid:', error);
    return { success: false, error: error.message };
  }
} 