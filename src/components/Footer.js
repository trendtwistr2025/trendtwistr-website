import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { PRIMARY_COLOR, SECONDARY_COLOR, TEXT_ON_PRIMARY } from '../styles/theme';
import { companyName, companyInfo } from '../data/trendtwistrData';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitting: false, message: '', type: '' });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ submitting: false, message: 'Please enter your email address.', type: 'error' });
      return;
    }
    setStatus({ submitting: true, message: 'Subscribing...', type: 'info' });

    const dataToSend = {
      formType: 'Newsletter Subscription',
      email: email,
    };

    try {
      const response = await fetch('/api/newsletter', { // Using Next.js API Route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();

      if (result.status === 'success') {
        setStatus({ submitting: false, message: result.message, type: 'success' });
        setEmail('');
      } else {
        setStatus({ submitting: false, message: result.message || 'Subscription failed.', type: 'error' });
      }
    } catch (error) {
      setStatus({ submitting: false, message: 'An error occurred. Please try again later.', type: 'error' });
      console.error("Newsletter submission error:", error);
    }
  };

  const currentYear = new Date().getFullYear();
  const footerTextColor = "text-slate-300"; 
  const linkHoverColor = "hover:text-primary";

  return (
    <footer style={{backgroundColor: SECONDARY_COLOR}} className={`${footerTextColor} pt-16 md:pt-20 pb-8 md:pb-10`}>
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
                <Image
                  src="/assets/tt-logo-white.png" // Ensure you have this logo
                  alt={`${companyName} Logo`}
                  width={180} 
                  height={50}  
                  objectFit="contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; /* Hide if logo fails */ }}
                />
                {/* Fallback text logo (optional, remove if image always available) */}
                <noscript> 
                  <span className="text-3xl font-extrabold text-white group-hover:text-slate-200 transition-colors block mt-1"> 
                    {companyName}
                  </span>
                </noscript>
            </Link>
            <p className={`text-sm leading-relaxed opacity-80 ${footerTextColor}`}>
              {companyInfo.mission.substring(0, 100) + "..."}
            </p>
            <div className="flex space-x-5 pt-2">
              {companyInfo.socialLinks.facebook && <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Facebook"><Facebook size={24} /></a>}
              {companyInfo.socialLinks.instagram && <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Instagram"><Instagram size={24} /></a>}
              {companyInfo.socialLinks.twitter && <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Twitter"><Twitter size={24} /></a>}
              {companyInfo.socialLinks.linkedin && <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="LinkedIn"><Linkedin size={24} /></a>}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>About Us</Link></li>
              <li><Link href="/services" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>Our Services</Link></li>
              <li><Link href="/contact" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              {companyInfo.contact.phone && <li className="flex items-center"><Phone size={18} className="mr-3 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><a href={`tel:${companyInfo.contact.phone}`} className={`${linkHoverColor} opacity-80 hover:opacity-100`}>{companyInfo.contact.phone}</a></li>}
              {companyInfo.contact.email && <li className="flex items-center"><Mail size={18} className="mr-3 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><a href={`mailto:${companyInfo.contact.email}`} className={`${linkHoverColor} opacity-80 hover:opacity-100`}>{companyInfo.contact.email}</a></li>}
              {companyInfo.contact.address && <li className="flex items-start"><MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><span className="opacity-80">{companyInfo.contact.address}</span></li>}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Stay Updated</h3>
            <p className="text-sm mb-4 opacity-80">Get the latest insights and offers from Trendtwistr.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full sm:flex-grow px-4 py-3 rounded-md bg-slate-800 text-slate-100 border border-slate-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm placeholder-slate-400`}
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                disabled={status.submitting}
                style={{backgroundColor: PRIMARY_COLOR, color: TEXT_ON_PRIMARY}}
                className={`hover:opacity-90 px-5 py-3 rounded-md font-semibold text-sm transition-opacity flex items-center justify-center shadow-md disabled:opacity-60`}
              >
                <Send size={16} className="mr-1.5 sm:mr-2" /> <span className="hidden sm:inline">Subscribe</span>
                <span className="sm:hidden">Go</span>
              </button>
            </form>
            {status.message && (
              <p className={`mt-3 text-xs ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </p>
            )}
          </div>
        </div>

        <div className={`mt-12 md:mt-16 border-t border-slate-700 pt-8 text-center text-xs opacity-70 ${footerTextColor}`}>
          <p>&copy; {currentYear} {companyName}. All Rights Reserved.</p>
          <p className="mt-1.5">Website Crafted with Passion</p> 
        </div>
      </div>
    </footer>
  );
};
export default Footer;
