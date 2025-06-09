import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ShieldCheck, Lightbulb, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { companyName, companyInfo, mockTeamMembers, whyChooseUsItems } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW, LIGHT_BACKGROUND } from './_app';

const AboutPage = () => {
  const pageHeaderRef = useRef(null);
  const sectionsRef = useRef([]);
  sectionsRef.current = [];

  const addToSectionRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  
  useEffect(() => {
    // Animate page header on load
    gsap.fromTo(pageHeaderRef.current, 
        { autoAlpha: 0, y: 30 }, 
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Animate sections on scroll
    sectionsRef.current.forEach((section) => {
      if (section) {
        const q = gsap.utils.selector(section);
        gsap.fromTo(q(".gsap-reveal"),
          { autoAlpha: 0, y: 50 },
          { 
            autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>{`About Us | ${companyName}`}</title>
        <meta name="description" content={`Learn about ${companyName}'s mission, vision, and the expert team driving business growth.`} />
      </Head>
      <div className="bg-white">

        {/* Page Header */}
        <section ref={pageHeaderRef} className="section-padding bg-secondary text-white text-center gsap-reveal">
          <div className="container-padding">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{color: ACCENT_YELLOW}}>About Trendtwistr</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
              Discover the passion, people, and purpose that drive us to create extraordinary solutions for your business.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={addToSectionRefs} className="section-padding overflow-x-hidden">
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
            <div className="gsap-reveal relative w-full h-80 md:h-full min-h-[300px] rounded-xl shadow-2xl overflow-hidden">
              <Image 
                src="/assets/about-us-image.jpg" // CHANGE THIS to your image in public/assets
                alt="The Trendtwistr team collaborating" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x550/2B267F/FFFFFF?text=Our+Workspace'; }}
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section ref={addToSectionRefs} className={`section-padding bg-light-bg`}>
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

        {/* Why Choose Us / Our Values Section */}
        <section ref={addToSectionRefs} className="section-padding bg-white">
            <div className="container-padding text-center">
                <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-16">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {whyChooseUsItems.map((item) => (
                        <div key={item.title} className="gsap-reveal">
                            <item.icon size={48} className="text-primary mx-auto mb-5" />
                            <h3 className="text-xl font-semibold text-dark-text mb-3">{item.title}</h3>
                            <p className="text-subtle-text text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Meet the Team Section */}
        <section ref={addToSectionRefs} className={`section-padding bg-light-bg`}>
            <div className="container-padding text-center">
                <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-dark-text mb-4">Meet Our <span className="text-primary">Leadership</span></h2>
                <p className="gsap-reveal text-lg text-subtle-text mb-16 max-w-2xl mx-auto">The driving force behind our innovative solutions and client success.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {mockTeamMembers.map((member) => (
                        <div key={member.id} className="gsap-reveal team-card-item bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl text-center transform hover:-translate-y-2 transition-all duration-300">
                            <div className="relative w-32 h-32 mx-auto mb-5 rounded-full shadow-lg border-4 border-white overflow-hidden">
                                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-dark-text">{member.name}</h3>
                            <p className="font-semibold mb-3 text-md text-primary">{member.role}</p>
                            <p className="text-subtle-text text-sm leading-relaxed">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default AboutPage;
