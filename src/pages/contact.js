import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { companyName, companyInfo, mockFaqs } from '@/data/trendtwistrData';
import { PRIMARY_COLOR, SECONDARY_COLOR, DARK_TEXT, SUBTLE_TEXT, LIGHT_BACKGROUND, TEXT_ON_PRIMARY, ACCENT_YELLOW } from '@/styles/theme';
import FAQItem from '@/components/FAQItem';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, message: '', type: '' });

  const pageHeaderRef = useRef(null);
  const formSectionRef = useRef(null);
  const faqSectionRef = useRef(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: 'Sending message...', type: 'info' });
    const dataToSend = { ...formData, formType: 'Contact Form' };
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setStatus({ submitting: false, message: result.message, type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        setStatus({ submitting: false, message: result.message || 'Submission failed.', type: 'error' });
      }
    } catch (error) {
      setStatus({ submitting: false, message: 'An error occurred.', type: 'error' });
    }
  };

  useEffect(() => {
    gsap.fromTo(pageHeaderRef.current, {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out'});
    gsap.fromTo(formSectionRef.current, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: {trigger: formSectionRef.current, start: "top 85%"}});
    if (faqSectionRef.current) {
        gsap.fromTo(faqSectionRef.current.querySelectorAll('.gsap-reveal'), {autoAlpha: 0, y: 30}, {autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, scrollTrigger: {trigger: faqSectionRef.current, start: "top 85%"}});
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`Contact Us | ${companyName}`}</title>
        <meta name="description" content={`Get in touch with ${companyName}. We're here to help you plan your next adventure.`} />
      </Head>
      <div className={`bg-light-bg`}>
        <section ref={pageHeaderRef} className="section-padding bg-secondary text-white text-center gsap-reveal">
            <div className="container-padding">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{color: ACCENT_YELLOW}}>Contact Us</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">Have a question or a project in mind? We'd love to hear from you.</p>
            </div>
        </section>

        <section ref={formSectionRef} className="section-padding -mt-24">
            <div className="container-padding grid lg:grid-cols-2 gap-16">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
                    <h2 className={`text-3xl font-bold text-dark-text mb-8`}>Send Us a Message</h2>
                    {status.message && status.type !== 'info' && (
                      <div className={`mb-6 p-4 rounded-lg text-sm ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {status.message}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                      <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                      <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary" />
                      <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary"></textarea>
                      <button type="submit" disabled={status.submitting} className={`w-full font-bold py-4 px-6 rounded-lg text-lg shadow-md transition-all flex items-center justify-center bg-primary text-white hover:opacity-90 disabled:opacity-50`}>
                          <Send size={20} className="mr-2.5" /> {status.submitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                </div>
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-dark-text">Our Info</h3>
                    <div className="flex items-start gap-4"><MapPin size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Address</h4><p className="text-subtle-text">{companyInfo.contact.address}</p></div></div>
                    <div className="flex items-start gap-4"><Phone size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Phone</h4><p className="text-subtle-text">{companyInfo.contact.phone}</p></div></div>
                    <div className="flex items-start gap-4"><Mail size={24} className="text-primary mt-1" /><div><h4 className="font-semibold text-lg">Email</h4><p className="text-subtle-text">{companyInfo.contact.email}</p></div></div>
                </div>
            </div>
        </section>

        <section ref={faqSectionRef} className="section-padding">
          <div className="container-padding">
            <h2 className="gsap-reveal text-3xl md:text-4xl font-bold text-center text-dark-text mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {mockFaqs.map(faq => (
                  <div key={faq.id} className="gsap-reveal">
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
