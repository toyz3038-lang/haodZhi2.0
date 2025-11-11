import React from 'react';
import { LightningIcon, MoneyIcon, LockIcon, StoreIcon } from './IconComponents';

const FeaturesSection = ({ visibleSections = new Set() }) => {

  return (
    <section className="scroll-section py-20 bg-gray-900" data-section-id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`features-title text-3xl md:text-4xl lg:text-5xl font-bold text-white inline-block transition-all duration-1000 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {'為什麼選擇好貸智'.split('').map((char, index) => (
              <span key={index} className="feature-char">
                {char}
              </span>
            ))}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`feature-card bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-700 hover:-translate-y-2 text-center border border-gray-700 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.1s' }}>
            <div className="flex justify-center mb-6 feature-icon text-yellow-400">
              <LightningIcon size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 feature-title">快速審核</h3>
            <p className="text-white leading-relaxed feature-text">
              24小時內完成初步審核，讓您快速獲得資金
            </p>
          </div>
          <div className={`feature-card bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-700 hover:-translate-y-2 text-center border border-gray-700 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            <div className="flex justify-center mb-6 feature-icon text-yellow-400">
              <MoneyIcon size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 feature-title">利率優惠</h3>
            <p className="text-white leading-relaxed feature-text">
              提供市場最優惠的利率方案，減輕您的還款負擔
            </p>
          </div>
          <div className={`feature-card bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-700 hover:-translate-y-2 text-center border border-gray-700 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.3s' }}>
            <div className="flex justify-center mb-6 feature-icon text-yellow-400">
              <LockIcon size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 feature-title">安全可靠</h3>
            <p className="text-white leading-relaxed feature-text">
              專業團隊服務，資料嚴格保密，讓您安心申辦
            </p>
          </div>
          <div className={`feature-card bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-700 hover:-translate-y-2 text-center border border-gray-700 ${
            visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '0.4s' }}>
            <div className="flex justify-center mb-6 feature-icon text-yellow-400">
              <StoreIcon size={64} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 feature-title">實體店面</h3>
            <p className="text-white leading-relaxed feature-text">
              全省多處實體店面，親臨服務讓您更安心
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
