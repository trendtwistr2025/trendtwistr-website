import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { DARK_TEXT, PRIMARY_COLOR, SUBTLE_TEXT } from '@/styles/theme';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate the opening and closing of the FAQ content
    gsap.to(contentRef.current, {
      height: isOpen ? "auto" : 0,
      duration: 0.4,
      ease: "power2.inOut"
    });
    // Animate the rotation of the chevron icon
    gsap.to(iconRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.3
    });
  }, [isOpen]);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
        aria-expanded={isOpen}
      >
        <h4 className={`text-lg md:text-xl font-semibold text-dark-text group-hover:text-primary transition-colors`}>{faq.question}</h4>
        <div ref={iconRef}>
            <ChevronDown size={28} className={`flex-shrink-0 text-primary transition-transform duration-300`} />
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <div className="px-6 pb-6 pt-2 border-t border-slate-200">
          <p className={`text-subtle-text text-md md:text-lg leading-relaxed`}>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};
export default FAQItem;
