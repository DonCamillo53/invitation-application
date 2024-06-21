import { useSession } from "next-auth/react";
import { Layout } from "../../../components/Layout/Layout";

export default function Dashboard() {
  const { status } = useSession();
  console.log(status);
  return <Layout />;
}
