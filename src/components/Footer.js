import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../styles/theme';
import { companyName, companyInfo } from '../data/trendtwistrData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerTextColor = "text-slate-300"; 
  const linkHoverColor = "hover:text-primary";

  return (
    <footer style={{backgroundColor: SECONDARY_COLOR}} className={`${footerTextColor} pt-16 md:pt-20 pb-8 md:pb-10`}>
      <div className="container-padding">
        {/* The main grid now uses a 12-column system for better control */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 mb-12 md:mb-16">
          
          {/* Column 1: Takes up 5/12 of the width on large screens */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/tt-logo-white.png"
                alt={`${companyName} Logo`}
                width={150} 
                height={80}  
                objectFit="contain"
              />
            </Link>
            <p className={`text-sm leading-relaxed opacity-80 ${footerTextColor}`}>
              {companyInfo.mission.substring(0, 100) + "..."}
            </p>
            <div className="flex space-x-5 pt-2">
              {companyInfo.socialLinks.facebook && <a href={companyInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Facebook"><Facebook size={24} /></a>}
              {companyInfo.socialLinks.instagram && <a href={companyInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Instagram"><Instagram size={24} /></a>}
              {companyInfo.socialLinks.twitter && <a href={companyInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Twitter"><Twitter size={24} /></a>}
              {companyInfo.socialLinks.linkedin && <a href={companyInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="LinkedIn"><Linkedin size={24} /></a>}
              {companyInfo.socialLinks.youtube && <a href={companyInfo.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="YouTube"><Youtube size={24} /></a>}
              {companyInfo.socialLinks.pinterest && <a href ={companyInfo.socialLinks.pinterest} target="_blank" rel="noopener noreferrer" className={`${footerTextColor} ${linkHoverColor} transition-colors`} aria-label="Pinterest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pinterest"><path d="M8.5 21c-1.5-1.5-2-3.5-1.5-5.5.5-2 2-3.5 3.5-4-.5-1-1-2-1-3 0-2 1.5-4 4-4s4 1.5 4 4c0 2-1 3.5-2.5 4-.5 0-1 0-1-.5l-.5-2c0-.5 0-1 .5-1 .5 0 1-.5 1-1s-.5-1-1-1c-1.5 0-2.5 1.5-2.5 3 0 .5 0 1 .5 1l1 .5c2 .5 3.5 2.5 3.5 4.5 0 3-2.5 6-6.5 6-2.5 0-4.5-1.5-5.5-3z"></path></svg></a>}
            </div>
          </div>

          {/* Column 2: Takes up 3/12 of the width on large screens */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-5">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about.html" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>About Us</Link></li>
              <li><Link href="/services.html" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>Our Services</Link></li>
              <li><Link href="/contact.html" className={`${linkHoverColor} opacity-80 hover:opacity-100`}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Takes up 4/12 of the width on large screens */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-5">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              {companyInfo.contact.phone && <li className="flex items-center"><Phone size={18} className="mr-3 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><a href={`tel:${companyInfo.contact.phone}`} className={`${linkHoverColor} opacity-80 hover:opacity-100`}>{companyInfo.contact.phone}</a></li>}
              {companyInfo.contact.email && <li className="flex items-center"><Mail size={18} className="mr-3 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><a href={`mailto:${companyInfo.contact.email}`} className={`${linkHoverColor} opacity-80 hover:opacity-100`}>{companyInfo.contact.email}</a></li>}
              {companyInfo.contact.address && <li className="flex items-start"><MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" style={{color: PRIMARY_COLOR}} /><span className="opacity-80">{companyInfo.contact.address}</span></li>}
            </ul>
          </div>
          
        </div>

        <div className={`mt-12 md:mt-16 border-t border-slate-700 pt-8 text-center text-xs opacity-70 ${footerTextColor}`}>
          <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;