import mongoose from "mongoose";

const { Schema } = mongoose;

const emailDraftSchema = new Schema({
  colorTheme: { type: String, required: true },
  headline: { type: String, required: true },
  colorHeadline: { type: String, required: true },
  imageUrl: { type: String, required: true },
  greeting: { type: String, required: true },
  text: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
});

const EmailDraft =
  mongoose.models.EmailDraft || mongoose.model("EmailDraft", emailDraftSchema);

export default EmailDraft;
