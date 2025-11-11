import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  // 初始化滾動動畫
  const visibleSections = useScrollAnimation();

  return (
    <div className="min-h-screen">
      {/* Hero Section 主視覺區域 */}
      <HeroSection />

      {/* 真實案例 */}
      <section className="scroll-section" data-section-id="testimonials">
        <TestimonialCarousel
          images={[
            // 圖片路徑說明：
            // 1. 將圖片放在 public/images/ 資料夾中
            // 2. 建議檔名：testimonial-1.png, testimonial-2.png, testimonial-3.png 等
            // 3. 路徑格式：'/images/檔名.png'（注意開頭要有斜線 /）
            // 
            // 範例（請替換為您的實際圖片）：
            '/images/testimonial-1.png',
            '/images/testimonial-2.png',
            '/images/testimonial-3.png',
            // 如果圖片還沒準備好，可以先使用佔位符：
            // 'https://via.placeholder.com/400x600/4a5568/ffffff?text=案例1',
          ]}
        />
      </section>

      {/* 特色服務 */}
      <FeaturesSection visibleSections={visibleSections} />

      {/* 服務項目 */}
      <ServicesSection />

      {/* 申辦流程 */}
      <ProcessSection />

      {/* 聯絡表單 */}
      <ContactForm />

      {/* 聯絡我們 */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;