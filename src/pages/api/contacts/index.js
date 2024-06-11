// import Contact from "../../../../db/models/Contacts";
// import connectMongoDB from "../../../../db/dbConnect";

// export async function POST(request) {
//   const { firstName, lastName, email, isAttending, isInvited } =
//     await request.json();
//   await connectMongoDB();
//   await Contact.create({ firstName, lastName, email, isAttending, isInvited });
//   return NextResponse.json({ message: "Contact Created" }, { status: 201 });
// }

import Contacts from "../../../db/models/Contacts.js";

import dbConnect from "../../../db/dbConnect.js";

export default async function handler(request, response) {
  await dbConnect();
  console.log("I am in API Contacts", "\tmethod: ", request.method);
  if (request.method === "GET") {
    const contacts = await Contacts.find();

    if (!contacts) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(contacts);
  }
  if (request.method === "POST") {
    try {
      const contactData = request.body;
      await Contacts.create(contactData);

      response.status(201).json({ status: "Contact created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
