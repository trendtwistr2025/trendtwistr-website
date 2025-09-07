// src/pages/contact.js

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { companyName, companyInfo, mockFaqs } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_TEXT, ACCENT_YELLOW } from '@/styles/theme';
import FAQItem from '@/components/FAQItem';

const ContactPage = () => {
  // Use the Formspree hook
  const [state, handleSubmit] = useForm("xrbargng"); // IMPORTANT: Replace with your ID

  const pageHeaderRef = React.useRef(null);
  const headerContentRef = React.useRef(null);
  const headerBgRef = React.useRef(null);

  React.useEffect(() => {
    // GSAP 3D Parallax Effect for Header
    const header = pageHeaderRef.current;
    if (!header) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = header.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      gsap.to(headerContentRef.current, {
        rotationY: x * 15,
        rotationX: -y * 15,
        transformPerspective: 1000,
        duration: 0.8,
        ease: 'power2.out'
      });
       gsap.to(headerBgRef.current, { 
        x: -x * 30, 
        y: -y * 30, 
        duration: 1, 
        ease: 'power2.out' 
      });
    };
    header.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Contact Us | ${companyName}`}</title>
        <meta name="description" content={`Get in touch with ${companyName}. We're here to help you with your business needs.`} />
      </Head>
      <div className={`bg-light-bg`}>
        
        {/* Header Section */}
        <section ref={pageHeaderRef} className="relative section-padding text-white text-center overflow-hidden contact-header-bg">
            <div 
              ref={headerBgRef} 
              className="absolute inset-0 z-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('/assets/hero-background.jpg')`, transform: 'scale(1.1)' }}
            >
              <div className="absolute inset-0 bg-secondary/80"></div>
            </div>
            
            <div ref={headerContentRef} className="container-padding relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{color: PRIMARY_COLOR}}>Contact Us</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">Have a question or a project in mind? We'd love to hear from you.</p>
            </div>
        </section>

        {/* Form and Info Section */}
        <section className="py-10">
          <div className="container-padding grid lg:grid-cols-2 gap-16">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
                  <h2 className={`text-3xl font-bold text-primary mb-8`}>Send Us a Message</h2>
                  
                  {state.succeeded ? (
                    <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
                      <h3 className="font-bold">Thank You!</h3>
                      <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input id="name" type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">Email Address</label>
                        <input id="email" type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="sr-only">Subject</label>
                        <input id="subject" type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary"></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <button type="submit" disabled={state.submitting} className={`w-full font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all flex items-center justify-center bg-primary text-white hover:opacity-90 disabled:opacity-50`}>
                          <Send size={20} className="mr-2.5" /> {state.submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
              </div>
              
              <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-primary">Our Info</h3>
                  <div className="space-y-6">
                      <div className="flex items-start gap-4"><MapPin size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Address</h4><p className="text-subtle-text">{companyInfo.contact.address}</p></div></div>
                      <div className="flex items-start gap-4"><Phone size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Phone</h4><p className="text-subtle-text">{companyInfo.contact.phone}</p></div></div>
                      <div className="flex items-start gap-4"><Mail size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Email</h4><p className="text-subtle-text">{companyInfo.contact.email}</p></div></div>
                  </div>
                  <div className="mt-8">
                      <h3 className="text-3xl font-bold text-primary mb-4">Our Location</h3>
                      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border">
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9661047775917!2d72.55428037436772!3d23.02501671623882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8cc3392d493323fb%3A0x4ed1c074a80647f6!2sTrendtwistr!5e0!3m2!1sen!2sin!4v1757165466220!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container-padding">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {mockFaqs.map(faq => (
                  <div key={faq.id}>
                      <FAQItem faq={faq} />
                  </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactPage;