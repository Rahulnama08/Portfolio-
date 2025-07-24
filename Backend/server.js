const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { firstName, lastName, company, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password',
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'your-email@gmail.com',
      subject: `New Contact from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
