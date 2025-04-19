import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Khan Catering – Authentic Indian Catering NZ</title>
        <meta
          name="description"
          content="Khan Catering offers premium Indian and Indo-Chinese catering services across New Zealand. Book your event now for authentic taste and professional presentation."
        />
        <meta
          name="keywords"
          content="Indian catering, catering New Zealand, Indo-Chinese food, wedding catering NZ, Khan Catering, Auckland caterers"
        />
        <meta name="author" content="Afzal Khan" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Khan Catering – Authentic Indian Catering NZ" />
        <meta
          property="og:description"
          content="Premium Indian and Indo-Chinese catering services across New Zealand. Book your event today!"
        />
        <meta property="og:image" content="https://khancatering.co.nz/catering/catering2.jpg" />
        <meta property="og:url" content="https://khancatering.co.nz" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khan Catering – Authentic Indian Catering NZ" />
        <meta name="twitter:description" content="Premium Indian and Indo-Chinese catering services across New Zealand." />
        <meta name="twitter:image" content="https://khancatering.co.nz/catering/catering2.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
