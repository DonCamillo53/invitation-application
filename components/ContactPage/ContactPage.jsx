import Contacts from "./Contacts";
import AddContactPage from "./AddContact";
import styles from "./ContactPage.module.css";

export function ContactPage({ handleSavingContact }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <AddContactPage handleSavingContact={handleSavingContact} />
      <Contacts />
    </div>
  );
}
