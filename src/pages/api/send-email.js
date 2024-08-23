import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, companyName, jobTitle, email, projectType, deadline, budget, details } = req.body;

    // Create a transporter using Gmail's SMTP server
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // Secure port for SMTP (SSL)
      secure: true, // Use SSL/TLS
      auth: {
        user: 'anasirfan101010@gmail.com', // Your Gmail address
        pass: 'kyod nszu wkil jgqt', // Your Gmail password or App Password if 2FA is enabled
      },
    });

    const mailOptions = {
      from: 'anasirfan101010@gmail.com', // The email provided in the form as the "from" address
      to: 'inquiry@devetiv.com', // Your Gmail address
      subject: 'New Inquiry Form Submission',
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Inquiry Form Submission</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  border: 1px solid #e2e2e2;
                  border-radius: 8px;
                  background-color: #f9f9f9;
              }
              h1 {
                  text-align: center;
                  color: #09506F;
              }
              p {
                  margin: 10px 0;
              }
              .label {
                  font-weight: bold;
                  color: #09506F;
              }
              .content {
                  padding: 10px;
                  background-color: #ffffff;
                  border-radius: 6px;
                  margin-top: 10px;
              }
          </style>
      </head>
      <body>
      
          <div class="container">
              <h1>Inquiry Form Submission</h1>
              
              <div class="content">
                  <p><span class="label">First Name:</span> ${firstName}</p>
                  <p><span class="label">Last Name:</span> ${lastName}</p>
                  <p><span class="label">Company Name:</span> ${companyName}</p>
                  <p><span class="label">Job Title:</span> ${jobTitle}</p>
                  <p><span class="label">Email:</span> ${email}</p>
                  <p><span class="label">Project Type:</span> ${projectType}</p>
                  <p><span class="label">Deadline:</span> ${deadline}</p>
                  <p><span class="label">Budget:</span> ${budget}</p>
                  <p><span class="label">Details:</span> ${details}</p>
              </div>
          </div>
      
      </body>
      </html>
    `,
    
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }

    // try {
    //   // Send the email to your Gmail account
    //   await transporter.sendMail(mailOptions);

    //   // Forward the email to your Hostinger email
    //   await transporter.sendMail({
    //     from: process.env.GMAIL_USER, // Your Gmail address
    //     to: 'inquiry@devetiv.com', // Your Hostinger email
    //     subject: 'Forwarded Inquiry Form Submission',
    //     html: mailOptions.html, // Forward the same content
    //   });

    //   res.status(200).json({ success: true });
    // } catch (error) {
    //   res.status(500).json({ success: false, error: error.message });
    // }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
