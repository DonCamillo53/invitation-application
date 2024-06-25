import { useSession } from "next-auth/react";
import { Layout } from "../../../components/Layout/Layout";
import Countdown from "../../../components/DashboardWidgets/Countdown";
import useSWR from "swr";
import ContactsSum from "../../../components/DashboardWidgets/ContactsSum";

export default function Dashboard() {
  const { data: contactsData, error: contactsError } = useSWR("/api/contacts");
  const { data: emailData, error: emailError } = useSWR("/api/emailDraft");

  if (!contactsData && !contactsError && !emailData && !emailError) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
      </div>
    );
  }

  if (contactsError || emailError) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
        <p>Failed loading data...</p>
      </div>
    );
  }

  if (!contactsData || !emailData) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const contactData = contactsData;
  const emailDetails = emailData[0];
  console.log(emailDetails.date, emailDetails.time);
  console.log(contactData);

  return (
    <div className="main_container">
      <h2 className="floating_headline">Dashboard</h2>
      <Layout />
      <div className="dashboard_widgets">
        <Countdown targetDate={`${emailDetails.date}T${emailDetails.time}`} />
        <ContactsSum data={contactData} />
      </div>
    </div>
  );
}
