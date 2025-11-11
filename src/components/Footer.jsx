import React from 'react';
import { Link } from 'react-router-dom';

// 地址圖標
const LocationIcon = ({ size = 20, className = "" }) => (
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
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// 電話圖標
const PhoneIcon = ({ size = 20, className = "" }) => (
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
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3992C21.1471 21.5857 20.9053 21.7261 20.6426 21.8115C20.3799 21.8968 20.1025 21.9252 19.83 21.895C16.7428 21.5356 13.787 20.5301 11.19 18.96C8.77382 17.5362 6.72533 15.4877 5.302 13.072C3.72995 10.4612 2.71947 7.48733 2.365 4.38C2.33477 4.10752 2.36318 3.83014 2.44851 3.56743C2.53384 3.30472 2.67418 3.06288 2.86069 2.85778C3.0472 2.65268 3.27572 2.48912 3.53067 2.37753C3.78562 2.26594 4.06133 2.20895 4.34 2.21H7.34C7.98 2.21 8.57 2.46 8.99 2.9L10.42 4.33C10.8631 4.77314 11.1111 5.37899 11.1111 6.01C11.1111 6.64101 10.8631 7.24686 10.42 7.69L9.29 8.82C9.10294 9.00705 8.99745 9.2604 8.99745 9.525C8.99745 9.7896 9.10294 10.043 9.29 10.23C10.6786 11.6186 12.3814 13.3214 13.77 14.71C13.957 14.8971 14.2104 15.0026 14.475 15.0026C14.7396 15.0026 14.993 14.8971 15.18 14.71L16.31 13.58C16.7531 13.1369 17.359 12.8889 17.99 12.8889C18.621 12.8889 19.2269 13.1369 19.67 13.58L21.1 15.01C21.54 15.43 21.79 16.02 21.79 16.66L22 16.92Z" />
  </svg>
);

const Footer = () => {
  // Google 地圖嵌入 URL
  // 請替換為您的實際地址
  // 格式：https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE
  // 或使用地址：https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=YOUR_ADDRESS
  const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.826266900377!2d121.39175799999998!3d24.972024899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681c508f43a8ab%3A0xed8eea7ab61a4c8b!2zMjM45Y-w54Gj55yB5qi55p6X5Y2A5Lit5bGx6Lev5LiJ5q61Mjcx6Jmf!5e0!3m2!1szh-TW!2stw!4v1762416491496!5m2!1szh-TW!2stw";

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Google 地圖 */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-white">位置資訊</h4>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-700 flex-shrink-0">
              <iframe
                src={googleMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="好貸智位置"
              ></iframe>
            </div>
          </div>

          {/* 好貸智介紹 */}
          <div className="lg:col-span-1 flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-white">好貸智</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              專業貸款服務，為您提供最優質的金融解決方案
            </p>
            
            {/* 地址資訊 */}
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-3 mt-1 text-yellow-400">
                <LocationIcon size={20} />
              </div>
              <div className="flex-1">
                <span className="text-gray-400">地址：</span>
                <a
                  href="https://maps.app.goo.gl/emLYPGndKBnVQFRU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline"
                >
                  新北市樹林區中山路三段271號
                </a>
              </div>
            </div>
            
            {/* 電話資訊 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3 mt-1 text-yellow-400">
                <PhoneIcon size={20} />
              </div>
              <div className="flex-1">
                <span className="text-gray-400">電話：</span>
                <a
                  href="tel:0958699687"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 underline"
                >
                  0958699687
                </a>
              </div>
            </div>
          </div>

          {/* 快速連結 */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-white">快速連結</h4>
            <ul className="space-y-2 flex-grow">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  首頁
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link to="/loan-plans" className="text-gray-400 hover:text-white transition-colors">
                  貸款方案
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-400 hover:text-white transition-colors">
                  申辦流程
                </Link>
              </li>
            </ul>
          </div>

          {/* 服務項目 */}
          <div className="lg:col-span-1 flex flex-col">
            <h4 className="text-lg font-semibold mb-4 text-white">服務項目</h4>
            <ul className="space-y-2 flex-grow">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  常見問題
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 好貸智. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
