import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { companyName, services } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_ON_PRIMARY, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW, LIGHT_BACKGROUND } from './_app';

// A reusable component for the detailed service sections within this page
const ServiceDetailSection = ({ service, index }) => {
  const isReversed = index % 2 === 1; // Used to alternate the layout (image left/right)
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate the section when it scrolls into view
    if (sectionRef.current) {
      const imageEl = sectionRef.current.querySelector('.service-image-wrapper');
      const contentEl = sectionRef.current.querySelector('.service-content-wrapper');
      
      gsap.fromTo(imageEl, 
        { autoAlpha: 0, x: isReversed ? 50 : -50 }, // Slide from opposite sides
        { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%", // Start animation when 80% of the section is visible
            toggleActions: "play none none none" 
          }
        }
      );
      gsap.fromTo(contentEl, 
        { autoAlpha: 0, x: isReversed ? -50 : 50 },
        { autoAlpha: 1, x: 0, duration: 0.8, ease: 'power2.out', delay: 0.2, // Slight delay for content
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [isReversed]);

  return (
    <section 
      id={service.id} // This ID allows for hash-linking (e.g., /services#digital-marketing)
      ref={sectionRef} 
      className="section-padding overflow-x-hidden" // overflow-x-hidden prevents slide-in animations from showing scrollbars
    >
      <div className={`container-padding grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
        <div className={`service-image-wrapper relative w-full h-80 md:h-96 rounded-xl shadow-2xl overflow-hidden ${isReversed ? 'md:order-last' : ''}`}>
          <Image
            src={service.image}
            alt={`${service.title} service at Trendtwistr`}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="service-content-wrapper">
          <service.icon size={40} className="mb-4" style={{ color: service.color }} />
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4" style={{ color: service.color }}>
            {service.title}
          </h2>
          <p className="text-lg text-subtle-text mb-6">
            {service.detailedDescription || service.description}
          </p>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-dark-text">Key Offerings:</h4>
            {service.keyOfferings.map((offering) => (
              <div key={offering} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-dark-text">{offering}</span>
              </div>
            ))}
          </div>
          <Link href="/contact"
              style={{ backgroundColor: service.color }}
              className={`mt-8 inline-block font-semibold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-all text-white`}>
              Inquire About {service.title}
          </Link>
        </div>
      </div>
    </section>
  );
};


const ServicesPage = () => {
    const pageHeaderRef = useRef(null);

    useEffect(() => {
        if(pageHeaderRef.current) {
            gsap.fromTo(pageHeaderRef.current, 
                { autoAlpha: 0, y: 30 },
                { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' }
            );
        }
    }, []);

  return (
    <>
      <Head>
        <title>{`Our Services | ${companyName}`}</title>
        <meta name="description" content="Explore expert Digital Marketing, Accounting, and Recruitment solutions offered by Trendtwistr." />
      </Head>
      <div className="bg-white">

        {/* Page Header */}
        <section ref={pageHeaderRef} className="section-padding bg-secondary text-white text-center gsap-reveal">
          <div className="container-padding">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{color: ACCENT_YELLOW}}>Our Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              We provide a suite of integrated services designed to empower your business, drive growth, and ensure success.
            </p>
          </div>
        </section>

        {/* Service Details */}
        {services.map((service, index) => (
          // Add alternating background colors for visual separation
          <div key={service.id} style={{backgroundColor: index % 2 === 1 ? LIGHT_BACKGROUND : 'white'}}>
            <ServiceDetailSection service={service} index={index} />
          </div>
        ))}

        {/* CTA Section */}
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            <div className="container-padding text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Elevate Your Business?
                </h2>
                <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                    Let's connect. Find out how Trendtwistr's expert solutions can be tailored to your unique goals.
                </p>
                <Link href="/contact"
                    style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }}
                    className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all`}>
                    Contact Us Today
                </Link>
            </div>
        </section>

      </div>
    </>
  );
};

export default ServicesPage;
