const sendEmail = require("./sendEmail");

const contactAdmin = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const recipientEmail = `${email}`;
    const subject = "Message from Website Contact Form";
    const htmlContent = `<p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>`;
    await sendEmail(recipientEmail, subject, htmlContent);

    return res
      .status(200)
      .json({ message: "Email sent to admin successfully" });
  } catch (error) {
    console.error("Error sending email to admin:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { contactAdmin };
