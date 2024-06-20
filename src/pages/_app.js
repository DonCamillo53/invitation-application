import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { Layout } from "../../components/Layout/Layout";
import LoginForm from "../../components/LoginForm/LoginForm";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <div className="app-container">
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
