import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Users as UsersIcon, Lightbulb, ShieldCheck, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { services, testimonials, whyChooseUsItems } from '@/data/trendtwistrData';
import ServiceCardHighlight from '@/components/ServiceCardHighlight';
import TestimonialCard from '@/components/TestimonialCard';
import { 
  PRIMARY_COLOR, 
  SECONDARY_COLOR, 
  TEXT_ON_PRIMARY, 
  DARK_TEXT, 
  SUBTLE_TEXT, 
  ACCENT_YELLOW, 
  LIGHT_BACKGROUND, 
  companyName 
} from '@/styles/theme';

// 1. Create a map of icon names to the imported icon components
const iconMap = {
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users: UsersIcon, // Use an alias for Users to avoid naming conflicts
};

const HomePage = () => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);
  const shape3Ref = useRef(null);

  const sectionsRef = useRef([]);
  sectionsRef.current = [];
  const addToSectionRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };
  
  // --- This useEffect hook remains unchanged ---
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Entrance Animation for Hero
    const tl = gsap.timeline({delay: 0.3});
    tl.fromTo(hero.querySelectorAll(".gsap-hero-el"), 
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }
    );

    // 3D Mouse Move Parallax Effect for Hero
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;

      gsap.to(heroBgRef.current, { x: -x * 50, y: -y * 30, duration: 1, ease: 'power2.out' });
      gsap.to(shape1Ref.current, { x: x * 40, y: y * 30, duration: 1.2, ease: 'power2.out' });
      gsap.to(shape2Ref.current, { x: x * 60, y: y * 45, duration: 1.2, ease: 'power2.out' });
      gsap.to(shape3Ref.current, { x: -x * 70, y: -y * 55, duration: 1.2, ease: 'power2.out' });
      gsap.to(heroContentRef.current, {
        rotationY: x * 20,
        rotationX: -y * 20,
        transformPerspective: 1000,
        duration: 0.8,
        ease: 'power2.out'
      });
    };
    hero.addEventListener('mousemove', handleMouseMove);
    
    // --- NEW: ADVANCED BUTTON ANIMATIONS ---
    const primaryBtn = hero.querySelector('.hero-primary-btn');
    const secondaryBtn = hero.querySelector('.hero-secondary-btn');
    const allButtons = [primaryBtn, secondaryBtn].filter(Boolean);

    // 1. Subtle pulsing glow on primary button
    if (primaryBtn) {
        gsap.to(primaryBtn, {
            boxShadow: `0 0 25px 0 ${PRIMARY_COLOR}60`, // Using hex with alpha for glow
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: 'power1.inOut'
        });
    }

    // 2. Interactive ripple effect on hover for all hero buttons
    allButtons.forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';

        btn.addEventListener('mouseenter', (e) => {
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            btn.appendChild(ripple);
            
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            gsap.set(ripple, { left: x, top: y, x: '-50%', y: '-50%', autoAlpha: 1 });
            gsap.fromTo(ripple, 
                { scale: 0, autoAlpha: 1 }, 
                { scale: 3, autoAlpha: 0, duration: 0.7, ease: 'power2.out', onComplete: () => ripple.remove() }
            );
        });
    });

    // General Section Reveal Animations
    sectionsRef.current.forEach((section) => {
      const q = gsap.utils.selector(section);
      gsap.fromTo(q(".gsap-reveal"),
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: section, start: "top 85%" } }
      );
    });

    return () => {
        hero.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  return (
    <>
      <Head>
        <title>{`${companyName} | Drive Growth with Expert Solutions`}</title>
      </Head>
      
      <section ref={heroRef} className="relative text-white py-32 md:py-48 min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
        <div ref={heroBgRef} className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/assets/hero-background.jpg')`, transform: 'scale(1.1)' }}></div>
        <div className="absolute inset-0 bg-secondary/80 z-0"></div>
        <div ref={shape1Ref} className="gsap-hero-el absolute w-48 h-48 bg-primary/20 rounded-full -top-10 -left-10 filter blur-2xl"></div>
        <div ref={shape2Ref} className="gsap-hero-el absolute w-64 h-64 bg-accent-yellow/10 rounded-full -bottom-24 right-10 filter blur-3xl"></div>
        <div ref={shape3Ref} className="gsap-hero-el absolute w-32 h-32 bg-white/10 rounded-lg top-1/2 left-1/4 filter blur-xl transform rotate-45"></div>

        <div ref={heroContentRef} className="container-padding relative z-10 text-center">
          <h1 className="gsap-hero-el text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Twist Your Trends, <span className="block" style={{color: ACCENT_YELLOW}}>Ignite Your Growth.</span>
          </h1>
          <p className="gsap-hero-el hero-subtitle text-lg md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            {companyName} empowers your business with strategic Digital Marketing, precise Accounting, and targeted Recruitment solutions.
          </p>
          <div className="gsap-hero-el hero-buttons flex flex-col sm:flex-row justify-center items-center gap-5">
            <Link 
              href="/services" 
              className="hero-primary-btn font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY }}
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="hero-secondary-btn bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3.5 px-10 rounded-lg text-lg border border-white/30 shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section ref={addToSectionRefs} className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4 gsap-reveal">Comprehensive Solutions for <span className="text-primary">Your Success</span></h2>
          <p className="text-lg text-subtle-text mb-16 max-w-2xl mx-auto gsap-reveal">We offer a suite of expert services to address your core business needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (<div key={service.id} className="gsap-reveal"><ServiceCardHighlight service={service} /></div>))}
          </div>
        </div>
      </section>

      <section ref={addToSectionRefs} className={`section-padding bg-light-bg`}>
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4 gsap-reveal">Why Partner with <span className="text-primary">{companyName}?</span></h2>
          <p className="text-lg text-subtle-text mb-16 max-w-2xl mx-auto gsap-reveal">We're your dedicated partner in achieving business excellence.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 2. Use the map to look up and render the correct icon */}
            {whyChooseUsItems.map((item) => {
              const IconComponent = iconMap[item.iconName] || Lightbulb;
              return (
                <div key={item.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1 gsap-reveal">
                  <IconComponent size={48} className="text-primary mx-auto mb-5" />
                  <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
                  <p className="text-subtle-text text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section ref={addToSectionRefs} className="section-padding bg-white">
        <div className="container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4 gsap-reveal">Hear From Our <span className="text-primary">Valued Clients</span></h2>
          <p className="text-lg text-subtle-text mb-16 max-w-2xl mx-auto gsap-reveal">Discover how we've helped businesses like yours thrive.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0,3).map(testimonial => (<div key={testimonial.id} className="gsap-reveal"><TestimonialCard testimonial={testimonial} /></div>))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;