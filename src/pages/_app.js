import "@/styles/globals.css";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      <Script src="https://cdn.tailwindcss.com" />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

// ** /currancy , /customer-order , manage-order , transactions , users , users/manage */
