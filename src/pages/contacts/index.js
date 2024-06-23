import useSWR from "swr";
import Image from "next/image";

import Contacts from "../../../components/ContactPage/Contacts";
import AddContactPage from "../../../components/ContactPage/AddContact";
import styles from "../../../components/ContactPage/ContactPage.module.css";
import { useState } from "react";
import { Layout } from "../../../components/Layout/Layout";
import ContactTable from "../../../components/ContactPage/ContactTable";

export default function ContactsPage() {
  const { mutate } = useSWR("/api/contacts");
  const [toggleDisplay, setToggleDisplay] = useState(false);

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
  const { data, isLoading } = useSWR("/api/contacts");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return;
  }

  return (
    <div className="main_container">
      <Layout />

      {toggleDisplay && (
        <div className="modal_div">
          <h2 className="floating_headline">Add New Contacts</h2>
          <AddContactPage handleSavingContact={handleSavingContact} />
        </div>
      )}
      <div className="permanent_div">
        <div>
          <h2 className="floating_headline">Contacts</h2>
        </div>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            left: "10px",
            top: "20px",
            zIndex: "99",
          }}
          onClick={() => setToggleDisplay(!toggleDisplay)}
        >
          {toggleDisplay ? (
            <Image
              src="/closeButton.png"
              alt="add contacts"
              width="30"
              height="30"
            />
          ) : (
            <Image
              src="/addButton.png"
              alt="close add contacts"
              width="30"
              height="30"
            />
          )}
        </button>{" "}
        <ContactTable data={data} />
      </div>
    </div>
  );
}
