import React from 'react';
import { Link } from 'react-router-dom';

// 向右箭頭圖標
const ArrowRightIcon = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12H19M19 12L12 5M19 12L12 19" />
  </svg>
);

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: '線上初審',
      description: '填寫基本資料，選擇適合的貸款方案，線上提交申請',
    },
    {
      number: 2,
      title: '現場審核',
      description: '專員聯繫確認，安排現場審核，快速完成評估',
    },
    {
      number: 3,
      title: '資金撥款',
      description: '審核通過後，最快當日即可撥款，資金立即到位',
    },
  ];

  return (
    <section className="scroll-section py-20 bg-gray-900" data-section-id="process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
          簡單三步驟，輕鬆完成申請
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1 max-w-xs text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-yellow-400 process-arrow-container">
                  <div className="relative">
                    <ArrowRightIcon size={40} className="process-arrow" />
                    <ArrowRightIcon size={40} className="process-arrow process-arrow-shadow" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/process"
            className="inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            查看詳細流程
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
