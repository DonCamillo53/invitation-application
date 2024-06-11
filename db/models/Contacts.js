import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  isAttending: { type: Boolean },
  isInvited: { type: Boolean },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
