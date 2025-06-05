// src/components/ServiceCardHighlight.js
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRIMARY_COLOR, TEXT_ON_PRIMARY } from '../pages/_app'; // Make sure _app.js exports these

const ServiceCardHighlight = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col text-center h-full border-t-4" style={{borderColor: service.color || PRIMARY_COLOR}}>
      {IconComponent && (
        <div className="mx-auto mb-6 p-4 rounded-full inline-flex" style={{backgroundColor: `${service.color || PRIMARY_COLOR}20`}}>
          <IconComponent size={40} style={{ color: service.color || PRIMARY_COLOR }} />
        </div>
      )}
      <h3 className="text-2xl font-bold text-dark-text mb-3">{service.title}</h3>
      <p className="text-subtle-text text-sm leading-relaxed mb-5 flex-grow">
        {service.description}
      </p>
      <Link href={`/services#${service.id}`} // Link to the services page, potentially with a hash to scroll to the service
        className={`mt-auto inline-flex items-center justify-center font-semibold py-2.5 px-6 rounded-lg text-sm transition-colors duration-150 group`}
        style={{ backgroundColor: service.color || PRIMARY_COLOR, color: TEXT_ON_PRIMARY }}
      >
        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCardHighlight;
