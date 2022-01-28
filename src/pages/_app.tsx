import { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/dev-icon-8.jpg" />
        <link rel="apple-touch-icon" href="/img/dev-icon-8.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
