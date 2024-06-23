import dbConnect from "../../../../db/dbConnect.js";
import User from "../../../../db/models/User.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const { email } = request.body; // Correct way to parse JSON body in Next.js API routes
      const user = await User.findOne({ email }).select("_id");

      return response.json({ user });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
