import OTPs from "../mocked/OTP.js";
import messages from "../utils/messages.js";
import YSMSService from "./sendSMS/YSMSService.js";
import XSMSService from "./sendSMS/XSMSService.js";

//------------------------------------------------------------------------------
// OTP generation
//------------------------------------------------------------------------------
/**
 * @returns random 4 digits number
 */
const generateOTP = () => {
  return Math.floor(1000 + Math.random() * 9000);
};
//------------------------------------------------------------------------------
/**
 * - chooses which service provider to use
 * @param {string} phoneNumber - phone number in the international format '+201234567890'
 * @returns - an instance of the chosen service provider class
 *            - X service provider in case of egyptian number
 *            - Y SP otherwise
 */
const getServiceProvider = (phoneNumber) => {
  return phoneNumber.startsWith("+2") ? new XSMSService() : new YSMSService();
};
//------------------------------------------------------------------------------
/**
 * - generates a new OTP
 * - sends message to the given phone number with the generated OTP
 * - saves the generated OTP along with the phone number in the db
 * @param {string} phoneNumber - phone number in the international format '+201234567890'
 * @returns {Object}
 * @property {number} status - HTTP status code indicating the success or failure
 * @property {string} message
 */
const sendOTP = async (phoneNumber) => {
  const OTP = generateOTP();

  const smsService = getServiceProvider(phoneNumber);
  const { status } = await smsService.sendSMS(
    phoneNumber,
    messages.OTP.OTPMessage(OTP)
  );
  if (status !== 200) {
    return { status, message: messages.OTP.sentFailure };
  }
  OTPs[phoneNumber] = OTP;
  console.log({ OTPs }); // this to check the updates as the OTP db is mocked
  return { status: 200, message: messages.OTP.sentSuccess };
};

//------------------------------------------------------------------------------
// OTP verification
//------------------------------------------------------------------------------
/**
 * - verifies the OTP entered by user with the one in db
 * @param {string} phoneNumber - phone number in the international format '+201234567890'
 * @param {number} OTP - the 4 digits number sent to user in sendOTP
 * @property {number} status - HTTP status code indicating the success or failure
 * @property {string} message
 */
const verifyOTP = async (phoneNumber, OTP) => {
  if (OTPs[phoneNumber] !== OTP) {
    return { status: 400, message: messages.OTP.invalidOTP };
  }
  return { status: 200, message: messages.OTP.validOTP };
};

export { sendOTP, verifyOTP };
