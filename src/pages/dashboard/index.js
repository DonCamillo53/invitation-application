import { useSession } from "next-auth/react";
import { Layout } from "../../../components/Layout/Layout";
import Countdown from "../../../components/DashboardWidgets/Countdown";
import useSWR from "swr";

export default function Dashboard() {
  const targetDate = "2024-12-31T23:59:59";

  const { data, error, loading } = useSWR("/api/emailDraft");

  if (!data && !error) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="main_container_loading">
        <div className="floating_headline_loading"></div>
      </div>
    );
  }
  const emailData = data[0];
  console.log(emailData.date, emailData.time);
  return (
    <div className="main_container">
      <h2 className="floating_headline">Dashboard</h2>
      <Layout />
      <div className="dashboard_widgets">
        {emailData.date && emailData.time && (
          <Countdown targetDate={`${emailData.date}T${emailData.time}`} />
        )}
      </div>
    </div>
  );
}
