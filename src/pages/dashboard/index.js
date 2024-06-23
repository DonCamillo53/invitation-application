import { useSession } from "next-auth/react";
import { Layout } from "../../../components/Layout/Layout";

export default function Dashboard() {
  const { status } = useSession();
  return (
    <div className="main_container">
      <h2 className="floating_headline">Dashboard</h2>
      <Layout />
    </div>
  );
}
