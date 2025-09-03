// src/components/ServiceHeader.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const ServiceHeader = ({ service, IconComponent }) => {
  const isDigitalMarketing = service.id === 'digital-marketing';
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(".header-title-animate", { type: "chars" });
      const tagline = document.querySelector(".header-tagline-animate");
      
      const tl = gsap.timeline();
      tl.from(split.chars, {
          duration: 0.8,
          opacity: 0,
          y: 60,
          ease: "power3.out",
          stagger: 0.05,
        })
        .from(tagline, {
          duration: 0.6,
          opacity: 0,
          y: 20,
          ease: "power2.out",
        }, "-=0.6");

    }, headerRef);
    return () => ctx.revert();
  }, []);

  const backgroundStyle = isDigitalMarketing
    ? { 
        backgroundImage: `url('/assets/services/digital-marketing-header.jpg')`,
        backgroundPosition: 'center 25%',
      }
    : { 
        backgroundColor: service.color 
      };

  return (
    <section 
      ref={headerRef}
      className="relative text-white py-16 md:py-20 bg-cover bg-center"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="container-padding text-center relative z-10">
        <IconComponent size={60} className="mx-auto mb-6" />
        <h1 className="header-title-animate text-4xl md:text-6xl font-extrabold mb-4">{service.title}</h1>
        <p className="header-tagline-animate text-lg md:text-xl max-w-3xl mx-auto opacity-90">{service.tagline}</p>
      </div>
    </section>
  );
};

export default ServiceHeader;