import { Resend } from "resend";
import HTMLtemplateForReactMail from "../../../../components/Emails/HTMLtemplateForReactEmail";
import { NextResponse } from "next/server";
const resend = new Resend("re_9499LcQC_Kn6hNb3ZY9HWrC75vmDgfuU5");

const settingsData = {
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
const contactData = { firstName: "Camillo", email: "csmuellkippe@gmail.com" };

export default async function GET() {
  await resend.emails.send({
    from: "info@brandsandgoods.de",
    to: "csmuellkippe@gmail.com",
    subject: "Hello World!",
    html: `
      <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            width: 100vw;
            height: 100%;
            max-width: 700px;
            background-color: white;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: white;
        }
        .section {
            width: 100%;
            padding: 0;
        }
        .hero {
            background-image: url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 50vh;
            position: relative;
        }
        .overlay {
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .heading {
            color: #ffffff;
            font-weight: lighter;
            margin-bottom: 10px;
            text-align: center;
        }
        .divider {
            width: 50px;
            margin-bottom: 30px;
            border: solid 0.1px #ffffff;
        }
        .headline {
            color: #ffffff;
            text-align: center;
            max-width: 75%;
            word-wrap: break-word;
            word-break: break-word;
        }
        .date {
            color: #ffffff;
            margin-top: 10px;
            font-weight: lighter;
        }
        .content {
            width: 90vw;
            padding: 40px;
            max-width: 650px;
            margin: 0 auto;
        }
        .greeting {
            font-weight: bold;
            margin-bottom: 30px;
        }
        .text {
            line-height: 27px;
        }
        .buttons {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            padding: 50px 0;
            background-color: white;
        }
        .button {
            padding: 20px;
            font-weight: bold;
            border: none;
            background-color: rgb(0, 0, 0);
            color: #ffffff;
            cursor: pointer;
        }
        .footer {
            background-color: #000000;
            color: #ffffff;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px;
        }
        .footer-heading {
            margin-bottom: 20px;
        }
        .footer-text {
            margin-bottom: 40px;
            max-width: 200px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero section">
            <div class="overlay">
                <h2 class="heading">INVITATION</h2>
                <hr class="divider">
                <h1 class="headline">ANNUAL BAND NIGHT</h1>
                <h3 class="date">2030-01-01</h3>
            </div>
        </div>
        <div class="content section">
            <p class="greeting">Hi Camillo,</p>
            <p class="text">Get ready to rock the night away at our much-anticipated Annual Band Night! Join us for an evening filled with electrifying performances, great company, and unforgettable memories. Whether you're a fan of classic rock, indie, or the latest hits, there's something for everyone. Don't miss out on this spectacular night of music and fun! We can't wait to see you there! Best,</p>
        </div>
        <div class="buttons section">
            <button class="button">WILL ATTEND</button>
            <button class="button">WILL NOT ATTEND</button>
        </div>
        <div class="footer section">
            <h4 class="footer-heading">DATE</h4>
            <p class="footer-text">2030-01-01, 20:15</p>
            <h4 class="footer-heading">LOCATION</h4>
            <p class="footer-text">The Roxy Theatre<br>9009 West Sunset Blvd.<br>West Hollywood, CA 90069</p>
        </div>
    </div>
</body>
</html>
    `,
  });
  return NextResponse.json({ status: "Ok" });
}

// import { Resend } from "resend";
// import HTMLtemplateForReactMail from "../../../../components/Emails/HTMLtemplateForReactEmail";
// import { NextResponse } from "next/server";

// const resend = new Resend("re_9499LcQC_Kn6hNb3ZY9HWrC75vmDgfuU5");

// async function fetchData(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error fetching data from ${url}`);
//   }
//   return response.json();
// }

// export async function sendEmail(req, res) {
//   try {
//     const contacts = await fetchData("/api/contacts");
//     const emailDraft = await fetchData("/api/emailDraft");

//     if (!contacts || !emailDraft) {
//       return res
//         .status(500)
//         .json({ error: "Failed to load contacts or email draft" });
//     }

//     const promises = contacts.map(async (contact) => {
//       return await resend.emails.send({
//         from: "info@brandsandgoods.de",
//         to: contact.email,
//         subject: `${contact.firstName}, you are invited!`,
//         react: (
//           <HTMLtemplateForReactMail
//             contactData={contact}
//             settingsData={emailDraft}
//           />
//         ),
//       });
//     });
//     console.log("email to", contact.firstName, "send");
//     const results = await Promise.all(promises);
//     return res.status(200).json({ data: results });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// }

// export default sendEmail;
