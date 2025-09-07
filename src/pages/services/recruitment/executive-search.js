// src/pages/services/recruitment/executive-search.js

import React, { useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { recruitmentOfferingsDetails, services } from '@/data/trendtwistrData';
import { Check, Lock, Network, UserCheck } from 'lucide-react';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const pageData = recruitmentOfferingsDetails.find(o => o.id === 'executive-search');

const whyChooseUsIconMap = {
    "Absolute Discretion": Lock,
    "Deep Network Access": Network,
    "Rigorous Vetting Process": UserCheck,
};

const ExecutiveSearchPage = () => {
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

      // 2. Parallax for Main Content Section
      const mainContent = document.querySelector(".main-content-section");
      if (mainContent) {
        gsap.from(mainContent.querySelector(".main-content-image"), {
            xPercent: -20, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: mainContent, start: "top 75%" }
        });
        gsap.from(mainContent.querySelector(".main-content-text"), {
            xPercent: 20, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: mainContent, start: "top 75%" }
        });
      }

      // 3. General fade-in for services list
      gsap.utils.toArray('.service-point').forEach(el => {
        gsap.fromTo(el, { autoAlpha: 0, y: 50 }, { 
            autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: "top 90%" }
        });
      });

      // 4. Elastic Pop-in for Why Choose Us items
      const benefitItems = gsap.utils.toArray(".benefit-item");
      gsap.from(benefitItems, {
        duration: 0.8,
        scale: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: { trigger: ".benefits-grid", start: "top 80%" }
      });

    }, mainRef);
    return () => ctx.revert();
  }, []);

  if (!pageData) return <div>Page data not found.</div>;
  
  const recruitmentService = services.find(s => s.id === 'recruitment');
  const serviceColor = recruitmentService.color || '#34D399';

  return (
    <>
      <Head>
        <title>{`${pageData.title} | Recruitment Services`}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        <section className="section-padding text-white" style={{ backgroundColor: serviceColor }}>
          <div className="container-padding">
            <h1 className="header-title text-4xl md:text-6xl font-extrabold text-center">{pageData.title}</h1>
          </div>
        </section>

        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services.html" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/recruitment.html" className="hover:text-primary">Recruitment</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{pageData.title}</span>
            </div>
        </div>
        
        <section className="py-10 main-content-section overflow-hidden">
          <div className="container-padding grid lg:grid-cols-2 gap-16 items-center">
            <div className="main-content-image relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src={pageData.mainContent.image}
                alt={pageData.mainContent.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="main-content-text">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: SECONDARY_COLOR}}>
                {pageData.mainContent.title}
              </h2>
              <p className="text-lg text-subtle-text leading-relaxed">
                {pageData.mainContent.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-light-bg">
          <div className="container-padding max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Executive Search Focus</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {pageData.points.map((point) => (
                <div key={point} className="service-point flex items-start gap-4">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1">
                      <Check size={20} />
                    </div>
                  <span className="text-dark-text">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {pageData.whyChooseUs && (
            <section className="py-10">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Why Trust Trendtwistr?</h2>
                    </div>
                    <div className="benefits-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {pageData.whyChooseUs.map((benefit) => {
                            const Icon = whyChooseUsIconMap[benefit.title] || Check;
                            return (
                                <div key={benefit.title} className="benefit-item text-center">
                                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full" style={{backgroundColor: `${serviceColor}20`}}>
                                        <Icon size={40} style={{ color: serviceColor }} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-dark-text mb-3">{benefit.title}</h3>
                                    <p className="text-subtle-text text-sm">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        )}

        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            <div className="container-padding text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Find Your Next Leader</h2>
                <Link href="/contact.html" className="font-semibold py-3 px-8 rounded-lg text-lg text-white" style={{backgroundColor: PRIMARY_COLOR}}>
                    Begin Your Search
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default ExecutiveSearchPage;