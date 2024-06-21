import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { AuthProvider } from "./api/Providers";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="app-container">
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </div>
    </AuthProvider>
  );
}
