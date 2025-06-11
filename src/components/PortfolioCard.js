import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PRIMARY_COLOR } from '@/styles/theme';

const PortfolioCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative w-full h-56">
        <Image 
          src={item.image} 
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-primary mb-1">{item.category}</p>
        <h3 className="text-xl font-bold text-dark-text mb-3">{item.title}</h3>
        <p className="text-subtle-text text-sm flex-grow">{item.description}</p>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <div className="inline-flex items-center text-primary font-semibold group-hover:underline cursor-pointer">
            View Case Study <ArrowUpRight size={18} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
