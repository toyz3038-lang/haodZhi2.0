import React from 'react';

const TestimonialDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 左側幾何圖形 - 圓形 */}
      <div className="absolute -left-8 top-1/4 w-32 h-32 opacity-25">
        <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 border-4 border-yellow-400/50 rounded-full animate-spin-slow"></div>
      </div>

      {/* 左側三角形 */}
      <div className="absolute left-4 bottom-1/4 w-24 h-24 opacity-20">
        <div 
          className="absolute inset-0 border-4 border-cyan-400 animate-float"
          style={{ 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: 'rotate(45deg)'
          }}
        ></div>
      </div>

      {/* 右側幾何圖形 - 八邊形 */}
      <div className="absolute -right-8 top-1/3 w-40 h-40 opacity-25">
        <div 
          className="absolute inset-0 border-4 border-cyan-400 animate-float-slow"
          style={{ 
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
          }}
        ></div>
      </div>

      {/* 右側圓形 - 脈衝效果 */}
      <div className="absolute right-4 bottom-1/3 w-20 h-20 opacity-20">
        <div className="absolute inset-0 border-4 border-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute inset-2 border-4 border-yellow-400/50 rounded-full"></div>
      </div>

      {/* 底部幾何圖形 - 六邊形 */}
      <div className="absolute left-1/4 -bottom-4 w-36 h-36 opacity-15">
        <div 
          className="absolute inset-0 border-4 border-cyan-400 animate-rotate-slow"
          style={{ 
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        ></div>
      </div>

      {/* 頂部裝飾 - 方形 */}
      <div className="absolute right-1/4 -top-4 w-28 h-28 opacity-20">
        <div className="absolute inset-0 border-4 border-yellow-400 rotate-45 animate-float"></div>
      </div>

      {/* 左側方形動畫 */}
      <div className="absolute left-2 top-1/2 w-16 h-16 opacity-25">
        <div className="absolute inset-0 border-4 border-cyan-400 rotate-45 animate-pulse"></div>
      </div>

      {/* 右側方形動畫 */}
      <div className="absolute right-2 top-1/2 w-16 h-16 opacity-25">
        <div className="absolute inset-0 border-4 border-yellow-400 -rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* 左側額外圓形 */}
      <div className="absolute left-0 top-1/2 w-12 h-12 opacity-15">
        <div className="absolute inset-0 border-3 border-cyan-400 rounded-full animate-spin-slow"></div>
      </div>

      {/* 右側額外圓形 */}
      <div className="absolute right-0 top-1/2 w-12 h-12 opacity-15">
        <div className="absolute inset-0 border-3 border-yellow-400 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
    </div>
  );
};

export default TestimonialDecorations;

