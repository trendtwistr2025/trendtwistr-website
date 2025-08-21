// src/components/ServiceHeader.js
import React from 'react';

const ServiceHeader = ({ service, IconComponent }) => {
  const isDigitalMarketing = service.id === 'digital-marketing';

  // Define the background style based on the service type
  const backgroundStyle = isDigitalMarketing
    ? { backgroundImage: `url('/assets/services/digital-marketing-header.jpg')` }
    : { backgroundColor: service.color };

  return (
    <section 
      className="relative text-white py-24 md:py-32 bg-cover"
      style={backgroundStyle}
    >
      {/* Dark overlay to ensure text is always readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Content container */}
      <div className="container-padding text-center relative z-10">
        <IconComponent size={60} className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{service.title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{service.tagline}</p>
      </div>
    </section>
  );
};

export default ServiceHeader;