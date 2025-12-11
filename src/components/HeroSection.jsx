import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroBackground from './HeroBackground';

const HeroSection = () => {
  const heroRef = useRef(null);

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* 幾何圖形背景 */}
      <HeroBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            輕鬆解決你的貸款需求
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed animate-fade-in-up animation-delay-200">
            專業貸款服務，快速審核，利率優惠，讓您的資金需求得到最佳解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Link
              to="/loan-plans"
              className="btn btn-primary w-full sm:w-auto"
            >
              查看貸款方案
            </Link>
            <Link
              to="/contact"
              className="btn btn-secondary w-full sm:w-auto"
            >
              立即諮詢
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






