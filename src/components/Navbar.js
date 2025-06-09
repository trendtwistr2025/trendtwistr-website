import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { companyName, navLinks } from '@/data/trendtwistrData';
import { PRIMARY_COLOR } from '@/pages/_app';

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
      <div className="container-padding">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex-shrink-0 group cursor-pointer flex items-center gap-2">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image 
                src="/assets/trendtwistr-logo.png" 
                alt={`${companyName} Logo`} 
                fill
                className="object-contain" // Replaces objectFit
                priority
                sizes="50px" // Optimization hint
              />
            </div>
            <span className={`text-2xl md:text-3xl font-extrabold transition-colors text-primary ${isScrolled || isMobileMenuOpen ? '' : 'md:text-white'}`}>
              {companyName}
            </span>
          </Link>
          {/* ... Rest of Navbar JSX ... */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all group ${isActive ? 'text-white shadow-md bg-primary' : `${isScrolled ? 'text-dark-text hover:text-primary' : 'text-slate-100 hover:text-white'}`}`}>
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-dark-text hover:text-primary' : 'text-white'}`}>
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
