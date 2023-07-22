import axios from "axios";
import SMSService from "./SMSService.js";

class YSMSService extends SMSService {
  /**
   * - the implementation of the sendSMS function for YSMSService class
   * @param {string} phoneNumber - phone number in the international format '+201234567890'
   * @param {string} message - message to be sent to the given phone number
   * @returns {Object}
   * @property {number} status - HTTP status code indicating the success or failure
   */
  async sendSMS(phoneNumber, message) {
    try {
      const { status } = await axios.post(
        "http://localhost:3000/mocked/send-message-Y-provider",
        {
          phoneNumber,
          messageBody: message,
        }
      );
      return { status };
    } catch (error) {
      return { status: 500 };
    }
  }
}

export default YSMSService;
