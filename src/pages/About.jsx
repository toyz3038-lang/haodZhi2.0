import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MoneyIcon, 
  CarIcon, 
  HouseIcon, 
  BusinessIcon,
  DebtConsolidationIcon,
  RefinanceIcon,
  LockIcon,
  LightningIcon
} from '../components/IconComponents';
import TestimonialBubble from '../components/TestimonialBubble';
import AboutShowcaseCarousel from '../components/AboutShowcaseCarousel';

// 線條幾何圖形背景裝飾元件
const TestimonialLineDecorations = () => {
  const shapes = [
    // 圓形線條
    { id: 1, type: 'circle', top: '10%', left: '8%', size: 120, delay: 0, duration: 8 },
    { id: 2, type: 'circle', top: '20%', right: '10%', size: 100, delay: -2, duration: 10 },
    { id: 3, type: 'circle', top: '70%', left: '5%', size: 140, delay: -4, duration: 9 },
    { id: 4, type: 'circle', top: '80%', right: '8%', size: 110, delay: -1, duration: 11 },
    
    // 三角形線條
    { id: 5, type: 'triangle', top: '15%', left: '15%', size: 80, delay: -1.5, duration: 7 },
    { id: 6, type: 'triangle', top: '65%', right: '12%', size: 90, delay: -3, duration: 8 },
    
    // 方形線條
    { id: 7, type: 'square', top: '30%', left: '10%', size: 70, delay: -0.5, duration: 6 },
    { id: 8, type: 'square', top: '60%', right: '15%', size: 85, delay: -2, duration: 7 },
    
    // 六邊形線條
    { id: 9, type: 'hexagon', top: '25%', left: '50%', size: 90, delay: -3.5, duration: 10 },
    { id: 10, type: 'hexagon', top: '55%', left: '45%', size: 100, delay: -1.5, duration: 9 },
    
    // 直線裝飾
    { id: 11, type: 'line', top: '12%', left: '20%', width: 150, angle: 45, delay: -2.5, duration: 8 },
    { id: 12, type: 'line', top: '75%', right: '20%', width: 130, angle: -45, delay: -1, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute testimonial-line-shape"
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
              className="border-2 border-blue-400/20 rounded-full"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className="border-2 border-blue-400/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className="border-2 border-blue-400/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                transform: 'rotate(45deg)',
              }}
            />
          )}
          {shape.type === 'hexagon' && (
            <div
              className="border-2 border-blue-400/20"
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
          )}
          {shape.type === 'line' && (
            <div
              className="border-t-2 border-blue-400/20"
              style={{
                width: `${shape.width}px`,
                transform: `rotate(${shape.angle}deg)`,
                transformOrigin: 'left center',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// 建築物圖標
const BuildingIcon = ({ size = 64, className = "" }) => (
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
    <path d="M3 21H21" />
    <path d="M5 21V7L12 3L19 7V21" />
    <path d="M9 9V13M15 9V13M9 17V21M15 17V21" />
  </svg>
);

// 燈泡圖標
const LightbulbIcon = ({ size = 64, className = "" }) => (
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
    <path d="M9 21H15" />
    <path d="M12 3C8.5 3 5.9 5.5 5.9 9C5.9 11.2 7 13.1 8.6 14.4V17C8.6 17.6 9 18 9.6 18H14.4C15 18 15.4 17.6 15.4 17V14.4C17 13.1 18.1 11.2 18.1 9C18.1 5.5 15.5 3 12 3Z" />
    <path d="M12 8V12" />
    <path d="M12 15H12.01" />
  </svg>
);

// 用戶群組圖標
const UsersIcon = ({ size = 64, className = "" }) => (
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
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" />
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
  </svg>
);

// 盾牌圖標
const ShieldIcon = ({ size = 64, className = "" }) => (
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
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
  </svg>
);

const About = () => {
  const [bubblesVisible, setBubblesVisible] = useState(false);
  const [activeBubble, setActiveBubble] = useState(null);
  const testimonialSectionRef = useRef(null);
  const heroTypingTextRef = useRef('探索好貸智的專業與承諾');
  const [typedHeroText, setTypedHeroText] = useState('');
  const [isCaretVisible, setIsCaretVisible] = useState(true);
  const titleTextRef = useRef('關於我們');
  const subtitleTextRef = useRef('好貸智 SmartLoan');
  const [typedTitle, setTypedTitle] = useState('');
  const [typedSubtitle, setTypedSubtitle] = useState('');

  // 對話框內容
  const testimonial1 = `以前對貸款超害怕，總覺得會被坑

但這次真的讓我改觀！

顧問超有耐心，從評估到核准都幫我一步步解釋

現在每個月繳款輕鬆多了，壓力整個少一半 👍`;
  
  const testimonial2 = `剛創業時資金卡關，好貸智真的救了我一命 🙌

顧問幫我規劃最適合的方案，速度超快

當天就撥款成功，資金馬上能運轉起來！`;

  const testimonial3 = `原本被銀行拒絕，好貸智幫我重新規劃成功核貸，真的很感謝！`;

  const testimonial4 = `整合完負債後，月付減少三分之一，生活壓力輕鬆多了！`;

  // 檢測元件進入視窗
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBubblesVisible(true);
        }
      });
    }, observerOptions);

    if (testimonialSectionRef.current) {
      observer.observe(testimonialSectionRef.current);
    }

    return () => {
      if (testimonialSectionRef.current) {
        observer.unobserve(testimonialSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let titleIntervalId = null;
    let subtitleIntervalId = null;
    let titleIndex = 0;
    let subtitleIndex = 0;

    const startTypingSubtitle = () => {
      subtitleIntervalId = window.setInterval(() => {
        const text = subtitleTextRef.current;
        subtitleIndex += 1;
        setTypedSubtitle(text.slice(0, subtitleIndex));

        if (subtitleIndex >= text.length) {
          window.clearInterval(subtitleIntervalId);
        }
      }, 85);
    };

    const startTypingTitle = () => {
      titleIntervalId = window.setInterval(() => {
        const text = titleTextRef.current;
        titleIndex += 1;
        setTypedTitle(text.slice(0, titleIndex));

        if (titleIndex >= text.length) {
          window.clearInterval(titleIntervalId);
          window.setTimeout(startTypingSubtitle, 180);
        }
      }, 110);
    };

    const kickoffTimerId = window.setTimeout(startTypingTitle, 100);

    return () => {
      window.clearTimeout(kickoffTimerId);
      if (titleIntervalId) {
        window.clearInterval(titleIntervalId);
      }
      if (subtitleIntervalId) {
        window.clearInterval(subtitleIntervalId);
      }
    };
  }, []);

  useEffect(() => {
    let typeIntervalId = null;
    let index = 0;

    const startTimerId = window.setTimeout(() => {
      typeIntervalId = window.setInterval(() => {
        const text = heroTypingTextRef.current;
        index += 1;
        setTypedHeroText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(typeIntervalId);
        }
      }, 90);
    }, 250);

    return () => {
      window.clearTimeout(startTimerId);
      if (typeIntervalId) {
        window.clearInterval(typeIntervalId);
      }
    };
  }, []);

  useEffect(() => {
    const caretTimer = window.setInterval(() => {
      setIsCaretVisible((prev) => !prev);
    }, 500);

    return () => {
      window.clearInterval(caretTimer);
    };
  }, []);

  const showcaseImages = [
    {
      src: '/images/about/about-showcase-1.jpg',
      alt: '好貸智顧問與客戶討論貸款方案',
      caption: '專屬顧問一對一服務'
    },
    {
      src: '/images/about/about-showcase-2.jpg',
      alt: '貸款核准文件與審核流程',
      caption: '專業審核流程透明'
    }
  ];

  const services = [
    {
      icon: MoneyIcon,
      title: '信用貸款',
      description: '免擔保、免抵押，靈活週轉',
    },
    {
      icon: CarIcon,
      title: '汽車貸款',
      description: '保留愛車使用權，低利率過件快',
    },
    {
      icon: RefinanceIcon,
      title: '低利轉貸',
      description: '降低月付負擔，優化還款利率',
    },
    {
      icon: HouseIcon,
      title: '房屋貸款',
      description: '中古屋、增貸、轉貸皆可協辦',
    },
    {
      icon: DebtConsolidationIcon,
      title: '整合負債',
      description: '減輕利息壓力，輕鬆分期還款',
    },
    {
      icon: BusinessIcon,
      title: '中小企業融資',
      description: '創業資金、營運週轉專案',
    },
  ];

  const advantages = [
    {
      icon: LightningIcon,
      title: '核貸迅速',
      description: '最快當日撥款',
    },
    {
      icon: ShieldIcon,
      title: '合法代辦',
      description: '政府立案',
    },
    {
      icon: UsersIcon,
      title: '一對一顧問',
      description: '全程保密',
    },
    {
      icon: LockIcon,
      title: '信用瑕疵可評估',
      description: '不看銀行往來紀錄',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* 頁面標題 */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
            {typedTitle || '關於我們'}
          </h1>
          <p className="text-2xl md:text-3xl text-center text-yellow-400 mb-8">
            {typedSubtitle || '好貸智 SmartLoan'}
          </p>
          <div className="flex justify-center">
            <p className="typed-text text-base md:text-lg text-gray-400">
              <span>{typedHeroText}</span>
              <span className={`typed-text__caret ${isCaretVisible ? 'typed-text__caret--visible' : ''}`} aria-hidden="true" />
            </p>
          </div>
        </div>
      </section>

      {/* 公司簡介前的品牌剪影 */}
      <section className="bg-gray-900 pt-4 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">SmartLoan Snapshots</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">好貸智服務剪影</h2>
                <p className="text-gray-400 mt-3 max-w-3xl">
                  實際服務場景與成功案例縮影，展現我們在不同情境下協助客戶完成資金規劃的時刻。
                </p>
              </div>
              <span className="text-gray-500 text-sm md:text-base">
                每五秒自動切換 · 手機可左右滑動
              </span>
            </div>
            <AboutShowcaseCarousel images={showcaseImages} />
          </div>
        </div>
      </section>

      {/* 公司簡介 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <BuildingIcon size={48} className="text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">公司簡介</h2>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                好貸智（SmartLoan）是一家專業的民間貸款整合與資金顧問公司，我們以「<span className="text-yellow-400 font-semibold">快速、安全、誠信</span>」為核心價值，致力於幫助每一位客戶找到最合適的資金解決方案。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                無論是資金週轉、債務整合，或創業資金需求，我們都秉持著「<span className="text-yellow-400 font-semibold">站在客戶角度思考</span>」的原則，提供透明、彈性、合法的貸款服務。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">服務對象</h3>
                  <p className="text-gray-300">上班族、自營商、軍公教、家庭主婦、小資族</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">服務地區</h3>
                  <p className="text-gray-300">全台灣</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌理念 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <LightbulbIcon size={48} className="text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">品牌理念</h2>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                我們相信，<span className="text-yellow-400 font-semibold">貸款不該是壓力，而是人生規劃的助力</span>。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                「好貸智」代表「<span className="text-yellow-400 font-semibold">好好貸，好好智選</span>」——以智慧與誠信，為您找到最聰明的貸款方案。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                透明條件、無隱藏費用、合法代辦，讓好事發生從資金開始。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 客戶見證對話框 */}
      <section ref={testimonialSectionRef} className="py-16 bg-gray-800 relative overflow-hidden">
        {/* 線條幾何圖形背景裝飾 */}
        <TestimonialLineDecorations />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
            💬 客戶見證
          </h2>
          
          {/* 手機版：垂直排列 */}
          <div className="md:hidden space-y-6 max-w-md mx-auto">
            <TestimonialBubble
              text={testimonial1}
              position="left"
              isVisible={bubblesVisible}
              delay={200}
              isActive={activeBubble === 'left1'}
              onClick={(e) => {
                e.stopPropagation();
                setActiveBubble(activeBubble === 'left1' ? null : 'left1');
              }}
              customStyle={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto' }}
            />
            
            <TestimonialBubble
              text={testimonial2}
              position="right"
              isVisible={bubblesVisible}
              delay={400}
              isActive={activeBubble === 'right1'}
              onClick={(e) => {
                e.stopPropagation();
                setActiveBubble(activeBubble === 'right1' ? null : 'right1');
              }}
              customStyle={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto' }}
            />

            <TestimonialBubble
              text={testimonial3}
              position="left"
              isVisible={bubblesVisible}
              delay={600}
              isActive={activeBubble === 'left2'}
              onClick={(e) => {
                e.stopPropagation();
                setActiveBubble(activeBubble === 'left2' ? null : 'left2');
              }}
              customStyle={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto' }}
            />
            
            <TestimonialBubble
              text={testimonial4}
              position="right"
              isVisible={bubblesVisible}
              delay={800}
              isActive={activeBubble === 'right2'}
              onClick={(e) => {
                e.stopPropagation();
                setActiveBubble(activeBubble === 'right2' ? null : 'right2');
              }}
              customStyle={{ position: 'relative', top: 'auto', left: 'auto', right: 'auto' }}
            />
          </div>

          {/* 桌面版：絕對定位 */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            <div 
              className="relative min-h-[650px]"
              onClick={(e) => {
                // 點擊空白區域時取消選中
                if (e.target === e.currentTarget) {
                  setActiveBubble(null);
                }
              }}
            >
              {/* 第一排：左側對話框 */}
              <TestimonialBubble
                text={testimonial1}
                position="left"
                isVisible={bubblesVisible}
                delay={200}
                isActive={activeBubble === 'left1'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'left1' ? null : 'left1');
                }}
                customStyle={{ top: '3%', left: '5%' }}
              />
              
              {/* 第一排：右側對話框 */}
              <TestimonialBubble
                text={testimonial2}
                position="right"
                isVisible={bubblesVisible}
                delay={400}
                isActive={activeBubble === 'right1'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'right1' ? null : 'right1');
                }}
                customStyle={{ top: '3%', right: '5%' }}
              />

              {/* 第二排：左側對話框 */}
              <TestimonialBubble
                text={testimonial3}
                position="left"
                isVisible={bubblesVisible}
                delay={600}
                isActive={activeBubble === 'left2'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'left2' ? null : 'left2');
                }}
                customStyle={{ top: '48%', left: '5%' }}
              />
              
              {/* 第二排：右側對話框 */}
              <TestimonialBubble
                text={testimonial4}
                position="right"
                isVisible={bubblesVisible}
                delay={800}
                isActive={activeBubble === 'right2'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'right2' ? null : 'right2');
                }}
                customStyle={{ top: '48%', right: '5%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 專業團隊 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <UsersIcon size={48} className="text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">專業團隊</h2>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 mb-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                我們的顧問團隊擁有多年金融與信貸經驗，熟悉各家銀行與民間融資制度，能為不同需求量身打造最合適的方案。
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                從初步諮詢到撥款完成，全程由專人一對一服務，確保過程安全、迅速、放心。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-yellow-400 mb-4">
                  <ShieldIcon size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">專業</h3>
                <p className="text-gray-300">提供專業分析與個人化貸款建議</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-yellow-400 mb-4">
                  <LockIcon size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">誠信</h3>
                <p className="text-gray-300">全程透明、絕不收取前期費用</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-yellow-400 mb-4">
                  <LightningIcon size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">服務</h3>
                <p className="text-gray-300">快速回覆、效率至上</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的服務 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              我們的服務
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 mr-3">
                        <IconComponent size={40} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 為什麼選擇好貸智 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <ShieldIcon size={48} className="text-yellow-400 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">為什麼選擇好貸智</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-yellow-400/50 transition-all duration-300"
                  >
                    <div className="text-yellow-400 mb-4">
                      <IconComponent size={48} className="mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-300 text-sm">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-yellow-400/30 text-center">
              <p className="text-gray-300 text-lg">
                <span className="text-yellow-400 font-semibold">實體店面辦理、無隱藏條件</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區塊 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              準備開始您的貸款申請了嗎？
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              立即填寫表單，我們的專業顧問將盡快與您聯繫
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 text-lg"
            >
              立即申請
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
