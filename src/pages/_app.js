import '../styles/globals.css'; // <<< THIS MUST BE THE VERY FIRST IMPORT LINE

import React, { useEffect } from 'react'; // Other React/Next imports come AFTER globals.css
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';   
// import WhatsAppChatButton from '../components/WhatsAppChatButton'; // If you plan to use this

// Global constants - these are used by your components and should be defined
export const PRIMARY_COLOR = "#f87d39";
export const SECONDARY_COLOR = "#2B267F";
export const TEXT_ON_PRIMARY = "#FFFFFF";
export const TEXT_ON_SECONDARY = "#FFFFFF";
export const DARK_TEXT = "#1e293b";
export const SUBTLE_TEXT = "#64748b";
export const LIGHT_BACKGROUND = "#f8fafc";
export const ACCENT_YELLOW = "#FFC107";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    // This MUST run only on the client-side
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Ensure favicon.ico is in your public folder */}
        <meta name="description" content="Trendtwistr - Driving Growth with Digital Marketing, Accounting, and Recruitment Solutions." />
        {/* Individual page titles will be set in those page components using <Head> */}
      </Head>
      <div 
        className="flex flex-col min-h-screen" 
        // The body styles (font-inter, antialiased, text-dark-text, bg-light-bg) 
        // from globals.css will apply to the <body> tag automatically by Tailwind.
      >
        <Navbar /> 
        <main className="flex-grow pt-20 md:pt-24"> {/* Padding to offset fixed navbar */}
          <Component {...pageProps} />
        </main>
        <Footer />
        {/* <WhatsAppChatButton /> If you decided to use this */}
      </div>
    </>
  );
}

export default MyApp;