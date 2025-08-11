# Email Setup Guide

## Overview
The contact form now sends two emails:
1. **Notification email** to `info@globtek.co.za` with form details
2. **Confirmation email** to the user acknowledging receipt

## Setup Instructions

### Option 1: Gmail (Recommended for Testing)

1. **Create a `.env.local` file** in your project root:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. **Get Gmail App Password:**
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an "App Password" for your application
   - Use this password in `EMAIL_PASS`

### Option 2: SendGrid (Recommended for Production)

1. **Install SendGrid:**
```bash
npm install @sendgrid/mail
```

2. **Create a `.env.local` file:**
```env
SENDGRID_API_KEY=your-sendgrid-api-key
```

3. **Update the email utility** to use SendGrid instead of nodemailer

### Option 3: Mailgun

1. **Install Mailgun:**
```bash
npm install mailgun.js
```

2. **Create a `.env.local` file:**
```env
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.com
```

## Testing

1. **Start your development server:**
```bash
npm run dev
```

2. **Fill out the contact form** on your website
3. **Check your email** for both the notification and confirmation emails

## Troubleshooting

- **Gmail issues:** Make sure you're using an App Password, not your regular password
- **SendGrid issues:** Verify your API key and sender email are verified
- **Mailgun issues:** Check your domain is properly configured

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive credentials
- Consider using a dedicated email service for production 