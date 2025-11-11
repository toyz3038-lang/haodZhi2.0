import React, { useState, useRef, useEffect } from 'react';
import TestimonialDecorations from './TestimonialDecorations';
import TestimonialBubble from './TestimonialBubble';

const TestimonialCarousel = ({ images = [], showBubbles = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [bubblesVisible, setBubblesVisible] = useState(false);
  const [activeBubble, setActiveBubble] = useState(null); // 追蹤當前激活的對話框
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);

  // 最小滑動距離
  const minSwipeDistance = 50;

  // 下一張
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 上一張
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 重置自動輪播（當用戶手動操作時調用）
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    // 延遲重新啟動，確保狀態更新後再設置
    setTimeout(() => {
      if (images.length > 1 && !isPaused) {
        autoPlayRef.current = setInterval(() => {
          nextSlide();
        }, 5000);
      }
    }, 100);
  };

  // 觸摸開始
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // 觸摸移動
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // 觸摸結束
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
      resetAutoPlay();
    }
    if (isRightSwipe) {
      prevSlide();
      resetAutoPlay();
    }
  };

  // 自動輪播
  useEffect(() => {
    if (images.length > 1 && !isPaused) {
      // 清除舊的定時器
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      // 設置新的定時器
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    } else {
      // 如果暫停或沒有圖片，清除定時器
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, images.length, isPaused]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 鍵盤導航
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 如果沒有圖片，顯示預設內容
  if (images.length === 0) {
    return (
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            真實案例
          </h2>
          <p className="text-center text-red-400 mb-12 text-sm md:text-base">
            ※客戶授權對話，不放客人頭像與資料
          </p>
          <div className="text-center text-gray-400">
            <p>暫無案例圖片</p>
          </div>
        </div>
      </section>
    );
  }

  // 對話框內容
  const testimonial1 = `以前對貸款超害怕，總覺得會被坑

但這次真的讓我改觀！

顧問超有耐心，從評估到核准都幫我一步步解釋

現在每個月繳款輕鬆多了，壓力整個少一半 👍`;
  
  const testimonial2 = `剛創業時資金卡關，好貸智真的救了我一命 🙌

顧問幫我規劃最適合的方案，速度超快

當天就撥款成功，資金馬上能運轉起來！`;

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
          真實案例
        </h2>
        <p className="text-center text-red-400 mb-12 text-sm md:text-base">
          ※客戶授權對話，不放客人頭像與資料
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* 幾何圖形裝飾 - 在背景層 */}
          <div className="absolute inset-0 -z-10">
            <TestimonialDecorations />
          </div>
          
          {/* 輪播容器 */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-lg z-10"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* 圖片容器 */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={image}
                      alt={`案例 ${index + 1}`}
                      className="max-h-[600px] w-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* 左箭頭 */}
            {images.length > 1 && (
              <button
                onClick={() => {
                  prevSlide();
                  resetAutoPlay();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white border border-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="上一張"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* 右箭頭 */}
            {images.length > 1 && (
              <button
                onClick={() => {
                  nextSlide();
                  resetAutoPlay();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white border border-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label="下一張"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* 指示器 */}
          {images.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetAutoPlay();
                  }}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-yellow-400 w-8 md:w-10'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`前往第 ${index + 1} 張`}
                />
              ))}
            </div>
          )}

          {/* 圖片計數器 */}
          {images.length > 1 && (
            <div className="text-center mt-4 text-gray-300 text-sm md:text-base">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {/* 對話框區域 - 在圖片輪播下方（可選） */}
          {showBubbles && (
            <div 
              className="relative mt-12 min-h-[300px] md:min-h-[400px]"
              onClick={(e) => {
                // 點擊空白區域時取消選中
                if (e.target === e.currentTarget) {
                  setActiveBubble(null);
                }
              }}
            >
              {/* 點擊提示 - 僅在 RWD 時顯示 */}
              <div className="md:hidden text-center text-gray-400 text-sm mb-4">
                點擊對話框可切換查看
              </div>
              {/* 左側對話框 */}
              <TestimonialBubble
                text={testimonial1}
                position="left"
                isVisible={bubblesVisible}
                delay={200}
                isActive={activeBubble === 'left'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'left' ? null : 'left');
                }}
              />
              
              {/* 右側對話框 */}
              <TestimonialBubble
                text={testimonial2}
                position="right"
                isVisible={bubblesVisible}
                delay={600}
                isActive={activeBubble === 'right'}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveBubble(activeBubble === 'right' ? null : 'right');
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
