import "../styles/globals.css";
import Nav from "../components/navbar";

import { SessionProvider } from "next-auth/react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className="bg-ctp-base">
        <Nav />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
