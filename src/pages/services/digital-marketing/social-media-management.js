// src/pages/services/digital-marketing/social-media-management.js

import React, { useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { digitalMarketingOfferingsDetails } from '@/data/trendtwistrData';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Find the specific data for this page
const pageData = digitalMarketingOfferingsDetails.find(o => o.id === 'social-media-management');

const SocialMediaPage = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".header-title", { type: "chars" });
      gsap.from(split.chars, {
        duration: 0.8,
        opacity: 0,
        y: 60,
        ease: "power3.out",
        stagger: 0.05,
      });

       // Elastic Pop-in for Service Icons
      const serviceItems = gsap.utils.toArray(".service-item");
      gsap.from(serviceItems, {
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        delay: 0.2,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        }
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  if (!pageData) return <div>Page data not found.</div>;

  return (
    <>
      <Head>
        <title>{`${pageData.title} | Digital Marketing Services`}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        {/* Header Section */}
        <section className="section-padding text-white" style={{ backgroundColor: "#f87d39" }}>
          <div className="container-padding">
            <h1 className="header-title text-4xl md:text-6xl font-extrabold text-center">{pageData.title}</h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services.html" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/digital-marketing.html" className="hover:text-primary">Digital Marketing</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{pageData.title}</span>
            </div>
        </div>
        
        {/* Custom Approach Section */}
        {pageData.approach && (
            <section className="section-padding">
                <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-80 md:h-96">
                        <Image 
                            src={pageData.approach.image}
                            alt={`${pageData.title} approach`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY_COLOR}}>{pageData.approach.title}</h2>
                        <p className="text-lg text-subtle-text leading-relaxed">{pageData.approach.description}</p>
                    </div>
                </div>
            </section>
        )}

        {/* "Services We Provide" Section */}
        {pageData.providedServices && (
          <section className="py-10 bg-light-bg">
            <div className="container-padding">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-text" style={{ color: SECONDARY_COLOR }}>Services We Provide</h2>
              </div>
              <div className="services-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
                {pageData.providedServices.map((item) => (
                  <div key={item.title} className="service-item flex flex-col items-center">
                    <div className="relative h-20 w-20 mb-4">
                      <Image
                        src={item.iconPath}
                        alt={`${item.title} icon`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-dark-text">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
       
      </div>
    </>
  );
};

export default SocialMediaPage;