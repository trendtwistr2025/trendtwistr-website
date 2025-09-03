// src/pages/services/digital-marketing/[offeringId].js

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { services, digitalMarketingOfferingsDetails, graphicDesignPortfolio } from '@/data/trendtwistrData';
import { CheckCircle, Palette, BookOpen, Award, PenSquare, FileText, Share2, BadgeCheck, Mail, Presentation, Monitor, Contact, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { DARK_TEXT, PRIMARY_COLOR, SECONDARY_COLOR } from '@/styles/theme';

// Import GSAP and its plugins
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

// Import Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger, SplitText);

const offeringIconMap = {
  Palette, BookOpen, Award, PenSquare, FileText, Share2, BadgeCheck, Mail, Presentation, Monitor, Contact, Image: ImageIcon,
};

const OfferingDetailPage = ({ offering }) => {
  const swiperRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered Text Reveal Animation for the Header
      const split = new SplitText(".header-title-animate", { type: "chars" });
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
            xPercent: -20, autoAlpha: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: approachSection, start: "top 75%" }
        });
        gsap.from(approachSection.querySelector(".approach-text"), {
            xPercent: 20, autoAlpha: 0, duration: 1, ease: 'power2.out',
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
      const portfolioSection = document.querySelector(".portfolio-section");
      if (portfolioSection) {
        gsap.from(portfolioSection, {
            y: 100,
            autoAlpha: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: portfolioSection,
                start: "top 85%",
            }
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  if (!offering) return <div>Details not found.</div>;

  const digitalMarketingService = services.find(s => s.id === 'digital-marketing');
  const serviceColor = digitalMarketingService.color || '#f87d39';

  return (
    <>
      <Head>
        <title>{`${offering.title} | Digital Marketing Services`}</title>
        <meta name="description" content={offering.description} />
      </Head>
      <div ref={mainRef} className="bg-white">
        
        <section className="section-padding text-white" style={{ backgroundColor: serviceColor }}>
          <div className="container-padding">
            <h1 className="header-title-animate text-4xl md:text-6xl font-extrabold text-center">{offering.title}</h1>
          </div>
        </section>

        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/digital-marketing" className="hover:text-primary">Digital Marketing</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{offering.title}</span>
            </div>
        </div>
        
        {offering.approach && (
            <section className="py-10 approach-section overflow-hidden">
                <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
                    <div className="approach-image relative w-full h-80 md:h-96">
                        <Image 
                            src={offering.approach.image}
                            alt={`${offering.title} approach`}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="approach-text">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY_COLOR}}>{offering.approach.title}</h2>
                        <p className="text-lg text-subtle-text leading-relaxed">{offering.approach.description}</p>
                    </div>
                </div>
            </section>
        )}

        {offering.providedServices && (
          <section className="py-10 bg-light-bg">
            <div className="container-padding">
              <div className="text-center mb-12">
                  <h2 className="gsap-reveal text-3xl md:text-4xl font-bold" style={{ color: SECONDARY_COLOR }}>Services We Provide</h2>
              </div>
              <div className="services-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
                {offering.providedServices.map((item) => (
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
        
        {offering.motionSection && (
          <section className="py-10">
              <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
                  <div className="gsap-reveal relative w-full h-80 md:h-96">
                      <Image 
                          src={offering.motionSection.gifPath}
                          alt={offering.motionSection.title}
                          fill
                          className="object-contain"
                          unoptimized={true}
                      />
                  </div>
                  <div className="gsap-reveal md:order-first">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: PRIMARY_COLOR}}>{offering.motionSection.title}</h2>
                      <p className="text-lg text-subtle-text leading-relaxed">{offering.motionSection.description}</p>
                  </div>
              </div>
          </section>
        )}

        {offering.id === 'graphic-design' && (
          <section className="py-10 bg-light-bg portfolio-section">
            <div className="container-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: SECONDARY_COLOR }}>Our Work in Action</h2>
                <p className="text-lg text-subtle-text max-w-2xl mx-auto">A selection of our successful graphic design projects.</p>
              </div>
              
              <div className="relative">
                <Swiper
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{ rotate: 0, stretch: 50, depth: 250, modifier: 1, slideShadows: false }}
                  navigation={false}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="w-full"
                >
                  {graphicDesignPortfolio.map(item => (
                    <SwiperSlide key={item.id} style={{ width: '80%', maxWidth: '500px' }}>
                       <div className="group rounded-lg overflow-hidden shadow-lg">
                         <div className="relative w-full aspect-[842/595]">
                           <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                        </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <button aria-label="Previous slide" className="swiper-custom-button" onClick={() => swiperRef.current?.slidePrev()} >
                        <ChevronLeft size={24} />
                    </button>
                    <button aria-label="Next slide" className="swiper-custom-button" onClick={() => swiperRef.current?.slideNext()} >
                        <ChevronRight size={24} />
                    </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = digitalMarketingOfferingsDetails.map(offering => ({
    params: { offeringId: offering.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const offeringData = digitalMarketingOfferingsDetails.find(o => o.id === params.offeringId);
  return {
    props: {
      offering: offeringData || null,
    },
  };
}

export default OfferingDetailPage;