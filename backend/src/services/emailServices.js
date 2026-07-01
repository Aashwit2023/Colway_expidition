import { transporter } from "../config/mail.js";

export async function sendSignupEmail(userEmail, userName) {
    try {
        const info = await transporter.sendMail({
            from: `"Colway Expedition" <${process.env.EMAIL}>`,
            to: userEmail,
            subject: "Welcome to Colway Expedition 🎉 — Your Adventure Begins!",
            text: `Hello ${userName}, Your account has been created successfully. Thank you for joining Colway Expedition! Regards, Colway Expedition Team`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Colway Expedition</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family: 'Segoe UI', Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.10);">

          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a365d 0%, #2d4a7a 100%); padding: 40px 40px 32px; text-align:center;">
              <h1 style="margin:0; font-size:28px; font-weight:800; color:#ffffff; letter-spacing:1px;">
                🏔️ Colway Expedition
              </h1>
              <p style="margin:8px 0 0; color:#ffd4a8; font-size:14px; letter-spacing:2px; text-transform:uppercase;">
                Adventure Awaits You
              </p>
            </td>
          </tr>

          <!-- Orange Accent Bar -->
          <tr>
            <td style="background-color:#ff7a18; height:5px; font-size:0; line-height:0;">&nbsp;</td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 40px 32px;">
              <h2 style="margin:0 0 16px; font-size:24px; color:#1a365d; font-weight:700;">
                Welcome aboard, ${userName}! 🎉
              </h2>
              <p style="margin:0 0 16px; font-size:15px; color:#555; line-height:1.7;">
                We're thrilled to have you as a part of the <strong style="color:#ff7a18;">Colway Expedition</strong> family. Your account has been created successfully and you're all set to start exploring amazing treks and adventures.
              </p>
              <p style="margin:0 0 28px; font-size:15px; color:#555; line-height:1.7;">
                Browse our curated collection of Himalayan treks, expeditions, and cultural experiences. Whether you're a seasoned trekker or a first-time adventurer, we have the perfect journey waiting for you.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#ff7a18; border-radius:10px; text-align:center;">
                    <a href="https://colwayexpedition.com" style="display:inline-block; padding:14px 36px; font-size:15px; font-weight:700; color:#ffffff; text-decoration:none; letter-spacing:0.5px;">
                      🚀 Start Exploring Treks
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Highlights -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fa; border-radius:12px; margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 14px; font-size:13px; font-weight:700; color:#1a365d; text-transform:uppercase; letter-spacing:1px;">
                      What you can do now:
                    </p>
                    <p style="margin:0 0 8px; font-size:14px; color:#444;">🏕️ &nbsp;<strong>Browse 100+ Treks</strong> across multiple Himalayan regions</p>
                    <p style="margin:0 0 8px; font-size:14px; color:#444;">📅 &nbsp;<strong>Book your next adventure</strong> with real-time availability</p>
                    <p style="margin:0; font-size:14px; color:#444;">👥 &nbsp;<strong>Join 500+ happy trekkers</strong> who trust us with their journeys</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0; font-size:14px; color:#888; line-height:1.6;">
                If you have any questions, feel free to reply to this email or reach us at 
                <a href="mailto:${process.env.EMAIL}" style="color:#ff7a18; text-decoration:none;">${process.env.EMAIL}</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#1a365d; padding:24px 40px; text-align:center;">
              <p style="margin:0 0 6px; font-size:13px; color:#a0b4cc;">
                With adventure,
              </p>
              <p style="margin:0; font-size:14px; font-weight:700; color:#ff7a18; letter-spacing:0.5px;">
                The Colway Expedition Team
              </p>
              <p style="margin:12px 0 0; font-size:11px; color:#607590;">
                This email was sent because you registered at Colway Expedition. Please do not share this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
        });
        console.log("Email Sent: ", info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
};

export const sendConfirmBookingEmail = async (booking) => {
    try {
        const { userEmail, trekName, trekDate, totalMembers, totalCost, participants } = booking;
        
        // Prepare Comprehensive Participant Details HTML for both emails
        const participantDetails = participants.map((p, index) => `
            <div style="margin-bottom: 15px; padding: 12px; background-color: #f8f9fa; border-left: 4px solid #1a365d; border-radius: 4px;">
                <p style="margin: 0 0 6px 0; color: #1a365d; font-size: 15px;"><strong>Participant ${index + 1}: ${p.name}</strong></p>
                <p style="margin: 0 0 4px 0; font-size: 13px; color: #444;"><strong>Age:</strong> ${p.age} &nbsp;|&nbsp; <strong>Gender:</strong> ${p.gender || 'N/A'}</p>
                <p style="margin: 0 0 4px 0; font-size: 13px; color: #444;"><strong>Phone:</strong> ${p.phoneNumber || 'N/A'} &nbsp;|&nbsp; <strong>Emergency:</strong> ${p.emergencyContact || 'N/A'}</p>
                <p style="margin: 0; font-size: 13px; color: #444;"><strong>Address:</strong> ${p.address || 'N/A'}</p>
            </div>
        `).join('');

        // 1. Send Confirmation Email to the User
        await transporter.sendMail({
            from: `"Colway Expedition" <${process.env.EMAIL}>`,
            to: userEmail,
            subject: `Booking Confirmed: ${trekName} 🎉`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
                <div style="background-color: #1a365d; padding: 20px; text-align: center;">
                    <h2 style="color: #ffffff; margin: 0; letter-spacing: 1px;">Booking Confirmed! 🎉</h2>
                </div>
                
                <div style="padding: 30px;">
                    <p>Hello,</p>
                    <p>Thank you for your payment. Your booking for <strong>${trekName}</strong> on <strong>${trekDate}</strong> is confirmed!</p>
                    
                    <div style="background-color: #f8f9fa; border-left: 4px solid #ff7a18; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0;">
                        <p style="margin: 5px 0;"><strong>Total Members:</strong> ${totalMembers}</p>
                        <p style="margin: 5px 0;"><strong>Total Cost:</strong> ₹${totalCost}</p>
                        <p style="margin: 10px 0 0 0; color: #d9534f; font-weight: bold; font-size: 15px;">
                            ⚠️ Note: Your rest amount has to be paid at the location.
                        </p>
                    </div>

                    <p>We are excited to host you. Our team will contact you shortly with further details regarding your trek.</p>
                    
                    <br/>
                    <p style="margin: 0;">Warm Regards,</p>
                    <p style="margin: 5px 0 0 0; font-weight: bold; color: #ff7a18;">Colway Expedition Team</p>
                </div>

                <div style="background-color: #f4f6f9; padding: 20px; text-align: center; font-size: 13px; color: #555; border-top: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 10px 0; font-weight: bold; color: #1a365d; font-size: 15px;">Need Assistance?</p>
                    <p style="margin: 5px 0;">Email: <a href="mailto:support.colwayexpedetion@gmail.com" style="color: #ff7a18; text-decoration: none;">support.colwayexpedetion@gmail.com</a></p>
                    <p style="margin: 5px 0;">Phone: <strong>+91 85807 79179</strong></p>
                    
                    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd;">
                        <p style="margin: 0 0 5px 0; font-weight: bold; color: #333;">Refund & Cancellation Policy</p>
                        <p style="margin: 0; color: #777;">Please refer to our <a href="https://www.colwayexpedition.com/cancellation-policy" style="color: #ff7a18; text-decoration: none;">Refund & Cancellation Policy</a> for detailed terms regarding cancellations and refunds. Early cancellations may be eligible for partial refunds as per our policy.</p>
                    </div>
                </div>
            </div>
            `
        });

        // 2. Send Notification Email to the Admin
        await transporter.sendMail({
            from: `"Colway System" <${process.env.EMAIL}>`,
            to: process.env.EMAIL, // Sending to admin email
            subject: `New Booking Alert: ${trekName}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #1a365d;">New Booking Received</h2>
                <p>A new booking has been confirmed (payment completed).</p>
                <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; color: #1a365d;">Booking Summary:</h3>
                <ul style="list-style-type: none; padding-left: 0;">
                    <li style="margin-bottom: 8px;"><strong>User Email:</strong> ${userEmail}</li>
                    <li style="margin-bottom: 8px;"><strong>Trek Name:</strong> ${trekName}</li>
                    <li style="margin-bottom: 8px;"><strong>Trek Date:</strong> ${trekDate}</li>
                    <li style="margin-bottom: 8px;"><strong>Total Members:</strong> ${totalMembers}</li>
                    <li style="margin-bottom: 8px;"><strong>Total Cost Paid:</strong> ₹${totalCost}</li>
                </ul>
                <h3 style="border-bottom: 1px solid #ccc; padding-bottom: 5px; color: #1a365d; margin-top: 25px;">Participant Details:</h3>
                ${participantDetails}
            </div>
            `
        });
        
        console.log("Confirmation emails sent successfully to user and admin.");
    } catch(error) {
        console.error("Error sending confirmation email: ", error);
    }
}