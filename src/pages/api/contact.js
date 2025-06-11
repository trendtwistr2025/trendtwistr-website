// src/pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message, formType } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ status: 'error', message: 'All fields are required.' });
    }

    // In a real application, you would save this to a database or send an email.
    // For now, we'll just log it to the server console.
    console.log("--- NEW CONTACT FORM SUBMISSION ---");
    console.log("Form Type:", formType);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    console.log("-------------------------------------");

    // Simulate success
    return res.status(200).json({ status: 'success', message: 'Thank you! Your message has been received. We will get back to you shortly.' });
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
