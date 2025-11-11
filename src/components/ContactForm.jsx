import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 藍色幾何圖形背景裝飾元件
const BlueGeometricBackground = () => {
  const shapes = [
    // 圓形
    { id: 1, type: 'circle', top: '10%', left: '5%', size: 100, delay: 0, duration: 8 },
    { id: 2, type: 'circle', top: '20%', right: '8%', size: 80, delay: -2, duration: 10 },
    { id: 3, type: 'circle', top: '60%', left: '3%', size: 120, delay: -4, duration: 9 },
    { id: 4, type: 'circle', top: '80%', right: '12%', size: 90, delay: -1, duration: 11 },
    
    // 三角形
    { id: 5, type: 'triangle', top: '15%', left: '15%', size: 60, delay: -1.5, duration: 7 },
    { id: 6, type: 'triangle', top: '45%', right: '10%', size: 70, delay: -3, duration: 8 },
    { id: 7, type: 'triangle', top: '70%', left: '20%', size: 55, delay: -2.5, duration: 9 },
    
    // 方形
    { id: 8, type: 'square', top: '30%', left: '8%', size: 65, delay: -0.5, duration: 6 },
    { id: 9, type: 'square', top: '50%', right: '15%', size: 75, delay: -2, duration: 7 },
    { id: 10, type: 'square', top: '75%', left: '12%', size: 60, delay: -1, duration: 8 },
    
    // 六邊形
    { id: 11, type: 'hexagon', top: '25%', left: '50%', size: 70, delay: -3.5, duration: 10 },
    { id: 12, type: 'hexagon', top: '55%', left: '45%', size: 85, delay: -1.5, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute blue-geometric-shape"
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        >
          {shape.type === 'circle' && (
            <div
              className="border-4 border-blue-400/30 rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="border-4 border-blue-400/30"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="border-4 border-blue-400/30"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                transform: 'rotate(45deg)',
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
              }}
            />
          )}
          {shape.type === 'hexagon' && (
            <div
              className="border-4 border-blue-400/30"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // EmailJS 配置 - 從環境變數讀取
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
  const RECEIVER_EMAIL = process.env.REACT_APP_RECEIVER_EMAIL || '';

  // 處理輸入變化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // 清除該欄位的錯誤
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // 表單驗證
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '請輸入姓名';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '請輸入電話';
    } else if (!/^[0-9-+()\s]+$/.test(formData.phone)) {
      newErrors.phone = '請輸入有效的電話號碼';
    }

    if (!formData.loanType) {
      newErrors.loanType = '請選擇貸款類型';
    }

    if (!formData.message.trim()) {
      newErrors.message = '請輸入訊息內容';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 處理表單提交
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 初始化 EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // 發送郵件
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          phone: formData.phone,
          loan_type: formData.loanType,
          message: formData.message,
          to_email: RECEIVER_EMAIL,
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // 重置表單
      setFormData({
        name: '',
        phone: '',
        loanType: '',
        message: '',
      });

      // 3 秒後清除成功訊息
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // 5 秒後清除錯誤訊息
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="application-form"
      className="scroll-section py-20 bg-gray-900 text-white relative overflow-hidden"
      data-section-id="contact-form"
    >
      {/* 藍色幾何圖形背景裝飾 */}
      <BlueGeometricBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            免費初審額度
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            填寫下方表單，我們將盡快與您聯繫
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 姓名 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                姓名 <span className="text-yellow-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="請輸入您的姓名"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* 電話 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                電話 <span className="text-yellow-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="請輸入您的電話號碼"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {/* 貸款類型 */}
            <div>
              <label htmlFor="loanType" className="block text-sm font-medium text-gray-300 mb-2">
                貸款類型 <span className="text-yellow-400">*</span>
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all ${
                  errors.loanType ? 'border-red-500' : 'border-gray-700'
                }`}
              >
                <option value="">請選擇貸款類型</option>
                <option value="個人信貸">個人信貸</option>
                <option value="房屋貸款">房屋貸款</option>
                <option value="企業貸款">企業貸款</option>
                <option value="汽車貸款">汽車貸款</option>
                <option value="債務整合">債務整合</option>
                <option value="低利轉貸">低利轉貸</option>
              </select>
              {errors.loanType && (
                <p className="mt-1 text-sm text-red-400">{errors.loanType}</p>
              )}
            </div>

            {/* 訊息 */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                訊息內容 <span className="text-yellow-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="請輸入您的需求或問題..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {/* 提交狀態訊息 */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                表單已成功送出！我們將盡快與您聯繫。
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                送出失敗，請稍後再試或直接撥打電話聯繫我們。
              </div>
            )}

            {/* 提交按鈕 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-yellow-300 hover:scale-105 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? '送出中...' : '立即送出'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

