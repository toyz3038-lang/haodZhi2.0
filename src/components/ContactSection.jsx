import React from 'react';
import { Link } from 'react-router-dom';

// 疑問符號 SVG 圖標
const QuestionMarkIcon = ({ size = 60, className = "", style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    style={style}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9A3 3 0 0 1 12 6C13.5 6 15 7.5 15 9C15 10.5 13.5 12 12 12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// 疑問符號背景裝飾元件
const QuestionMarksBackground = () => {
  const questionMarks = [
    { id: 1, top: '10%', left: '5%', size: 80, delay: 0, duration: 6 },
    { id: 2, top: '20%', left: '15%', size: 60, delay: -1, duration: 7 },
    { id: 3, top: '15%', right: '10%', size: 70, delay: -2, duration: 8 },
    { id: 4, top: '30%', left: '8%', size: 50, delay: -0.5, duration: 6.5 },
    { id: 5, top: '40%', right: '15%', size: 90, delay: -1.5, duration: 7.5 },
    { id: 6, top: '50%', left: '12%', size: 65, delay: -2.5, duration: 8.5 },
    { id: 7, top: '60%', right: '8%', size: 55, delay: -1, duration: 6 },
    { id: 8, top: '70%', left: '18%', size: 75, delay: -3, duration: 7 },
    { id: 9, top: '80%', right: '12%', size: 60, delay: -0.5, duration: 8 },
    { id: 10, top: '25%', left: '50%', size: 45, delay: -2, duration: 6.5 },
    { id: 11, top: '55%', left: '45%', size: 70, delay: -1.5, duration: 7.5 },
    { id: 12, top: '75%', left: '55%', size: 50, delay: -2.5, duration: 8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {questionMarks.map((mark) => (
        <div
          key={mark.id}
          className="absolute question-mark-float"
          style={{
            top: mark.top,
            left: mark.left,
            right: mark.right,
            animationDelay: `${mark.delay}s`,
            animationDuration: `${mark.duration}s`,
          }}
        >
          <QuestionMarkIcon
            size={mark.size}
            className="text-yellow-400/20"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="scroll-section py-20 bg-gray-900 text-white relative overflow-hidden" data-section-id="contact">
      {/* 疑問符號背景裝飾 */}
      <QuestionMarksBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          有問題需要協助？
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-95">
          我們的專業團隊隨時為您服務，歡迎聯絡我們
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
        >
          聯絡我們
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
