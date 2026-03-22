import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, designation, companyName, workEmail, phone, teamSize } = body;

    // Hardcoded credentials as requested
    const sheetId = "1Kg_pKXUJVQie_eENv32QrathU6pK3JPzOWbBpOtBhkU";
    const clientEmail = "apex-corporate-leads@arboreal-path-491009-u3.iam.gserviceaccount.com";
    const privateKey = `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwtjcWPPWFzmE4\nMyKKYOrDNFizdLAMrL7e3RGBsUyFLO+uhFaSWvXAWbJQ0HDe/arXv+HkN4u4Qm3u\nBKMG5OaQMYduUdlfNdXhcXbZwQQg1WKasEij2dqPK0sDMmIl34DXRBpiIF7yXgL/\nyuENY7dP+q28pA/VXf0zPw8nrpJCiR9ZnbLDjfQdHlsvbPadoClp0I2acEblUP6J\nnNKaBJQTIiw8yJDO9CRLP9tjAqQo8awD/McyyJjdyHJY9cY2DuzQ/eZQCjpSG0lk\nxGvMUHpThQHfqJrrjG7GfLtOro77vQfk0ktsSGkIQfDHUNRtMLlKN4YJUb+tyGI5\nFxy4wHhNAgMBAAECggEAQkNhrr4XFyDHhepu1lL3VVGIvWpRJb+VJz7gdLCGUB4E\nln1bdTAUnRdFbVZsLMIUUSjLzOcjRmnqjOlCNLCa4JEiBrU8fJ5UYGBKv+bH5IP/\noJ/f7Ukg0rTaQQ2gjjEcQBxyhD89O0cTetWZxIqSz7PheC5RHaJL8u5/gVLN15Ky\nD46IEwza6YQMATB1ndkJGUBui8LDrg+GJaOuzRCHvSkPOL7Q1UKzZpnwzDAs3EgE\nb0Hmc7fKNnsbfceVCHoUCvmstg9Y/iOIrWsIorEzpY3rRgC8sCt8VL/G6piHT+c3\n9gRS/SC6ZapZJ9V/eb8NfoQvtIeSX3aQ9rnKUihnRQKBgQDbQnsf09RXLTr1T+LW\nr00IiaTPPGS5p5SMWRFJxl5Bl8mvlAwsy0UnVlEVqZ/EzZiOUQF6ThKsYI+dDitk\ntjkri+SrxdvYO50kBRnQWkBRfg8jpumb/COzaUuFKn2wvAVswje5b8J8adxyPwYp\nYbUK1NvHspcj2caiAwnT4jFz5wKBgQDOUpGdE5zXZ4IWI2mYHBczD5goCUyCE2t2\nICZ77tsOOMr/f/Pdt2oaecSUOIbvmkzDqU+j4U0+QASs0quZrZiZ6eEIH7JzUrVe\ncGONOqVZe/NtUnHm9L2oPwib8Zcnj1RadqKvY5/A0jlhN4AVcUX/7LCBTC8X99+e\nt5dKJrXrqwKBgQDTubXVfSM973JQcoz0jKERjoD0kTgewwFCKbv1BrX8FwvuHUNI\neh1UKBjylzKtw27+dqC7rup/RFtJ6OXkQcahE1yEtvJdMuvCXZ6YwJ39U4JhBgvt\n0aPT2ujPNcHbySRf6ogO7CndJAh41f0oNq6xP+zfQMiMGP6jcdWqonDonwKBgQCt\nGYkhh/rmnej+Oee1vpuYM1UtAeA2oaRfDso64ELYw71Mb0Vilydl3xOWZ3aOP553\n6ezvSW9M8tj5RibCYGrPdvFdp3pIVvPjr9dV/gYL9XpeFfWKF3unVHscmqx+fDoB\nS9dh3uuBEt8hOTc0xjw8Y5ASaqB4M3Zh6xX7GE840QKBgCpeSr6R35dJNvMQkbrV\nXyd9SLr8bRDCiF0jcxCUBSKOL6LoxtIpaARSyOYkfD1gGszwOh6fGVAG9AF0ITS4\n6ltC5AxS2GZRUyCyw5Ehrm1F2mCZ+lpWbJHBk5EqvpnQVsr6z3U7ZBKIRpT8dC7d\nvsC/IPnkuTBvgvr5TVZpm0J7\n-----END PRIVATE KEY-----\n`;

    if (!clientEmail || !privateKey || !sheetId) {
      console.warn("Server configuration error: Missing Google Sheets credentials.");
      return NextResponse.json(
        { message: "Server configuration error: Missing Google Sheets credentials." },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Creates a readable date timestamp reflecting the current time
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:G", // Assuming the default sheet name is 'Sheet1', change if necessary
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            fullName,
            designation,
            companyName,
            workEmail,
            phone,
            teamSize,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Google Sheets API error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
