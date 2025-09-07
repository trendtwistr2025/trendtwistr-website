// src/pages/services/accounting/[offeringId].js

import React, { useLayoutEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { services, accountingOfferingsDetails } from '@/data/trendtwistrData';
import { CheckCircle, Heart, ShieldCheck, BarChart2 } from 'lucide-react';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyChooseUsIconMap = {
    "Save Time & Reduce Stress": Heart,
    "Ensure Accuracy & Compliance": ShieldCheck,
    "Gain Financial Clarity": BarChart2,
};

const OfferingDetailPage = ({ offering }) => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // General fade-in for sections
      gsap.utils.toArray('.gsap-reveal').forEach(el => {
        gsap.fromTo(el, { autoAlpha: 0, y: 50 }, { 
            autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: "top 85%" }
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  if (!offering) return <div>Details not found.</div>;

  const accountingService = services.find(s => s.id === 'accounting');
  const serviceColor = accountingService.color || '#2B267F';

  return (
    <>
      <Head>
        <title>{`${offering.title} | Accounting Services`}</title>
        <meta name="description" content={offering.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        <section className="section-padding text-white" style={{ backgroundColor: serviceColor }}>
          <div className="container-padding">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">{offering.title}</h1>
          </div>
        </section>

        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services.html" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/accounting.html" className="hover:text-primary">Accounting</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{offering.title}</span>
            </div>
        </div>
        
        <section className="section-padding">
          <div className="container-padding max-w-4xl mx-auto gsap-reveal">
            <p className="text-lg text-subtle-text leading-relaxed text-center mb-12">
              {offering.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {offering.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={22} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-dark-text">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {offering.ourProcess && (
            <section className="section-padding bg-light-bg">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="gsap-reveal text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Our Process</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {offering.ourProcess.map((step) => (
                            <div key={step.title} className="gsap-reveal bg-white p-8 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-semibold text-dark-text mb-3" style={{color: serviceColor}}>{step.title}</h3>
                                <p className="text-subtle-text text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* --- NEW "WHY CHOOSE US" SECTION --- */}
        {offering.whyChooseUs && (
            <section className="section-padding">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="gsap-reveal text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Why Choose Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {offering.whyChooseUs.map((benefit) => {
                            const Icon = whyChooseUsIconMap[benefit.title] || CheckCircle;
                            return (
                                <div key={benefit.title} className="gsap-reveal text-center">
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
                <h2 className="text-3xl font-bold text-white mb-6">Need Expert Financial Guidance?</h2>
                <Link href="/contact.html" className="font-semibold py-3 px-8 rounded-lg text-lg text-white" style={{backgroundColor: PRIMARY_COLOR}}>
                    Contact Our Team
                </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = accountingOfferingsDetails.map(offering => ({
    params: { offeringId: offering.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const offeringData = accountingOfferingsDetails.find(o => o.id === params.offeringId);
  return {
    props: {
      offering: offeringData || null,
    },
  };
}

export default OfferingDetailPage;