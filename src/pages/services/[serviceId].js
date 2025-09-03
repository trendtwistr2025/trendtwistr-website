// src/pages/services/[serviceId].js

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Make sure Image is imported
import { 
    CheckCircle, Target, DollarSign, Users, Search, Megaphone, Share2, MailIcon, 
    BookUser, FileText, Calculator, Lightbulb, UserSearch, ClipboardList, Presentation, Briefcase,
    Palette, LayoutTemplate
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { services, digitalMarketingDetails } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, TEXT_ON_PRIMARY, DARK_TEXT, SUBTLE_TEXT } from '@/styles/theme';
import ServiceHeader from '@/components/ServiceHeader';

gsap.registerPlugin(ScrollTrigger, SplitText);

const iconMap = {
  Target, DollarSign, Users, Search, Megaphone, Share2, MailIcon, BookUser, FileText, 
  Calculator, Lightbulb, UserSearch, ClipboardList, Presentation, Briefcase, Palette, LayoutTemplate
};

const ServiceDetailPage = ({ service }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // 1. Staggered Text Reveal Animation for the Header
        // Note: This animation is now inside the ServiceHeader component.
        // If you want it on the h1 inside ServiceHeader, you would add a similar
        // useEffect inside that component.

        // 2. Animate all sections to fade in as you scroll
        gsap.utils.toArray('.gsap-reveal').forEach(el => {
            gsap.fromTo(el,
            { autoAlpha: 0, y: 50 },
            { 
                autoAlpha: 1, 
                y: 0, 
                duration: 0.8, 
                ease: 'power2.out',
                scrollTrigger: {
                trigger: el,
                start: "top 85%",
                }
            }
            );
        });
        
        // 3. 3D Card Flip Animation for "Why We Are Different" cards
        const cards = gsap.utils.toArray(".point-card");
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

  if (!service) return <div>Service not found.</div>;
  
  const IconComponent = iconMap[service.iconName] || Target;

  return (
    <>
      <Head>
        <title>{`${service.title} | Trendtwistr Services`}</title>
        <meta name="description" content={service.detailedDescription || service.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        <ServiceHeader service={service} IconComponent={IconComponent} />
        
        <section className="section-padding relative z-10 bg-white">
          <div className="container-padding max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-12 gsap-reveal">Our Approach to {service.title}</h2>
            <p className="text-lg text-subtle-text leading-relaxed text-center max-w-3xl mx-auto mb-16 gsap-reveal">
              {service.detailedDescription}
            </p>
          </div>
        </section>

        {service.id === 'digital-marketing' && (
          <>
            <section className="pb-16 py-10 md:pb-24 bg-light-bg">
                <div className="container-padding">
                    <div className="text-center mb-12">
                        <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-primary">
                            Our Top Innovative Services
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.keyOfferings.map((offering) => {
                            const OfferingIcon = iconMap[offering.iconName] || CheckCircle;
                            return (
                                <Link key={offering.id} href={`/services/digital-marketing/${offering.id}`} className="gsap-reveal block">
                                    <div className="bg-white p-6 rounded-lg shadow-md h-full hover:shadow-xl hover:-translate-y-1 transition-all">
                                        <OfferingIcon size={32} className="mb-4" style={{color: service.color}}/>
                                        <h3 className="text-xl font-semibold text-dark-text mb-2">{offering.title}</h3>
                                        <p className="text-subtle-text text-sm">{offering.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-10 bg-white">
                <div className="container-padding">
                <div className="text-center mb-12">
                    <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-primary">
                    {digitalMarketingDetails.whyWeAreDifferent.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {digitalMarketingDetails.whyWeAreDifferent.points.map((point) => (
                    <div key={point.title} className="point-card gsap-reveal bg-light-bg p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-dark-text mb-3" style={{color: service.color}}>{point.title}</h3>
                        <p className="text-subtle-text text-sm">{point.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>
          </>
        )}

        {service.id !== 'digital-marketing' && (
          <>
            <section className="pb-16 md:pb-24 bg-light-bg">
                <div className="container-padding">
                    <div className="text-center mb-12"><h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text">Key Offerings</h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {service.keyOfferings.map((offering) => {
                          const OfferingIcon = iconMap[offering.iconName] || CheckCircle;
                          return (
                            <div key={offering.title} className="bg-white p-6 rounded-lg shadow-md gsap-reveal">
                              <OfferingIcon size={32} className="mb-4" style={{color: service.color}}/>
                              <h3 className="text-xl font-semibold text-dark-text mb-2">{offering.title}</h3>
                              <p className="text-subtle-text text-sm">{offering.description}</p>
                            </div>
                          );
                        })}
                    </div>
                </div>
            </section>
            {service.whyWeAreDifferent && (
                <section className="section-padding bg-white">
                    <div className="container-padding text-center max-w-4xl mx-auto">
                        <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-6">Why We Are Different</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {service.whyWeAreDifferent.map((point) => (
                                <div key={point.number} className="point-card gsap-reveal border border-slate-200 rounded-lg p-8 text-center">
                                    <span className="font-bold text-5xl" style={{color: service.color}}>{point.number}</span>
                                    <p className="text-subtle-text mt-4">{point.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
          </>
        )}
        
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
          <div className="container-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Project?</h2>
            <Link href="/contact.html" className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all`} style={{backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY}}>
                Get Your Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = services.map(service => ({
    params: { serviceId: service.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const serviceData = services.find(s => s.id === params.serviceId);
  return {
    props: {
      service: serviceData || null,
    },
  };
}

export default ServiceDetailPage;