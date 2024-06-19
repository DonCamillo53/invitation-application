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

    return response.status(200).json(contact);
  }

  if (request.method === "PUT") {
    const updateData = request.body;

    const updatedContact = await Contacts.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response
      .status(200)
      .json({ status: "Contact updated", data: updatedContact });
  }

  return response.status(405).json({ status: "Method Not Allowed" });
}
