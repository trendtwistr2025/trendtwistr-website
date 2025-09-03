import '@/styles/globals.css';
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppChatButton from '@/components/WhatsAppChatButton';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// 1. Import the Montserrat font from next/font
import { Montserrat } from 'next/font/google';

// 2. Configure the font with the weights you need
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'] 
});

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
        <link rel="icon" href="assets/favicon.ico" />
        <meta name="description" content="Trendtwistr - Driving Growth with Digital Marketing, Accounting, and Recruitment Solutions." />
      </Head>
      {/* 3. Apply the font's class name to the main wrapper div */}
      <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
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