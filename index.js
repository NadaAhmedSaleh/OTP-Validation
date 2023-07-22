import express from "express";
import { serveSwaggerUI, setupSwaggerUI } from "./swagger.js";

import OTPRoutes from "./routes/OTP.js";
import sendSMSRoute from "./mocked/sendSMS.js";

const app = express();
app.use(express.json());

app.use("/mocked", sendSMSRoute); // mocked SMS service providers end points
app.use('/api-docs', serveSwaggerUI, setupSwaggerUI); // API-Docs end point

// Setting up routes
app.use("/otp", OTPRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
