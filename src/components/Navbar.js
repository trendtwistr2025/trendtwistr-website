import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { PRIMARY_COLOR } from '../pages/_app'; // Assuming colors are in _app.js
import { navLinks, companyName } from '../data/trendtwistrData';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out 
                 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container-padding"> {/* Using global class from globals.css */}
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex-shrink-0 group cursor-pointer flex items-center">
            {/* Replace with your actual logo or keep text */}
            <Image
                src="/assets/trendtwistr-logo.png" // CHANGE THIS if your logo is different
                alt={`${companyName} Logo`}
                width={50} // Adjust based on your logo aspect ratio
                height={50} // Adjust based on your logo aspect ratio
                className="h-10 w-auto md:h-12 mr-2" // Responsive height
                onError={(e) => { e.currentTarget.style.display = 'none'; /* Hide if logo fails */ }}
            />
            <span 
              className={`text-2xl md:text-3xl font-extrabold transition-colors 
                         ${isScrolled || isMobileMenuOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}
              style={isScrolled || isMobileMenuOpen ? {color: PRIMARY_COLOR} : {}} // Ensures color updates correctly
            >
              {companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href || 
                               (router.pathname.startsWith('/services') && link.href === '/services') ||
                               (router.pathname.startsWith('/blog') && link.href === '/blog'); // Example for blog
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out group overflow-hidden
                    ${isActive 
                      ? `text-white shadow-md` 
                      : `${isScrolled ? 'text-dark-text hover:text-primary' : 'text-slate-100 hover:text-white'}`
                    }`}
                  style={isActive ? { backgroundColor: PRIMARY_COLOR } : {}}
                >
                  <span className={`absolute inset-0 w-full h-full bg-primary opacity-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-lg ${isActive || !isScrolled ? 'hidden' : ''}`}></span>
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md focus:outline-none transition-colors 
                         ${isScrolled || isMobileMenuOpen ? 'text-dark-text hover:text-primary' : 'text-white hover:text-slate-200'}`}
              aria-label="Open main menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-3 border-t border-slate-200">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                className={`block w-full text-left px-6 py-3.5 text-base font-semibold 
                  ${isActive 
                    ? `text-white` 
                    : `text-dark-text hover:bg-orange-50 hover:text-primary` // Using Tailwind named color for hover
                  }`}
                style={isActive ? { backgroundColor: PRIMARY_COLOR } : {}}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
export default Navbar;