import "@/styles/globals.css";
import { Layout } from "../../components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <Layout />
      <Component {...pageProps} />
    </div>
  );
}
