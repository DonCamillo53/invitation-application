import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_9499LcQC_Kn6hNb3ZY9HWrC75vmDgfuU5");

const emailDraftData = {
  colorTheme: "#000000",
  headline: "Annual Band Night",
  colorHeadline: "#ffffff",
  imageUrl:
    "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  greeting: "Hi",
  text: `Get ready to rock the night away at our much-anticipated Annual Band Night! Join us for an evening filled with electrifying performances, great company, and unforgettable memories. Whether you're a fan of classic rock, indie, or the latest hits, there's something for everyone. Don't miss out on this spectacular night of music and fun! We can't wait to see you there! Best,`,
  location: `The Roxy Theatre
  9009 West Sunset Blvd.
  West Hollywood, CA 90069`,
  date: `2030-01-01`,
  time: "20:15",
};

const contactData = [
  {
    _id: "666c574c68050d2ea6bc60b6",
    firstName: "Camillo",
    lastName: "Hochberg",
    email: "csmuellkippe@gmail.com",
  },
  {
    _id: "888c63657498r949999",
    firstName: "Peter",
    lastName: "Petersen",
    email: "c.hochberg@hotmail.de",
  },
];

export default async function GET() {
  try {
    console.log("Sending email...");
    await Promise.all(
      contactData.map(async (contact) => {
        const response = await resend.emails.send({
          from: "info@brandsandgoods.de",
          to: contact.email,
          subject: `Invitation to ${emailDraftData.headline}!`,
          html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title></title>

  <style type="text/css">
    @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
      .u-row .u-col-100 {
        width: 500px !important;
      }
    }
    
    @media (max-width: 520px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col>div {
        margin: 0 auto;
      }
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table,
    td {
      color: #000000;
    }
    
    #u_body a {
      color: #0000ee;
      text-decoration: none;
    }
    
    @media (max-width: 480px) {
      #u_content_heading_3 .v-container-padding-padding {
        padding: 10px 10px 25px !important;
      }
      #u_column_4 .v-col-background-color {
        background-color: #fefefe !important;
      }
      #u_content_text_1 .v-container-padding-padding {
        padding: 23px !important;
      }
      #u_content_text_1 .v-text-align {
        text-align: left !important;
      }
    }
  </style>



  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css">
  <!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: ${emailDraftData.colorTheme};color: ${emailDraftData.colorHeadline}">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->



          <div class="u-row-container" style="padding: 0px 0px 50px;background-color: ${emailDraftData.colorTheme}">
            <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 0px 50px;background-color: ${emailDraftData.colorTheme};" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-background-color" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div class="v-col-background-color" style="height: 100%;width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:50px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <!--[if mso]><table width="100%"><tr><td><![endif]-->
                              <h2 class="v-text-align" style="margin: 0px; color: ${emailDraftData.colorHeadline}; text-transform: uppercase; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 20px; font-weight: 400;"><span>INVITATION</span></h2>
                              <!--[if mso]></td></tr></table><![endif]-->

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="10%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid ${emailDraftData.colorHeadline};-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                      <span>&#160;</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table id="u_content_heading_3" style="font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <!--[if mso]><table width="100%"><tr><td><![endif]-->
                              <h1 class="v-text-align" style="margin: 0px; color: ${emailDraftData.colorHeadline}; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Open Sans',sans-serif; font-size: 33px; font-weight: 400;"><span><span><span><span><span><span><strong style= "text-transform:uppercase;">${emailDraftData.headline}</strong></span></span>
                                </span>
                                </span>
                                </span>
                                </span>
                              </h1>
                              <!--[if mso]></td></tr></table><![endif]-->

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:0px;font-family: 'Open Sans',sans-serif;" align="left">

                              <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                              <div class="v-text-align" align="center">
                                <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/eventWebsite/${contact._id}" style="height:37px; v-text-anchor:middle; width:160px;" arcsize="0%"  stroke="f" fillcolor="${emailDraftData.colorHeadline}"><w:anchorlock/><center style="color:${emailDraftData.colorTheme};"><![endif]-->
                                <a href="http://localhost:3000/eventWebsite/${contact._id}" target="_blank" class="v-button" style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: ${emailDraftData.colorTheme}; background-color: ${emailDraftData.colorHeadline}; border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                  <span style="display:block;padding:10px 20px;line-height:120%;"><span style="line-height: 16.8px;">OPEN INVITATION</span></span>
                                </a>
                                <!--[if mso]></center></v:roundrect><![endif]-->
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>





          <div class="u-row-container" style="padding: 0px;background-color: transparent">
            <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" class="v-col-background-color" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div id="u_column_4" class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div class="v-col-background-color" style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table id="u_content_text_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div class="v-text-align" style="font-size: 14px; line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="line-height: 140%;"><strong>${emailDraftData.greeting} ${contact.firstName}</strong>,</p>
                                <p style="line-height: 140%;">&nbsp;</p>
                                <p style="line-height: 140%;">[HOST NAME] just invited you to an event. Click the button to find out more. <br><br><br></p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>`,
        });
      })
    );
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      status: "Failed to send email",
      error: error.message,
    });
  }
}
