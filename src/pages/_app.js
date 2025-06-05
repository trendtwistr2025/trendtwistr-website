import '../styles/globals.css'; // <<< THIS MUST BE THE VERY FIRST LINE

import React, { useEffect } from 'react'; // Other React/Next imports come AFTER globals.css
import Head from 'next/head';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';   
// Note: ScrollToTopButton or WhatsAppChatButton would also be imported if used globally here

// Global constants - these are used by your components and should be defined
export const PRIMARY_COLOR = "#f87d39";
export const SECONDARY_COLOR = "#2B267F";
export const TEXT_ON_PRIMARY = "#FFFFFF";
export const TEXT_ON_SECONDARY = "#FFFFFF";
export const DARK_TEXT = "#1e293b";
export const SUBTLE_TEXT = "#64748b";
export const LIGHT_BACKGROUND = "#f8fafc";
export const ACCENT_YELLOW = "#FFC107";

// The background pattern is fine here if you want it applied to the main div
const backgroundPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;


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
        {/* Individual page titles will be set in those page components using <Head> */}
      </Head>
      <div 
        className={`flex flex-col min-h-screen font-inter selection:bg-primary selection:text-white`}
        // The body tag will get text-dark-text and bg-light-bg from globals.css
        // You can apply the background pattern here if you wish, or directly to the body in globals.css
        // For simplicity, let's assume body tag in globals.css handles the base background.
        // If you want the pattern on this div:
        // style={{ backgroundColor: LIGHT_BACKGROUND, backgroundImage: backgroundPattern }}
      >
        <Navbar /> 
        <main className="flex-grow pt-20 md:pt-24"> {/* Padding to offset fixed navbar */}
          <Component {...pageProps} />
        </main>
        <Footer />
        {/* If you have WhatsAppChatButton, it would go here, outside the main div but within the React fragment */}
        {/* <WhatsAppChatButton /> */}
      </div>
    </>
  );
}

export default MyApp;