import React from 'react';
import { Link } from 'react-router-dom';
import { MoneyDecoration } from './IconComponents';

const LoanPlansSection = () => {
  return (
    <section className="scroll-section py-20 bg-white" data-section-id="loans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
          熱門貸款方案
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-gray-400">
              <MoneyDecoration size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">個人信貸</h3>
            <div className="text-3xl font-bold text-gray-700 mb-6 relative z-10">利率 2.5% 起</div>
            <ul className="text-left mb-8 space-y-3 text-gray-700 relative z-10">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                最高可貸 300 萬
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                免保人、免擔保
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                審核快速
              </li>
            </ul>
            <Link
              to="/loan-plans"
              className="btn btn-outline w-full relative z-10"
            >
              了解更多
            </Link>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-gray-400">
              <MoneyDecoration size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">房屋貸款</h3>
            <div className="text-3xl font-bold text-gray-700 mb-6 relative z-10">利率 1.8% 起</div>
            <ul className="text-left mb-8 space-y-3 text-gray-700 relative z-10">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                最高可貸 8 成
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                還款期限 40 年
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                寬限期最長 3 年
              </li>
            </ul>
            <Link
              to="/loan-plans"
              className="btn btn-outline w-full relative z-10"
            >
              了解更多
            </Link>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10 text-gray-400">
              <MoneyDecoration size={48} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">企業貸款</h3>
            <div className="text-3xl font-bold text-gray-700 mb-6 relative z-10">利率 3.0% 起</div>
            <ul className="text-left mb-8 space-y-3 text-gray-700 relative z-10">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                最高可貸 5000 萬
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                專為企業量身打造
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                彈性還款方案
              </li>
            </ul>
            <Link
              to="/loan-plans"
              className="btn btn-outline w-full relative z-10"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanPlansSection;


