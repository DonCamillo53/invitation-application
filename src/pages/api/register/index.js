import User from "../../../../db/models/User.js";
import dbConnect from "../../../../db/dbConnect.js";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const { firstName, lastName, email, password } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = { firstName, lastName, email, password: hashedPassword };
      console.log("userData:", userData);
      await User.create(userData);
      response.status(201).json({ status: "User Created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: "Method Not Allowed" });
  }
}
