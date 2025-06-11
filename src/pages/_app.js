import '@/styles/globals.css';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChatButton from '@/components/WhatsAppChatButton';

// Constants are no longer exported from this file.

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Trendtwistr - Driving Growth with Digital Marketing, Accounting, and Recruitment Solutions." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24">
          <Component {...pageProps} />
        </main>
        <Footer />
        <WhatsAppChatButton />
      </div>
    </>
  );
}

export default MyApp;
