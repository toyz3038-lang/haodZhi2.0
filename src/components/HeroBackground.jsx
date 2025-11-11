import React, { useRef, useEffect } from 'react';

const HeroBackground = () => {
  const shapesRef = useRef(null);
  const containerRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // 獲取滑鼠位置
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // 檢查滑鼠是否在 Hero 區域內
        const isInside = 
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        
        if (isInside) {
          // 計算滑鼠相對於容器的中心位置
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          // 計算偏移量（相對於中心，範圍 -1 到 1）
          targetPosition.current = {
            x: (e.clientX - rect.left - centerX) / centerX,
            y: (e.clientY - rect.top - centerY) / centerY,
          };
        } else {
          // 滑鼠在區域外時回到中心
          targetPosition.current = { x: 0, y: 0 };
        }
      }
    };

    // 滑鼠離開時回到中心
    const handleMouseLeave = () => {
      targetPosition.current = { x: 0, y: 0 };
    };

    // 平滑動畫函數
    const animate = () => {
      if (shapesRef.current) {
        // 使用緩動函數平滑移動
        mousePosition.current.x += (targetPosition.current.x - mousePosition.current.x) * 0.05;
        mousePosition.current.y += (targetPosition.current.y - mousePosition.current.y) * 0.05;

        const shapes = shapesRef.current.children;
        
        // 每個圖形根據滑鼠位置移動，使用不同的速度創造深度感
        Array.from(shapes).forEach((shape, index) => {
          // 根據索引設定不同的移動速度和方向
          const speed = 10 + (index % 5) * 5; // 速度範圍 10-30
          const direction = index % 2 === 0 ? 1 : -1; // 交替方向
          const xOffset = mousePosition.current.x * speed * direction;
          const yOffset = mousePosition.current.y * speed * direction;
          
          // 添加輕微的旋轉效果
          const rotation = mousePosition.current.x * 2 * direction;
          
          shape.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // 開始動畫循環
    animate();

    // 添加事件監聽器到整個視窗
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // 滑鼠離開 Hero 區域時回到中心
    const container = containerRef.current?.closest('section');
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // SVG 金錢符號組件
  const DollarSign = ({ size = 60, opacity = 0.3 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300"
      style={{ opacity }}
    >
      <path
        d="M12 2V22M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
        stroke="#DAA520"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const EuroSign = ({ size = 50, opacity = 0.25 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300"
      style={{ opacity }}
    >
      <path
        d="M14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7M14 7C14 8.10457 13.1046 9 12 9M14 7H19M10 7H5M12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13M12 9H19M12 13C13.1046 13 14 13.8954 14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15M12 13H5M10 15H19"
        stroke="#DAA520"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const YenSign = ({ size = 55, opacity = 0.2 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300"
      style={{ opacity }}
    >
      <path
        d="M12 20V4M8 8H16M8 12H16M9 16L15 4"
        stroke="#DAA520"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PoundSign = ({ size = 48, opacity = 0.25 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="transition-transform duration-300"
      style={{ opacity }}
    >
      <path
        d="M18 7C18 9.20914 16.2091 11 14 11H10M6 7H18M6 7L6 13M6 13H14M6 13L6 19"
        stroke="#DAA520"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div ref={shapesRef} className="absolute inset-0">
      {/* 金錢符號 - 使用 SVG */}
      <div className="absolute top-16 left-16">
        <DollarSign size={72} opacity={0.3} />
      </div>
      <div className="absolute top-32 right-24">
        <DollarSign size={60} opacity={0.25} />
      </div>
      <div className="absolute bottom-40 left-20">
        <DollarSign size={84} opacity={0.25} />
      </div>
      <div className="absolute top-1/3 right-16">
        <DollarSign size={70} opacity={0.2} />
      </div>
      <div className="absolute bottom-1/4 right-1/3">
        <YenSign size={60} opacity={0.25} />
      </div>
      <div className="absolute top-1/2 left-1/4">
        <YenSign size={72} opacity={0.2} />
      </div>
      <div className="absolute top-16 right-1/3">
        <EuroSign size={50} opacity={0.25} />
      </div>
      <div className="absolute bottom-16 left-1/3">
        <PoundSign size={60} opacity={0.25} />
      </div>

      {/* 三角形 */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/20 rotate-45 transition-transform duration-300"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-white/20 rotate-12 transition-transform duration-300"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 border-4 border-white/20 -rotate-45 transition-transform duration-300"></div>
      
      {/* 圓形（硬幣樣式） */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 border-4 border-yellow-400/20 rounded-full transition-transform duration-300 bg-yellow-400/5"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-yellow-400/15 rounded-full transition-transform duration-300 bg-yellow-400/5"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 border-4 border-yellow-400/20 rounded-full transition-transform duration-300 bg-yellow-400/5"></div>
      
      {/* 方形 */}
      <div className="absolute top-10 right-1/3 w-28 h-28 border-4 border-white/20 rotate-45 transition-transform duration-300"></div>
      <div className="absolute bottom-40 left-1/3 w-36 h-36 border-4 border-white/20 -rotate-12 transition-transform duration-300"></div>
      
      {/* 六邊形效果 */}
      <div
        className="absolute top-1/3 right-10 w-44 h-44 border-4 border-white/10 rotate-30 transition-transform duration-300"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      ></div>
      
      {/* 更多裝飾性幾何圖形 */}
      <div
        className="absolute bottom-1/4 left-1/2 w-52 h-52 border-4 border-white/10 rotate-45 transition-transform duration-300"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
      ></div>
      </div>
    </div>
  );
};

export default HeroBackground;
