// src/pages/services/digital-marketing/seo.js

import React, { useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { digitalMarketingOfferingsDetails } from '@/data/trendtwistrData';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';
import { Check, TrendingUp } from 'lucide-react';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Find the specific data for this page
const pageData = digitalMarketingOfferingsDetails.find(o => o.id === 'seo');

const SEOPage = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Text Reveal for the Header
      const split = new SplitText(".header-title", { type: "chars" });
      gsap.from(split.chars, {
        duration: 0.8,
        opacity: 0,
        y: 60,
        ease: "power3.out",
        stagger: 0.05,
      });

      // 2. Parallax for Approach Section
      const approachSection = document.querySelector(".approach-section");
      if (approachSection) {
        gsap.from(approachSection.querySelector(".approach-image"), {
            xPercent: -20, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: approachSection, start: "top 75%" }
        });
        gsap.from(approachSection.querySelector(".approach-text"), {
            xPercent: 20, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: approachSection, start: "top 75%" }
        });
      }

      // 3. Elastic Pop-in for Service Icons
      const serviceItems = gsap.utils.toArray(".service-item");
      gsap.from(serviceItems, {
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" }
      });

      // 4. 3D Card Flip for Process Section
      const processCards = gsap.utils.toArray(".process-card");
      processCards.forEach((card) => {
        gsap.fromTo(card, 
          { autoAlpha: 0, rotationY: -90, transformPerspective: 800 },
          { 
            duration: 1, autoAlpha: 1, rotationY: 0, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%" }
          }
        );
      });
      
      // 5. General Fade-in for Results Section
       gsap.utils.toArray('.results-card').forEach(el => {
        gsap.fromTo(el, { autoAlpha: 0, y: 50 }, { 
            autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: "top 85%" }
        });
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
            <section className="py-10 approach-section overflow-hidden">
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
        
        {pageData.ourProcess && (
            <section className="py-10">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Our SEO Process</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pageData.ourProcess.map((step) => (
                            <div key={step.title} className="process-card bg-light-bg p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-dark-text mb-3" style={{color: '#f87d39'}}>{step.title}</h3>
                                <p className="text-subtle-text text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {pageData.caseStudies && (
            <section className="py-10 bg-light-bg">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Proven Results</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {pageData.caseStudies.map((study) => (
                            <div key={study.client} className="results-card border border-slate-200 rounded-lg p-8">
                                {study.image && (
                                    <div className="relative w-full aspect-video h-80 mb-4">
                                        <Image 
                                            src={study.image} 
                                            alt={`${study.client} results graph`} 
                                            fill 
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                                <div className="flex items-center mb-4">
                                    <TrendingUp size={32} className="mr-4 text-primary" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-primary">{study.result}</h3>
                                        <p className="font-semibold text-dark-text">{study.client}</p>
                                    </div>
                                </div>
                                <p className="text-subtle-text text-sm">{study.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}
        
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            <div className="container-padding text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Boost Your Rankings?</h2>
                <Link href="/contact" className="font-semibold py-3 px-8 rounded-lg text-lg text-white" style={{backgroundColor: PRIMARY_COLOR}}>
                    Get Your Free SEO Audit
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default SEOPage;