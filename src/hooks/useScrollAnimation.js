import { useEffect, useState } from 'react';

// 滾動動畫 Hook
export const useScrollAnimation = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    // 使用 Intersection Observer 檢測元素進入視窗
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section-id');
          if (sectionId) {
            setVisibleSections((prev) => new Set(prev).add(sectionId));
            entry.target.classList.add('is-visible');
          }
        }
      });
    }, observerOptions);

    // 延遲觀察，確保 DOM 已渲染
    setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return visibleSections;
};


