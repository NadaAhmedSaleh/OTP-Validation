import isValidPhoneNumber from "../../utils/isValidPhoneNumber.js";
import messages from "../../utils/messages.js";

const sendOTPValidation = (req, res, next) => {
  const { phoneNumber } = req.body;
  if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
    return res
      .status(400)
      .send({ message: messages.OTP.phoneNumberInvalidErr });
  }
  next();
};
//-----------------------------------------------------------------------------
const verifyOTPValidation = (req, res, next) => {
  const { phoneNumber, OTP } = req.body;
  if (!phoneNumber || !OTP) {
    return res.status(400).send({ message: messages.general.missingInputErr });
  }
  next();
};

export { sendOTPValidation, verifyOTPValidation };
