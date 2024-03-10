const sendEmail= require("./sendEmail")




const contactAdmin = async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      // You can add additional validation for name, email, and message here if needed
  
      const recipientEmail = `${email}`; // Admin's email address
      const subject = 'Message from Website Contact Form';
      const htmlContent = 
        `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`
      ;
  
      // Send email to admin
      await sendEmail(recipientEmail, subject, htmlContent);
  
      return res.status(200).json({ message: 'Email sent to admin successfully' });
    } catch (error) {
      console.error('Error sending email to admin:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  module.exports={contactAdmin}