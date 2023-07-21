import { sendOTP, verifyOTP } from "../services/OTP.js";

const sendOTPApi = async (req, res) => {
  const { phoneNumber } = req.body;
  const { status, message } = await sendOTP(phoneNumber);
  return res.status(status).send({ message });
};
//------------------------------------------------------------------------------
const verifyOTPApi = async (req, res) => {
  const { phoneNumber, OTP } = req.body;
  const { status, message } = await verifyOTP(phoneNumber, OTP);
  return res.status(status).send({ message });
};
//------------------------------------------------------------------------------

export { sendOTPApi, verifyOTPApi };
