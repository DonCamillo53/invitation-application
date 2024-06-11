import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { Layout } from "../../components/Layout/Layout";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <SWRConfig value={{ fetcher }}>
        <Layout />
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
