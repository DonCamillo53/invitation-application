// import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {

//   const { data, error } = await resend.emails.send({
//     from: "info@brandsandgoods.de",
//       to: "csmuellkippe@gmail.com",
//       subject: "hello world",
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }
