import Contacts from "./Contacts";
import AddContactPage from "./AddContact";
import styles from "./ContactPage.module.css";

export function ContactPage({ handleSavingContact }) {
  return (
    <div className={styles.contact_page_card}>
      <AddContactPage handleSavingContact={handleSavingContact} />
      <Contacts />
    </div>
  );
}
