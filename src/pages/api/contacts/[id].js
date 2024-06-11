import Contacts from "../../../../db/models/Contacts.js";
import dbConnect from "../../../../db/dbConnect.js";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const contact = await Contacts.findById(id);

    if (!contact) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(contact);
  }
}
