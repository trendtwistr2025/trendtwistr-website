// src/pages/services.js

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Target, DollarSign, Users, Presentation, Bot, Star } from 'lucide-react'; // Import all icons
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { companyName, services, ourProcessSteps } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_ON_PRIMARY, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW, LIGHT_BACKGROUND } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

// Map string names to imported icon components
const iconMap = {
  Target,
  DollarSign,
  Users,
  Presentation,
  Bot,
  Star,
};

const ServiceDetailSection = ({ service, index }) => {
  const isReversed = index % 2 === 1;
  const sectionRef = useRef(null);
  const IconComponent = iconMap[service.iconName] || Target; // Get the correct icon component

  useEffect(() => {
    if (sectionRef.current) {
      const imageEl = sectionRef.current.querySelector('.service-image-wrapper');
      const contentEl = sectionRef.current.querySelector('.service-content-wrapper');
      
      gsap.fromTo(imageEl, { autoAlpha: 0, x: isReversed ? 50 : -50 }, { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }});
      gsap.fromTo(contentEl, { autoAlpha: 0, x: isReversed ? -50 : 50 }, { autoAlpha: 1, x: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }});
    }
  }, [isReversed]);

  return (
    <section id={service.id} ref={sectionRef} className="section-padding overflow-x-hidden">
      <div className={`container-padding grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
        <div className={`service-image-wrapper relative w-full h-80 md:h-96 rounded-xl shadow-2xl overflow-hidden ${isReversed ? 'md:order-last' : ''}`}>
          <Image src={service.image} alt={`${service.title} service at Trendtwistr`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="service-content-wrapper">
          <IconComponent size={40} className="mb-4" style={{ color: service.color }} />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" style={{ color: service.color }}>{service.title}</h2>
          <p className="text-lg text-subtle-text mb-6">{service.detailedDescription || service.description}</p>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-dark-text">Key Offerings:</h4>
            {/* CORRECTED: Loop through objects and use offering.title */}
            {service.keyOfferings.map((offering) => (
              <div key={offering.title} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-dark-text">{offering.title}</span>
              </div>
            ))}
          </div>
          <Link href={`/services/${service.id}`} style={{ backgroundColor: service.color }} className={`mt-8 inline-block font-semibold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-all text-white`}>
              View More
          </Link>
        </div>
      </div>
    </section>
  );
};


const ServicesPage = () => {
  const mainContentRef = useRef(null);
  const pageHeaderRef = useRef(null);
  const headerContentRef = useRef(null);
  const headerBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = pageHeaderRef.current;
      if (header) {
        const content = headerContentRef.current;
        const bg = headerBgRef.current;
        const handleMouseMove = (e) => {
          if (!content || !bg) return;
          const rect = header.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          gsap.to(content, { rotationY: x * 15, rotationX: -y * 15, transformPerspective: 1000, duration: 0.8, ease: 'power2.out' });
          gsap.to(bg, { x: -x * 30, y: -y * 30, duration: 1, ease: 'power2.out' });
        };
        header.addEventListener('mousemove', handleMouseMove);
        return () => header.removeEventListener('mousemove', handleMouseMove);
      }
    }, mainContentRef);
    
    return () => ctx.revert();
  }, []);

  useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray('.gsap-reveal').forEach(el => {
            gsap.fromTo(el,
              { autoAlpha: 0, y: 50 },
              { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
              }
            );
        });
      }, mainContentRef);
      return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>{`Our Services | ${companyName}`}</title>
        <meta name="description" content="Explore expert Digital Marketing, Accounting, and Recruitment solutions offered by Trendtwistr." />
      </Head>
      <div ref={mainContentRef} className="bg-white">
        <section ref={pageHeaderRef} className="relative section-padding text-white text-center overflow-hidden">
          <div 
            ref={headerBgRef}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/assets/hero-background.jpg')`, transform: 'scale(1.1)' }}
          >
            <div className="absolute inset-0 bg-secondary/80"></div>
          </div>
          <div ref={headerContentRef} className="container-padding relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{color: PRIMARY_COLOR}}>Our Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              We provide a suite of integrated services designed to empower your business, drive growth, and ensure success.
            </p>
          </div>
        </section>

        {services.map((service, index) => (
          <div key={service.id} className={index % 2 === 1 ? `bg-light-bg` : 'bg-white'}>
            <ServiceDetailSection service={service} index={index} />
          </div>
        ))}
        
        <section className={`section-padding bg-light-bg`}>
          <div className="container-padding text-center">
            <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Approach</h2>
            <p className="gsap-reveal text-lg text-subtle-text mb-16 max-w-2xl mx-auto">A transparent and collaborative process designed for your success.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourProcessSteps.map((step) => {
                const IconComponent = iconMap[step.iconName] || Target; // Get the correct icon
                return (
                    <div key={step.title} className="gsap-reveal text-center p-6">
                        <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-primary/10">
                        <IconComponent size={40} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-dark-text mb-3">{step.title}</h3>
                        <p className="text-subtle-text text-sm">{step.description}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            <div className="container-padding text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Elevate Your Business?
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                    Let's connect. Find out how Trendtwistr's expert solutions can be tailored to your unique goals.
                </p>
                <Link href="/contact" style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }} className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all`}>
                    Contact Us Today
                </Link>
            </div>
        </section>
        </div>
    </>
  );
};

export default ServicesPage;