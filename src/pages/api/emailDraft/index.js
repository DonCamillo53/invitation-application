import EmailDraft from "../../../../db/models/EmailDraft";
import dbConnect from "../../../../db/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const emailDrafts = await EmailDraft.find({
        _id: "666aea562162619d14c0b04c",
      });

      if (!emailDrafts) {
        return res.status(404).json({ status: "Not Found" });
      }
      return res.status(200).json(emailDrafts);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const emailDraftData = req.body;
      await EmailDraft.create(emailDraftData);

      return res.status(201).json({ status: "EmailDraft created" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  } else if (req.method === "PUT") {
    try {
      const emailDraftData = req.body;
      const { _id, ...updateData } = emailDraftData;

      const updatedDraft = await EmailDraft.findByIdAndUpdate(_id, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedDraft) {
        return res.status(404).json({ status: "Not Found" });
      }

      return res
        .status(200)
        .json({ status: "EmailDraft updated", data: updatedDraft });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

// import EmailDraft from "../../../../db/models/EmailDraft.js";

// import dbConnect from "../../../../db/dbConnect.js";

// export default async function handler(request, response) {
//   await dbConnect();

//   if (request.method === "GET") {
//     const emailDraft = await EmailDraft.find({
//       _id: "666aea562162619d14c0b04c",
//     });

//     if (!emailDraft) {
//       return response.status(404).json({ status: "Not Found" });
//     }
//     response.status(200).json(emailDraft);
//   }
//   if (request.method === "POST") {
//     try {
//       const emailDraftData = request.body;
//       await EmailDraft.create(emailDraftData);

//       response.status(201).json({ status: "EmailDraft created" });
//     } catch (error) {
//       console.log(error);
//       response.status(400).json({ error: error.message });
//     }
//   }
// }
