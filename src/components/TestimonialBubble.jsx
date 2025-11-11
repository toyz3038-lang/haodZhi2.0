import React from 'react';

const TestimonialBubble = ({ text, position = 'left', isVisible = false, delay = 0, isActive = false, onClick, customStyle = {} }) => {
  // 將文字按換行符分割
  const lines = text.split('\n').filter(line => line.trim() !== '');

  // 計算動畫類別
  const getPositionClasses = () => {
    // 如果 customStyle 指定了 position: 'relative'，則使用相對定位
    if (customStyle.position === 'relative') {
      if (!isVisible) {
        return 'opacity-0 translate-y-8';
      }
      return 'opacity-100 translate-y-0';
    }
    
    // 絕對定位的情況
    if (!isVisible) {
      // 初始進入動畫
      return position === 'left' 
        ? 'left-0 opacity-0 -translate-x-full translate-y-8' 
        : 'right-0 opacity-0 translate-x-full translate-y-8';
    }
    
    if (isActive) {
      // 激活狀態：小屏幕居中，桌面保持原位置
      return position === 'left'
        ? 'left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 opacity-100 translate-y-0'
        : 'right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 opacity-100 translate-y-0';
    }
    
    // 正常狀態 - 使用 top 定位（如果 customStyle 有提供）
    if (customStyle.top) {
      return position === 'left'
        ? 'left-0 opacity-100 translate-x-0 translate-y-0'
        : 'right-0 opacity-100 translate-x-0 translate-y-0';
    }
    
    // 預設使用 bottom 定位
    return position === 'left'
      ? 'left-0 bottom-0 opacity-100 translate-x-0 translate-y-0'
      : 'right-0 bottom-0 opacity-100 translate-x-0 translate-y-0';
  };

  // 判斷是否使用相對定位
  const isRelative = customStyle.position === 'relative';
  
  // 合併自訂樣式
  const mergedStyle = {
    ...customStyle,
    transitionDelay: isVisible ? '0ms' : `${delay}ms`
  };

  return (
    <div
      className={`${isRelative ? 'relative' : 'absolute'} ${getPositionClasses()} ${
        isActive ? 'z-30' : 'z-20'
      } transition-all duration-500 ease-out cursor-pointer`}
      style={mergedStyle}
      onClick={onClick}
    >
      <div className={`relative w-72 sm:w-80 md:w-[420px] transition-all duration-500 ${
        isActive ? 'scale-110 md:scale-105' : 'scale-100'
      }`}>
        {/* 對話框容器 - 使用 CSS 創建，可自動調整高度 */}
        <div className={`relative bg-white rounded-2xl border-4 border-black shadow-2xl pt-4 mt-8 transition-all duration-500 ${
          isActive ? 'shadow-2xl ring-4 ring-blue-400/50 -translate-y-4 md:-translate-y-2' : 'shadow-xl translate-y-0'
        }`}>
          {/* 頂部斜線陰影區域 */}
          <div 
            className="absolute top-0 left-0 right-0 h-3 opacity-30"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #000 5px, #000 10px)',
            }}
          />
          
          {/* 指針 - 指向上方 */}
          <div 
            className="absolute -top-4 left-8 w-0 h-0 z-10"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderBottom: '20px solid #000',
            }}
          />
          <div 
            className="absolute -top-3 left-9 w-0 h-0 z-10"
            style={{
              borderLeft: '18px solid transparent',
              borderRight: '18px solid transparent',
              borderBottom: '18px solid white',
            }}
          />
          {/* 指針頂部陰影 */}
          <div 
            className="absolute -top-4 left-8 w-0 h-0 opacity-30"
            style={{
              borderLeft: '20px solid transparent',
              borderRight: '20px solid transparent',
              borderBottom: '20px solid #000',
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 3px, #000 3px, #000 6px)',
              transform: 'translate(1px, -1px)',
            }}
          />

          {/* 文字內容 */}
          <div className="relative p-5 md:p-6 flex flex-col">
            {/* 五星評價 */}
            <div className="flex gap-1 mb-3 md:mb-4 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* 文字內容 */}
            <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-1.5 md:space-y-2 font-medium">
              {lines.map((line, index) => (
                <p 
                  key={index} 
                  className={`${line.trim() === '' ? 'mb-1 md:mb-2' : ''}`}
                  style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                >
                  {line.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBubble;

