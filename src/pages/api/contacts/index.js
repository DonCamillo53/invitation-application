import Contacts from "../../../../db/models/Contacts.js";
import dbConnect from "../../../../db/dbConnect.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const contacts = await Contacts.find();
      if (!contacts) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json(contacts);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "POST") {
    try {
      const contactData = request.body;
      await Contacts.create(contactData);
      response.status(201).json({ status: "Contact created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else if (request.method === "PUT") {
    try {
      const { id, ...updateData } = request.body;

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
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    response.status(405).json({ status: "Method Not Allowed" });
  }
}
