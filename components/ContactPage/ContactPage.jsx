import Contacts from "./Contacts";
import AddContactPage from "./AddContact";
import styles from "./ContactPage.module.css";
import { useState } from "react";

export function ContactPage({ handleSavingContact }) {
  const [toggleDisplay, setToggleDisplay] = useState(false);

  return (
    <div className={styles.contact_page_card}>
      {toggleDisplay && (
        <AddContactPage handleSavingContact={handleSavingContact} />
      )}
      <button onClick={() => setToggleDisplay(!toggleDisplay)}>
        {toggleDisplay ? "x" : "+"}
      </button>
      <Contacts />
    </div>
  );
}
