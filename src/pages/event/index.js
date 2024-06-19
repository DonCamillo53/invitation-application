import { HTMLeditor } from "../../../components/Emails/HTMLeditor";
import useSWR from "swr";
export default function invitationEditor() {
  const { mutate } = useSWR("/api/emailDraft");

  async function handleSavingEmailDraft(emailDraft) {
    const response = await fetch(`/api/emailDraft`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailDraft),
    });
    if (response.ok) {
      mutate();
    }
  }

  return <HTMLeditor handleSavingEmailDraft={handleSavingEmailDraft} />;
}
