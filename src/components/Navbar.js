import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { navLinks, companyName } from '@/data/trendtwistrData';
import { PRIMARY_COLOR } from '@/styles/theme';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* --- UPDATED LOGO SECTION --- */}
          <Link href="/" className="flex-shrink-0 group cursor-pointer flex items-center">
            {/* Using width and height props directly for better control */}
            <Image
                src="/assets/trendtwistr-logo.png" // Ensure this logo is in public/assets
                alt={`${companyName} Logo`}
                width={150} // Increased width - you can adjust this value
                height={40}  // Increased height - you can adjust this value
                objectFit="contain" // Ensures logo is not stretched
                priority // Good for logos to load fast
            />
            {/* The company name <span> has been removed */}
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all group ${isActive ? 'text-white shadow-md bg-primary' : `${isScrolled ? 'text-dark-text hover:text-primary' : 'text-slate-00 hover:text-primary'}`}`}>
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-dark-text hover:text-primary' : 'text-black'}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-3 border-t">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-left px-6 py-3.5 text-base font-semibold ${router.pathname === link.href ? 'text-white bg-primary' : 'text-dark-text hover:bg-primary/10'}`}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
