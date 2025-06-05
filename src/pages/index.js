// src/pages/index.js
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Palette, Users as UsersIcon, Sparkles, LifeBuoy, TrendingUp, Lightbulb, ShieldCheck } from 'lucide-react'; // CORRECTED: Added ShieldCheck
import { gsap } from 'gsap';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_ON_PRIMARY, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW, LIGHT_BACKGROUND } from './_app';
import { companyName, services, testimonials } from '../data/trendtwistrData';
import ServiceCardHighlight from '../components/ServiceCardHighlight';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const heroContentRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const whyChooseUsSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Hero Animation
      if (heroContentRef.current) {
        gsap.fromTo(heroContentRef.current.children, 
          { autoAlpha: 0, y: 50 }, 
          { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.2, delay: 0.3 }
        );
      }

      const animateSection = (sectionRef) => {
        if (sectionRef.current) {
          gsap.fromTo(sectionRef.current.querySelectorAll('.section-title, .section-subtitle, .section-content-item'),
            { autoAlpha: 0, y: 40 },
            { 
              autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" }
            }
          );
        }
      };
      
      animateSection(servicesSectionRef);
      animateSection(whyChooseUsSectionRef);
      animateSection(testimonialsSectionRef);
      animateSection(ctaSectionRef);
    }
  }, []);

  const whyChooseUsItems = [
    { icon: Lightbulb, title: "Innovative Strategies", description: "Cutting-edge solutions tailored to your unique business needs." },
    { icon: ShieldCheck, title: "Reliable Expertise", description: "A team of seasoned professionals dedicated to your success." },
    { icon: TrendingUp, title: "Results-Driven", description: "Focused on delivering measurable growth and tangible outcomes." },
    { icon: UsersIcon, title: "Client-Centric Approach", description: "Your goals are our priority; we partner with you every step." },
  ];

  return (
    <>
      <Head>
        <title>{companyName} | Drive Growth with Expert Solutions</title>
        <meta name="description" content={`${companyName} offers expert Digital Marketing, Accounting, and Recruitment services to propel your business forward.`} />
      </Head>

      {/* Hero Section */}
      <section 
        className="relative text-white py-32 md:py-48 min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden" 
        style={{ background: `linear-gradient(rgba(43, 38, 127, 0.7), rgba(43, 38, 127, 0.85)), url('/assets/hero-background.jpg') no-repeat center center/cover` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-primary/30 opacity-70"></div>
        <div ref={heroContentRef} className="container-padding relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight opacity-0">
            Twist Your Trends, <span className="block" style={{color: ACCENT_YELLOW}}>Ignite Your Growth.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light opacity-0">
            {companyName} empowers your business with strategic Digital Marketing, precise Accounting, and targeted Recruitment solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 opacity-0">
            <Link href="/services"
              style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }}
              className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-primary`}>
              Our Services
            </Link>
            <Link href="/contact"
              className={`bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3.5 px-10 rounded-lg text-lg border border-white/30 shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-white`}>
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={servicesSectionRef} className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className={`section-title text-3xl md:text-4xl font-bold text-dark-text mb-4 opacity-0`}>
            Comprehensive Solutions for <span style={{color: PRIMARY_COLOR}}>Your Success</span>
          </h2>
          <p className={`section-subtitle text-lg text-subtle-text mb-16 max-w-2xl mx-auto opacity-0`}>
            We offer a suite of expert services designed to address your core business needs and drive sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service) => (
              <div key={service.id} className="section-content-item opacity-0">
                 <ServiceCardHighlight service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyChooseUsSectionRef} className={`section-padding bg-[${LIGHT_BACKGROUND}]`}>
        <div className="container-padding text-center">
          <h2 className={`section-title text-3xl md:text-4xl font-bold text-dark-text mb-4 opacity-0`}>
            Why Partner with <span style={{color: PRIMARY_COLOR}}>{companyName}?</span>
          </h2>
          <p className={`section-subtitle text-lg text-subtle-text mb-16 max-w-2xl mx-auto opacity-0`}>
            We're more than just a service provider; we're your dedicated partner in achieving business excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item) => (
              <div key={item.title} className="section-content-item bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 opacity-0">
                <item.icon size={48} style={{color: PRIMARY_COLOR}} className="mx-auto mb-5" />
                <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
                <p className="text-subtle-text text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsSectionRef} className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className={`section-title text-3xl md:text-4xl font-bold text-dark-text mb-4 opacity-0`}>
            Hear From Our <span style={{color: PRIMARY_COLOR}}>Valued Clients</span>
          </h2>
          <p className={`section-subtitle text-lg text-subtle-text mb-16 max-w-2xl mx-auto opacity-0`}>
            Discover how we've helped businesses like yours thrive and achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.slice(0,3).map(testimonial => ( 
              <div key={testimonial.id} className="section-content-item opacity-0">
                 <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={ctaSectionRef} className="section-padding" style={{backgroundColor: SECONDARY_COLOR}}>
        <div className="container-padding text-center">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-white mb-6 opacity-0">
            Ready to <span style={{color: ACCENT_YELLOW}}>Twist Your Trends</span> and Grow?
          </h2>
          <p className="section-subtitle text-lg text-slate-200 mb-10 max-w-xl mx-auto opacity-0">
            Let's discuss how Trendtwistr can tailor solutions to meet your unique business challenges.
          </p>
          <div className="section-content-item opacity-0">
            <Link href="/contact"
                style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }}
                className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-primary`}>
                Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;
