import { HTMLeditor } from "../../../components/Emails/HTMLeditor";
import { Layout } from "../../../components/Layout/Layout";

export default function invitationEditor() {
  async function handleSavingEmailDraft(emailDraft) {
    const response = await fetch(`/api/emailDraft`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailDraft),
    });
    if (response.ok) {
      // You might want to perform some action here if the response is ok
      console.log("Draft saved successfully.");
    } else {
      console.error("Failed to save the draft.");
    }
  }

  return (
    <>
      <Layout />
      <HTMLeditor handleSavingEmailDraft={handleSavingEmailDraft} />
    </>
  );
}
