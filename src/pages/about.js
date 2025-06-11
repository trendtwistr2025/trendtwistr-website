import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ShieldCheck, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { companyName, companyInfo, whyChooseUsItems } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW, LIGHT_BACKGROUND } from '@/styles/theme';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
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
        <title>{`About Us | ${companyName}`}</title>
        <meta name="description" content={`Learn about ${companyName}'s mission, vision, and our unique approach.`} />
      </Head>
      <div ref={mainContentRef} className="bg-white">

        {/* Page Header with 3D Parallax Effect */}
        <section ref={pageHeaderRef} className="relative section-padding text-white text-center overflow-hidden">
          <div ref={headerBgRef} className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('/assets/about-us-background.jpg')`, transform: 'scale(1.1)' }}>
            <div className="absolute inset-0 bg-secondary/80"></div>
          </div>
          <div ref={headerContentRef} className="container-padding relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ color: ACCENT_YELLOW }}>About Trendtwistr</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Discover the passion, people, and purpose that drive us to create extraordinary solutions for your business.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding overflow-x-hidden">
          <div className="container-padding grid md:grid-cols-2 gap-12 items-center">
            <div className="gsap-reveal">
              <h2 className={`text-3xl md:text-4xl font-bold text-dark-text mb-6`}>Fuelled by Passion, <span style={{color: PRIMARY_COLOR}}>Crafted with Care</span></h2>
              <p className="text-subtle-text leading-relaxed mb-4 text-lg">
                Trendtwistr was born from an insatiable love for innovation and a fervent desire to provide solutions that genuinely help businesses thrive. We don't just offer services; we sculpt experiences and build partnerships designed to ignite growth and create lasting success stories.
              </p>
              <p className="text-subtle-text leading-relaxed text-lg">
                Our foundation is built on integrity, relentless expertise, and an unwavering focus on you, our client. We believe that strategic solutions are transformative, creating a bridge between your goals and your achievements.
              </p>
            </div>
            <div className="gsap-reveal relative w-full h-80 md:h-full min-h-[400px] rounded-xl shadow-2xl overflow-hidden">
              <Image 
                src="/assets/about-us-image.jpg" 
                alt="The Trendtwistr team collaborating" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.currentTarget.src = `https://placehold.co/600x550/${SECONDARY_COLOR.substring(1)}/FFFFFF?text=Our+Workspace`; }}
              />
            </div>
          </div>
        </section>

        {/* --- NEW "Our Core Values" Section (Replaces Team/Timeline) --- */}
        <section className={`section-padding bg-light-bg overflow-hidden`}>
            <div className="container-padding">
                <div className="text-center mb-16">
                    <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-4">Our Core Values</h2>
                    <p className="gsap-reveal text-lg text-subtle-text max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsItems.map((item, index) => (
                        <div key={item.title} className="gsap-reveal bg-white p-8 rounded-xl shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
                            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 rounded-full bg-primary/10">
                                <item.icon size={40} className="text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
                            <p className="text-subtle-text text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={`section-padding bg-white`}>
            <div className="container-padding grid md:grid-cols-2 gap-10">
                <div className="gsap-reveal bg-white p-8 rounded-xl shadow-lg border-l-4" style={{borderColor: PRIMARY_COLOR}}>
                    <h3 className={`text-3xl font-bold text-dark-text mb-4`}>Our Mission</h3>
                    <p className={`text-subtle-text leading-relaxed`}>{companyInfo.mission}</p>
                </div>
                <div className="gsap-reveal bg-white p-8 rounded-xl shadow-lg border-l-4" style={{borderColor: SECONDARY_COLOR}}>
                    <h3 className={`text-3xl font-bold text-dark-text mb-4`}>Our Vision</h3>
                    <p className={`text-subtle-text leading-relaxed`}>{companyInfo.vision}</p>
                </div>
            </div>
        </section>

      </div>
    </>
  );
 };

 export default AboutPage;
 