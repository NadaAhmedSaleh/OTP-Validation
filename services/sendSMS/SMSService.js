// classes of different SMS providers with extend this class
class SMSService {
  async sendSMS(phoneNumber, message) {
    throw new Error("sendSMS method not implemented.");
  }
}

export default SMSService;
