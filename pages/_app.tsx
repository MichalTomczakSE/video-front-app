import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 min-w-min">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
