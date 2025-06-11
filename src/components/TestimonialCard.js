import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { PRIMARY_COLOR, DARK_TEXT, SUBTLE_TEXT, ACCENT_YELLOW } from '@/pages/_app';

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-slate-50 p-8 rounded-xl shadow-lg border-l-4 h-full flex flex-col" style={{borderColor: PRIMARY_COLOR}}>
    <div className="flex mb-4">
      {/* Assuming rating is a number from 1 to 5 */}
      {[...Array(5)].map((_, i) => <Star key={i} size={20} className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-slate-300'} />)}
    </div>
    <p className={`text-subtle-text italic mb-5 flex-grow`}>"{testimonial.quote}"</p>
    <div className="flex items-center mt-auto pt-4 border-t border-slate-200">
      <div className="relative w-12 h-12 rounded-full mr-4 overflow-hidden">
        <Image 
          src={testimonial.image} 
          alt={testimonial.name} 
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div>
        <h4 className="font-semibold text-dark-text">{testimonial.name}</h4>
        <p className="text-sm text-subtle-text">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
