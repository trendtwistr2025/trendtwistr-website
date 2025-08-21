// src/pages/services/digital-marketing/[offeringId].js

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { services, digitalMarketingOfferingsDetails } from '@/data/trendtwistrData';
import { CheckCircle } from 'lucide-react';
import { DARK_TEXT } from '@/styles/theme';

const OfferingDetailPage = ({ offering }) => {
  if (!offering) return <div>Details not found.</div>;

  const digitalMarketingService = services.find(s => s.id === 'digital-marketing');
  const serviceColor = digitalMarketingService.color || '#f87d39';

  return (
    <>
      <Head>
        <title>{`${offering.title} | Digital Marketing Services`}</title>
        <meta name="description" content={offering.description} />
      </Head>
      <div className="bg-white">
        
        {/* Header Section */}
        <section className="section-padding text-white" style={{ backgroundColor: serviceColor }}>
          <div className="container-padding">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">{offering.title}</h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="bg-light-bg border-b border-slate-200">
            <div className="container-padding py-4 text-sm text-subtle-text">
                <Link href="/services.html" className="hover:text-primary">Services</Link>
                <span className="mx-2">&gt;</span>
                <Link href="/services/digital-marketing" className="hover:text-primary">Digital Marketing</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-dark-text">{offering.title}</span>
            </div>
        </div>
        
        {/* Main Content Section */}
        <section className="section-padding">
          <div className="container-padding max-w-4xl mx-auto">
            <p className="text-lg text-subtle-text leading-relaxed text-center mb-12">
              {offering.detailedDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {offering.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={22} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-dark-text">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding" style={{backgroundColor: DARK_TEXT}}>
            {/* ... Your standard CTA section can go here ... */}
        </section>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = digitalMarketingOfferingsDetails.map(offering => ({
    params: { offeringId: offering.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const offeringData = digitalMarketingOfferingsDetails.find(o => o.id === params.offeringId);
  return {
    props: {
      offering: offeringData || null,
    },
  };
}

export default OfferingDetailPage;