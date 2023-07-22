import express from "express";
const router = express.Router();

router.post("/send-message-X-provider", (req, res) => {
  const { phoneNumber, messageBody } = req.body;

  if (!phoneNumber || !messageBody) {
    return res
      .status(400)
      .send({ error: "Both phoneNumber and messageBody are required." });
  }

  // mocking the sending message success
  console.log(
    `Sending message to ${phoneNumber}:\n${messageBody}\nby provider X.`
  );

  return res.status(200).send({
    success: true,
    message: "Message sent successfully",
  });
});

router.post("/send-message-Y-provider", (req, res) => {
  const { phoneNumber, messageBody } = req.body;

  if (!phoneNumber || !messageBody) {
    return res
      .status(400)
      .send({ error: "Both phoneNumber and messageBody are required." });
  }

  // mocking the sending message success
  console.log(
    `Sending message to ${phoneNumber}:\n${messageBody}\nby provider Y.`
  );

  return res
    .status(200)
    .send({ success: true, message: "Message sent successfully" });
});

export default router;
