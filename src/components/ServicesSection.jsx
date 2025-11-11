import React from 'react';
import { Link } from 'react-router-dom';
import {
  PersonalLoanIcon,
  HouseIcon,
  BusinessIcon,
  CarIcon,
  DebtConsolidationIcon,
  RefinanceIcon,
} from './IconComponents';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: '個人信貸',
      icon: PersonalLoanIcon,
      description: '快速審核，免保人免擔保，最高可貸 300 萬',
    },
    {
      id: 2,
      title: '房屋貸款',
      icon: HouseIcon,
      description: '利率優惠，最高可貸 8 成，還款期限最長 40 年',
    },
    {
      id: 3,
      title: '企業貸款',
      icon: BusinessIcon,
      description: '專為企業量身打造，最高可貸 5000 萬，彈性還款',
    },
    {
      id: 4,
      title: '汽車貸款',
      icon: CarIcon,
      description: '新車、中古車皆可貸，審核快速，當日撥款',
    },
    {
      id: 5,
      title: '債務整合',
      icon: DebtConsolidationIcon,
      description: '整合多筆債務，降低月付金，減輕還款壓力',
    },
    {
      id: 6,
      title: '低利轉貸',
      icon: RefinanceIcon,
      description: '轉貸降息，節省利息支出，提升資金運用效率',
    },
  ];

  return (
    <section className="scroll-section py-20 bg-gray-900" data-section-id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          服務項目
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="service-card bg-gray-800 p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 border border-gray-700"
              >
                <div className="flex justify-center mb-6 service-icon text-yellow-400 transition-colors duration-300">
                  <IconComponent size={64} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 service-title">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed service-text">{service.description}</p>
                <Link
                  to="/loan-plans"
                  className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                >
                  了解更多
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

