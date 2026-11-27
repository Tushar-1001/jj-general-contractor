// Paste this into Google Sheets -> Extensions -> Apps Script
// Deploy -> New deployment -> Web app -> Execute as: Me -> Who has access: Anyone

const NOTIFY_EMAIL = "sainitushar51@gmail.com";

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();

    // Ensure headers exist on row 1
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone Number",
        "Email Address",
        "ZIP Code",
        "Project Type",
        "Target Timeline",
        "Project Scope & Notes",
      ]);
    }

    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.phone || "",
      data.email || "Not provided",
      data.zip || "",
      data.service || "",
      data.timeline || "",
      data.details || "",
    ]);

    // Send styled HTML email notification (never fail the lead submission if quota is reached)
    if (NOTIFY_EMAIL) {
      try {
        if (MailApp.getRemainingDailyQuota() > 0) {
          const name = escapeHtml(data.name || "Website Visitor");
          const phone = escapeHtml(data.phone || "");
          const email = escapeHtml(data.email || "Not provided");
          const zip = escapeHtml(data.zip || "");
          const service = escapeHtml(data.service || "Estimate Request");
          const timeline = escapeHtml(data.timeline || "Not specified");
          const details = escapeHtml(data.details || "").replace(/\n/g, "<br>");
          const sheetUrl = ss.getUrl();

          const subject = `New Lead: ${data.service || "Estimate"} (${data.zip || ""}) — ${data.name || "Website"}`;
          const textBody = [
            "New Estimate Request — JJ General Contractor",
            "---------------------------------------------",
            `Name: ${data.name || ""}`,
            `Phone: ${data.phone || ""}`,
            `Email: ${data.email || "Not provided"}`,
            `ZIP Code: ${data.zip || ""}`,
            `Project Type: ${data.service || ""}`,
            `Timeline: ${data.timeline || ""}`,
            "",
            "Project Details:",
            data.details || "",
            "",
            `View Leads Sheet: ${sheetUrl}`,
          ].join("\n");

          const htmlBody = `
            <div style="margin:0;padding:24px;background-color:#faf9f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#18181b;">
              <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border:1px solid #e7e5e4;border-radius:4px;overflow:hidden;">
                <div style="background-color:#18181b;padding:20px 24px;border-bottom:3px solid #b45309;">
                  <div style="font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#f59e0b;font-family:monospace;margin-bottom:4px;">
                    New Customer Lead
                  </div>
                  <div style="font-size:20px;font-weight:700;color:#ffffff;">
                    JJ General Contractor
                  </div>
                </div>

                <div style="padding:24px;">
                  <div style="margin-bottom:20px;padding:12px 16px;background-color:#fef3c7;border-left:4px solid #b45309;border-radius:2px;">
                    <div style="font-size:12px;color:#78350f;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">
                      Requested Service
                    </div>
                    <div style="font-size:16px;font-weight:700;color:#18181b;margin-top:2px;">
                      ${service} &middot; ZIP ${zip}
                    </div>
                  </div>

                  <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:20px;">
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#71717a;width:140px;font-weight:600;">Full Name</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#18181b;font-weight:600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#71717a;font-weight:600;">Phone</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;">
                        <a href="tel:${phone}" style="color:#b45309;font-weight:600;text-decoration:none;font-family:monospace;">${phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#71717a;font-weight:600;">Email</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#18181b;">${
                        data.email
                          ? `<a href="mailto:${email}" style="color:#18181b;text-decoration:underline;">${email}</a>`
                          : "Not provided"
                      }</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#71717a;font-weight:600;">ZIP Code</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#18181b;font-family:monospace;">${zip}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#71717a;font-weight:600;">Target Timeline</td>
                      <td style="padding:10px 0;border-bottom:1px solid #f5f5f4;color:#18181b;">${timeline}</td>
                    </tr>
                  </table>

                  <div style="margin-bottom:24px;">
                    <div style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.6px;font-weight:600;margin-bottom:8px;">
                      Project Scope &amp; Notes
                    </div>
                    <div style="padding:14px 16px;background-color:#faf9f6;border:1px solid #e7e5e4;border-radius:3px;font-size:14px;line-height:1.6;color:#27272a;">
                      ${details}
                    </div>
                  </div>

                  <div style="text-align:left;">
                    <a href="tel:${phone}" style="display:inline-block;width:210px;box-sizing:border-box;text-align:center;background-color:#18181b;color:#ffffff;border:1px solid #18181b;font-size:13px;font-weight:600;text-decoration:none;padding:12px 16px;border-radius:3px;margin:0 10px 10px 0;">
                      Call ${name}
                    </a>
                    <a href="${sheetUrl}" style="display:inline-block;width:210px;box-sizing:border-box;text-align:center;background-color:#ffffff;color:#18181b;border:1px solid #d6d3d1;font-size:13px;font-weight:600;text-decoration:none;padding:12px 16px;border-radius:3px;margin:0 10px 10px 0;">
                      Open Leads Sheet
                    </a>
                  </div>
                </div>

                <div style="background-color:#f5f5f4;padding:14px 24px;font-size:11px;color:#71717a;border-top:1px solid #e7e5e4;">
                  Saved automatically to <strong>JJ General Contractor — Leads</strong> · Irving, TX
                </div>
              </div>
            </div>
          `;

          MailApp.sendEmail({
            to: NOTIFY_EMAIL,
            subject: subject,
            body: textBody,
            htmlBody: htmlBody,
          });
        }
      } catch (mailErr) {
        // Sheet row is already saved; swallow mail quota error so user still sees success
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
