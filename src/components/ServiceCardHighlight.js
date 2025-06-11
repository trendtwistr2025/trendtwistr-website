import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, DollarSign, Users } from 'lucide-react';

// Map of icon names to the actual imported icon components
const iconMap = {
  Target,
  DollarSign,
  Users,
};

const ServiceCardHighlight = ({ service }) => {
  // Look up the icon component from the map, with a fallback
  const IconComponent = iconMap[service.iconName] || Target; 

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all h-full flex flex-col text-center border-t-4" style={{borderColor: service.color}}>
      <div className="mx-auto mb-6 p-4 rounded-full inline-flex" style={{backgroundColor: `${service.color}20`}}>
        <IconComponent size={40} style={{ color: service.color }} />
      </div>
      <h3 className="text-2xl font-bold text-dark-text mb-3">{service.title}</h3>
      <p className="text-subtle-text text-sm leading-relaxed mb-5 flex-grow">{service.description}</p>
      <Link href={`/services/${service.id}`} className="mt-auto inline-flex items-center justify-center font-semibold py-2.5 px-6 rounded-lg text-sm text-white group" style={{backgroundColor: service.color}}>
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
export default ServiceCardHighlight;