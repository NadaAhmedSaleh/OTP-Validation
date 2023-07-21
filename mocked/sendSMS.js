import express from "express";
const router = express.Router();

router.post("/send-message", (req, res) => {
  const { phoneNumber, messageBody } = req.body;

  if (!phoneNumber || !messageBody) {
    return res
      .status(500)
      .send({ error: "Both phoneNumber and messageBody are required." });
  }

  // mocking the sending message success
  console.log(`Sending message to ${phoneNumber}: ${messageBody}`);

  return res
    .status(200)
    .send({ success: true, message: "Message sent successfully." });
});

export default router;
