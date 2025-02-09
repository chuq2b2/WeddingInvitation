import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

// API route for handling the POST request for RSVP submission
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("API route hit");

  if (req.method === "POST") {
    try {
      const body = req.body;
      console.log("Request body:", body);

      // Ensure all required environment variables are present
      const requiredEnvVars = [
        "GOOGLE_SHEETS_TYPE",
        "GOOGLE_SHEETS_PROJECT_ID",
        "GOOGLE_SHEETS_PRIVATE_KEY",
        "GOOGLE_SHEETS_CLIENT_EMAIL",
        "GOOGLE_SHEETS_CLIENT_ID",
        "SHEET_ID",
      ];
      requiredEnvVars.forEach((envVar) => {
        if (!process.env[envVar]) {
          throw new Error(`Missing environment variable: ${envVar}`);
        }
      });

      // Determine the sheet tab based on RSVP data
      
      const city = body.location.split(",")[0].trim();

      // Ensure we have the correct city name (Hanoi or Guangzhou)
      if (city !== "Hanoi" && city !== "Guangzhou") {
        throw new Error("Invalid location provided. Only 'Hanoi' or 'Guangzhou' are allowed.");
      }

      // Initialize Google Sheets API with authentication
      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: process.env.GOOGLE_SHEETS_TYPE,
          project_id: process.env.GOOGLE_SHEETS_PROJECT_ID,
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
          client_id: process.env.GOOGLE_SHEETS_CLIENT_ID,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      // Ensure spreadsheet ID is available
      const spreadsheetId = process.env.SHEET_ID;
      if (!spreadsheetId) {
        throw new Error("Missing spreadsheet ID.");
      }

      // Append the data to the appropriate Google Sheet tab
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${city}!A:E`, // Use dynamic sheet tab name
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              body.name,
              body.email,
              body.weddingAttendance,
              body.plusOne || "0",
              body.note || "",
            ],
          ],
        },
      });

      console.log("Google Sheets API response:", response.data);

      return res.status(200).json({
        success: true,
        message: "RSVP submitted successfully",
      });
    } catch (error: unknown) {
      console.error("Error details:", {
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
        error,
      });

      return res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Server error while processing RSVP",
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }
}
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("API route hit");
//   if (req.method === 'POST') {
//     try {
//       const { name, email, weddingAttendance, plusOne, note } = req.body;

//       console.log("Received data:", req.body);  // Log incoming data

//       // Skip Google Sheets integration for now, just send a success message
//       res.status(200).json({ message: 'RSVP received successfully' });
//     } catch (error) {
//       console.error('Error processing RSVP:', error);  // Log error
//       res.status(500).json({ error: 'Error processing RSVP' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }