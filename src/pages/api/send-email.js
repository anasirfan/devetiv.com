import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, companyName, jobTitle, email, projectType, deadline, budget, details } = req.body;

    // Update the transport settings to use Hostinger's SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Use Hostinger's SMTP host
      port: 465, // Secure port for SMTP
      secure: true, // Use SSL/TLS for secure email
      auth: {
        user: process.env.EMAIL_USER, // Your Hostinger email
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    const mailOptions = {
      from: process.env.RECIPIENT_EMAIL, // Your Hostinger email
      to: process.env.EMAIL_USER,
      subject: 'New Inquiry Form Submission',
      html: `
        <h1>Inquiry Form Submission</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Details:</strong> ${details}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
