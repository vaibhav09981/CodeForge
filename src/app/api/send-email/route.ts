import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password, fullName, qualification, totalProjects, githubUrl, profilePicUrl } = await request.json();

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
      html: `
        <p>A new user has registered:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Password:</strong> ${password}</li>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Qualification:</strong> ${qualification}</li>
          <li><strong>Total Projects:</strong> ${totalProjects}</li>
          <li><strong>GitHub URL:</strong> ${githubUrl}</li>
          <li><strong>Profile Picture URL:</strong> ${profilePicUrl || 'N/A'}</li>
        </ul>
      `, // Email content
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}