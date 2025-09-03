// src/pages/services/digital-marketing/website-development.js

import React, { useEffect, useLayoutEffect, useRef, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { digitalMarketingOfferingsDetails, websiteDevelopmentPortfolio } from '@/data/trendtwistrData';
import { CheckCircle } from 'lucide-react';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

// Register the plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const pageData = digitalMarketingOfferingsDetails.find(o => o.id === 'website-development');

const WebsiteDevelopmentPage = () => {
  const mainRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!pageData) return <div>Page data not found.</div>;
  
  const selectedWebsite = websiteDevelopmentPortfolio[selectedIndex];

  if (!selectedWebsite) return <div>Portfolio data not found.</div>;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Staggered Text Reveal Animation for the Header
      const split = new SplitText(".header-title", { type: "chars" });
      gsap.from(split.chars, {
        duration: 0.8,
        opacity: 0,
        y: 60,
        ease: "power3.out",
        stagger: 0.05,
      });

      // 2. Parallax Image & Text for Approach Section
      const approachSection = document.querySelector(".approach-section");
      if (approachSection) {
        gsap.from(approachSection.querySelector(".approach-image"), {
            x: -100, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: approachSection, start: "top 75%" }
        });
        gsap.from(approachSection.querySelector(".approach-text"), {
            x: 100, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: approachSection, start: "top 75%" }
        });
      }
      
      // 3. "Elastic Pop-in" for Service Icons
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
      
      // 4. "Batch" Reveal for Portfolio
      const portfolioItems = gsap.utils.toArray(".portfolio-item");
      gsap.from(portfolioItems, {
          y: 100,
          autoAlpha: 0,
          stagger: 0.2,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
              trigger: ".portfolio-section",
              start: "top 80%",
          }
      })

    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{`${pageData.title} | Digital Marketing Services`}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        <section className="section-padding text-white" style={{ backgroundColor: "#f87d39" }}>
          <div className="container-padding">
            <h1 className="header-title text-4xl md:text-6xl font-extrabold text-center">{pageData.title}</h1>
          </div>
        </section>

        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/digital-marketing" className="hover:text-primary">Digital Marketing</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{pageData.title}</span>
            </div>
        </div>
        
        {pageData.approach && (
            <section className="section-padding approach-section overflow-hidden">
                <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
                    <div className="approach-image relative w-full h-80 md:h-96">
                        <Image 
                            src={pageData.approach.image}
                            alt={`${pageData.title} approach`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="approach-text">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY_COLOR}}>{pageData.approach.title}</h2>
                        <p className="text-lg text-subtle-text leading-relaxed">{pageData.approach.description}</p>
                    </div>
                </div>
            </section>
        )}

        {pageData.providedServices && (
          <section className="py-16 md:py-24 bg-light-bg">
            <div className="container-padding">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary">Services We Provide</h2>
              </div>
              <div className="services-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
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
        
        {pageData.motionSection && (
          <section className="section-padding">
              <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
                  <div className="gsap-reveal relative w-full h-80 md:h-96">
                      <Image 
                          src={pageData.motionSection.gifPath}
                          alt={pageData.motionSection.title}
                          fill
                          className="object-contain"
                          unoptimized={true}
                      />
                  </div>
                  <div className="gsap-reveal md:order-first">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY_COLOR}}>{pageData.motionSection.title}</h2>
                      <p className="text-lg text-subtle-text leading-relaxed">{pageData.motionSection.description}</p>
                  </div>
              </div>
          </section>
        )}

        <section className="py-16 md:py-24 bg-light-bg portfolio-section">
            <div className="container-padding">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Our Work in Action</h2>
                    <p className="text-lg text-subtle-text max-w-2xl mx-auto mt-4">An interactive look at some of our live projects.</p>
                </div>

                <div className="portfolio-item browser-frame rounded-lg shadow-2xl border border-slate-200 max-w-6xl mx-auto">
                    <div className="browser-header flex items-center p-3 bg-slate-100 border-b border-slate-200">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-grow text-center text-sm text-subtle-text px-4 truncate">
                            {selectedWebsite.liveUrl}
                        </div>
                    </div>
                    <div className="w-full aspect-video bg-slate-50">
                      <iframe
                        key={selectedWebsite.id}
                        src={selectedWebsite.liveUrl}
                        title={selectedWebsite.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                </div>

                <div className="portfolio-item flex justify-center items-center gap-4 mt-8">
                    {websiteDevelopmentPortfolio.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedIndex(index)}
                            className={`h-12 w-12 rounded-full font-bold text-lg transition-all duration-200 ${
                                index === selectedIndex 
                                ? 'bg-primary text-white scale-110 shadow-lg' 
                                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
        
    
      </div>
    </>
  );
};

export default WebsiteDevelopmentPage;