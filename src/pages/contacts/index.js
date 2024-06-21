import useSWR from "swr";
import { ContactPage } from "../../../components/ContactPage/ContactPage";

export default function ContactIndex() {
  const { mutate } = useSWR("/api/contacts");

  async function handleSavingContact(contact) {
    const response = await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      mutate();
    }
  }
  return <ContactPage handleSavingContact={handleSavingContact} />;
}
