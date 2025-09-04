// src/pages/services/digital-marketing/paid-advertising.js

import React, { useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { digitalMarketingOfferingsDetails } from '@/data/trendtwistrData';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const pageData = digitalMarketingOfferingsDetails.find(o => o.id === 'paid-advertising');

const PaidAdvertisingPage = () => {
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

      // 4. 3D Card Flip for Process & Platforms Sections
      const cards = gsap.utils.toArray(".animated-card");
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { autoAlpha: 0, rotationY: -90, transformPerspective: 800 },
          { 
            duration: 1, 
            autoAlpha: 1, 
            rotationY: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
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
        
        {/* "Our Process" Section (RESTORED) */}
        {pageData.ourProcess && (
            <section className="py-10">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pageData.ourProcess.map((step) => (
                            <div key={step.title} className="animated-card bg-light-bg p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-dark-text mb-3" style={{color: '#f87d39'}}>{step.title}</h3>
                                <p className="text-subtle-text text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {pageData.platforms && (
            <section className="py-10 bg-light-bg">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Platforms We Master</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {pageData.platforms.map((platform) => (
                            <div key={platform.title} className="animated-card bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                                <div className="relative h-24 w-24 mb-4">
                                    <Image
                                        src={platform.iconPath}
                                        alt={`${platform.title} logo`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-dark-text">{platform.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}
        
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            <div className="container-padding text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Immediate Results?</h2>
                <Link href="/contact" className="font-semibold py-3 px-8 rounded-lg text-lg text-white" style={{backgroundColor: PRIMARY_COLOR}}>
                    Launch Your Campaign
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default PaidAdvertisingPage;