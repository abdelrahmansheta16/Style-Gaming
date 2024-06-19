import "@/styles/globals.css";

import Head from 'next/head'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return <div><Head>
    <title>Gaming Ecosystem</title>
    <meta name="description" content="Join a gaming ecosystem for usability of assets" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <Header /> <Component {...pageProps} /></div>;
}
