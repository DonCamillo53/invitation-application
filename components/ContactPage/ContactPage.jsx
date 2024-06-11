import Contacts from "./Contacts";
import AddContactPage from "./AddContact";
import styles from "./ContactPage.module.css";

export function ContactPage() {
  return (
    <div className={styles.contact_page_card}>
      <AddContactPage />
      <Contacts />
    </div>
  );
}
