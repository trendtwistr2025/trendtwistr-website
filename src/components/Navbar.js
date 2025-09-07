import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown } from 'lucide-react'; // Added ChevronDown for the dropdown icon
import { navLinks, companyName } from '@/data/trendtwistrData';
import { PRIMARY_COLOR } from '@/styles/theme';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // State for the dropdown
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'}`}
      onMouseLeave={() => setOpenDropdown(null)} // Close dropdown when mouse leaves the navbar
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          <Link href="/" className="flex-shrink-0 group cursor-pointer flex items-center">
            <Image
              src={isScrolled || isMobileMenuOpen ? "/assets/trendtwistr-logo.png" : "/assets/trendtwistr-logo.png"}
              alt={`${companyName} Logo`}
              width={150}
              height={40}
              objectFit="contain"
              priority
            />
          </Link>

          {/* --- DESKTOP LINKS --- */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href || (link.subMenu && router.pathname.startsWith(link.href));
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => link.subMenu && setOpenDropdown(link.name)}
                >
                  <Link 
                    href={link.href} 
                    className={`flex items-center gap-1 relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all group ${isActive ? 'text-white shadow-md bg-primary' : `${isScrolled ? 'text-dark-text hover:text-primary' : 'text-black hover:text-primary'}`}`}
                  >
                    {link.name}
                    {link.subMenu && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.subMenu && openDropdown === link.name && (
                    <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl py-2"
                    >
                      {link.subMenu.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-dark-text hover:bg-slate-100 hover:text-primary">
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 rounded-md focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-dark-text' : 'text-white'}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-3 border-t">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div 
                onClick={() => {
                    if (!link.subMenu) {
                      router.push(link.href);
                      setIsMobileMenuOpen(false);
                    } else {
                      setOpenDropdown(openDropdown === link.name ? null : link.name);
                    }
                }} 
                className={`flex justify-between items-center w-full text-left px-6 py-3.5 text-base font-semibold cursor-pointer ${router.pathname === link.href ? 'text-white bg-primary' : 'text-dark-text hover:bg-primary/10'}`}
              >
                <span>{link.name}</span>
                {link.subMenu && <ChevronDown size={20} className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
              </div>
              {/* Mobile Dropdown */}
              {link.subMenu && openDropdown === link.name && (
                 <div className="pl-8 bg-slate-50">
                    {link.subMenu.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left px-6 py-3 text-sm font-semibold text-subtle-text hover:text-primary">
                            - {subItem.name}
                        </Link>
                    ))}
                 </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;