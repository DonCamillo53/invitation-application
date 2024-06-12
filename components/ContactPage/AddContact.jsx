"use client";
import { useState } from "react";
import { parse } from "papaparse";
import styles from "./AddContact.module.css";

export default function AddContactPage({ handleSavingContact }) {
  const [contacts, setContacts] = useState([]);

  function handleManualSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setContacts((existing) => [...existing, data]);
    event.target.reset();
  }

  return (
    <div className={styles.add_contact_page}>
      <h2>Add New Contacts</h2>
      <div className={styles.contact_group}>
        <form onSubmit={handleManualSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" type="text" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" type="text" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">E-Mail</label>
            <input name="email" type="email" />
          </div>
          <button className="secondary_button" type="submit">
            Add Contact
          </button>
        </form>
        <div
          className={styles.drag_and_drop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                const result = await parse(text, { header: true });
                setContacts((existing) => [...existing, ...result.data]);
              });
          }}
        >
          Drag and Drop .CSV-File
        </div>
        <h3>New Contacts</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.email}>
              <p className={styles.add_contact_page_new_contacts_name}>
                <strong>
                  {contact.firstName} {contact.lastName}
                </strong>
              </p>
              <p>{contact.email.toLowerCase()}</p>
            </li>
          ))}
        </ul>
        <button
          className="primary_button"
          onClick={() => handleSavingContact(contacts).then(setContacts([]))}
        >
          Save {contacts.length} {contacts.length > 1 ? "Contacts" : "Contact"}
        </button>
      </div>
    </div>
  );
}
