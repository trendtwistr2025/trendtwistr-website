// src/pages/_app.js
import '../styles/globals.css'; // This MUST be the very first import

import React, { useEffect } from 'react'; // Keep React/Next imports after global CSS
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar'; // Assuming you have these components
import Footer from '../components/Footer';   // Assuming you have these components

// Global constants
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
        <link rel="icon" href="/favicon.ico" /> 
        <meta name="description" content="Trendtwistr - Driving Growth with Digital Marketing, Accounting, and Recruitment Solutions." />
        {/* The <title> will be set by individual pages */}
      </Head>
      <div className="flex flex-col min-h-screen"> {/* The body styles from globals.css should apply via Tailwind to the body tag itself */}
        <Navbar /> 
        <main className="flex-grow pt-20 md:pt-24"> {/* Padding to offset fixed navbar */}
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;