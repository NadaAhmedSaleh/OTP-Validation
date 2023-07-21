import OTPs from "../mocked/OTP.js";
import messages from "../utils/messages.js";
import axios from "axios";

//------------------------------------------------------------------------------
// OTP generation
//------------------------------------------------------------------------------
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
//------------------------------------------------------------------------------
const sendOTP = async (phoneNumber) => {
  const OTP = generateOTP();
  try {
    const { status } = await axios.post(
      "http://localhost:3000/mocked/send-message",
      {
        phoneNumber,
        messageBody: messages.OTP.OTPMessage(OTP),
      }
    );
    if (status !== 200) {
      return { status, message: messages.OTP.sentFailure };
    }
  } catch (error) {
    return { status: 500, message: error };
  }
  OTPs[phoneNumber] = OTP;
  console.log({ OTPs }); // this to check the updates as the OTP db is mocked
  return { status: 200, message: messages.OTP.sentSuccess };
};

//------------------------------------------------------------------------------
// OTP verification
//------------------------------------------------------------------------------
const verifyOTP = async (phoneNumber, OTP) => {
  if (OTPs[phoneNumber] !== OTP) {
    return { status: 400, message: messages.OTP.invalidOTP };
  }
  return { status: 200, message: messages.OTP.validOTP };
};

export { sendOTP, verifyOTP };
