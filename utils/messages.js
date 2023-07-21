const messages = {
  general: {
    missingInputErr: "Missing Input!",
  },
  OTP: {
    phoneNumberInvalidErr:
      "Please enter a valid phone number in the following format '+201234567890'",
    OTPMessage: (OTP) => `Hello,\nYour OTP is ${OTP}.`,
    sentSuccess: "OTP sent successfully",
    sentFailure: "Failed to send OTP to user",
    validOTP: "OTP verified successfully",
    invalidOTP: "Invalid OTP",
  },
};

export default messages;
