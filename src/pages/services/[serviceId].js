import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { 
    CheckCircle, Target, DollarSign, Users, Search, Megaphone, Share2, MailIcon, 
    BookUser, FileText, Calculator, Lightbulb, UserSearch, ClipboardUser, Presentation, Briefcase 
} from 'lucide-react';
import { gsap } from 'gsap';
import { services, portfolioItems } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, TEXT_ON_PRIMARY, DARK_TEXT } from '@/styles/theme';
import PortfolioCard from '@/components/PortfolioCard';

// Icon map for all possible icons used on this page
const iconMap = {
  // Main service icons
  Target,
  DollarSign,
  Users,
  // Key offering icons
  Search,
  Megaphone,
  Share2,
  MailIcon,
  BookUser,
  FileText,
  Calculator,
  Lightbulb,
  UserSearch,
  ClipboardUser,
  Presentation,
  Briefcase,
};

const ServiceDetailPage = ({ service, portfolio }) => {
  const mainContentRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".gsap-reveal",
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: ".gsap-reveal", start: "top 85%", toggleActions: "play none none none" }
        }
      );
    }, mainContentRef);
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
      <div ref={mainContentRef} className="bg-white">
        
        {/* Header Section */}
        <section className="section-padding text-white" style={{ backgroundColor: service.color }}>
          <div className="container-padding text-center">
            <IconComponent size={60} className="mx-auto mb-6 gsap-reveal" />
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 gsap-reveal">{service.title}</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 gsap-reveal">{service.tagline}</p>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="section-padding">
          <div className="container-padding max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-text text-center mb-12 gsap-reveal">Our Approach to {service.title}</h2>
            <p className="text-lg text-subtle-text leading-relaxed text-center max-w-3xl mx-auto mb-16 gsap-reveal">
              {service.detailedDescription}
            </p>
          </div>
        </section>

        {/* --- Key Offerings Section (Corrected) --- */}
        <section className="pb-16 md:pb-24 bg-light-bg">
            <div className="container-padding">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {service.keyOfferings.map((offering) => {
                      const OfferingIcon = iconMap[offering.iconName] || CheckCircle; // Use the iconMap
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

        {/* --- Portfolio Section --- */}
        {service.id === 'digital-marketing' && portfolio.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-padding text-center">
              <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Work in Action</h2>
              <p className="gsap-reveal text-lg text-subtle-text mb-16 max-w-2xl mx-auto">A selection of our successful digital marketing projects.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.map(item => (
                  <div key={item.id} className="gsap-reveal">
                    <PortfolioCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
          <div className="container-padding text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Discuss Your Project?</h2>
            <Link href="/contact" style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }} className={`font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all`}>
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
  const servicePortfolio = portfolioItems.filter(p => p.serviceId === params.serviceId);

  return {
    props: {
      service: serviceData || null,
      portfolio: servicePortfolio || [],
    },
  };
}

export default ServiceDetailPage;