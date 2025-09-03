// src/components/PortfolioCard.js

import React from 'react';
import Image from 'next/image';

const PortfolioCard = ({ item }) => {
  return (
    <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative w-full h-60">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-dark-text">{item.title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;