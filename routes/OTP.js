import express from "express";

import { sendOTPApi, verifyOTPApi } from "../controllers/OTP.js";
import {
  sendOTPValidation,
  verifyOTPValidation,
} from "../middleWares/validations/OTP.js";

const router = express.Router();

//-----------------------------------------------------------------------------
/**
 * @swagger
 *  /otp/send:
 *    post:
 *      summary: Send OTP to a phone number and saves the newly created OTP along with the phoneNumber
 *      tags: [OTP]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  type: string
 *                  description: Phone number to send OTP to in international format '+201234567890'
 *                  example: "+201234567890"
 *              required:
 *                - phoneNumber
 *      responses:
 *        '200':
 *          description: OTP message sent successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: A message confirming sending OTP message to user.
 *                    example: OTP sent successfully
 *        '400':
 *          description: Missing or invalid phone number
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: A message indicating missing or invalid phone number.
 *                    example: Please enter a valid phone number in the following format '+201234567890'
 *        '500':
 *          description: Internal server error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: A message indicating failure to send OTP message.
 *                    example: Failed to send OTP to user
 */
//-----------------------------------------------------------------------------
router.post("/send", sendOTPValidation, sendOTPApi);
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
/**
 * @swagger
 *  /otp/verify:
 *    post:
 *      summary: Verify OTP for a phone number
 *      tags: [OTP]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                phoneNumber:
 *                  type: string
 *                  description: Phone number to verify OTP for in international format '+201234567890'
 *                  example: "+201234567890"
 *                OTP:
 *                  type: number
 *                  description: The OTP sent to the user
 *                  example: 1234
 *              required:
 *                - phoneNumber
 *                - OTP
 *      responses:
 *        '200':
 *          description: OTP verified successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: A message confirming successful verification of the OTP.
 *                    example: OTP verified successfully
 *        '400':
 *          description: Invalid OTP or missing input
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    description: A message indicating an invalid OTP or missing phoneNumber or OTP.
 *                    example: Invalid OTP
 */

//-----------------------------------------------------------------------------
router.post("/verify", verifyOTPValidation, verifyOTPApi);

export default router;
