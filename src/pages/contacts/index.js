import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import Contacts from "../../../components/ContactPage/Contacts";
import AddContactPage from "../../../components/ContactPage/AddContact";
import styles from "../../../components/ContactPage/ContactPage.module.css";
import { Layout } from "../../../components/Layout/Layout";
import ContactTable from "../../../components/ContactPage/ContactTable";

export default function ContactsPage() {
  const [saveState, setSaveState] = useState(null);
  const { mutate } = useSWR("/api/contacts");
  const [toggleDisplay, setToggleDisplay] = useState(false);

  function handleStateBanner(state) {
    setSaveState(state);
    setTimeout(() => {
      setSaveState(null);
    }, 10000);
  }

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
      handleStateBanner(true);
    } else {
      handleStateBanner(false);
    }
  }

  const { data, error } = useSWR("/api/contacts");

  if (!data && !error) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="main_container">
      {saveState === true && (
        <div className="success_message_banner_top">
          Contacts saved successfully!
        </div>
      )}
      {saveState === false && (
        <div className="error_message_banner_top">
          There was an error saving contacts
        </div>
      )}

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
              alt="close add contacts"
              width="30"
              height="30"
            />
          ) : (
            <Image
              src="/addButton.png"
              alt="add contacts"
              width="30"
              height="30"
            />
          )}
        </button>
        <ContactTable data={data} />
      </div>
    </div>
  );
}
