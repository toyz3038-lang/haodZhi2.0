import React, { useEffect, useMemo, useRef, useState } from 'react';
import './AboutShowcaseCarousel.css';

const MOBILE_BREAKPOINT = 768;

const getIsMobile = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
};

const AboutShowcaseCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const mobileViewportRef = useRef(null);
  const isMountedRef = useRef(false);

  const normalizedImages = useMemo(() => {
    if (!Array.isArray(images) || images.length === 0) {
      return [];
    }
    return images;
  }, [images]);

  // 監聽螢幕尺寸切換 RWD
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    const handleChange = (event) => {
      setIsMobile(event.matches);
      if (!event.matches) {
        setCurrentIndex(0);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    setIsMobile(mediaQuery.matches);
    if (!mediaQuery.matches) {
      setCurrentIndex(0);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // 自動輪播
  useEffect(() => {
    if (!isMobile || normalizedImages.length === 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [interval, isMobile, normalizedImages.length]);

  // 手機版自動滑動
  useEffect(() => {
    if (!isMobile || !mobileViewportRef.current) {
      return;
    }

    const container = mobileViewportRef.current;
    const width = container.clientWidth;
    container.scrollTo({ left: currentIndex * width, behavior: isMountedRef.current ? 'smooth' : 'auto' });
    isMountedRef.current = true;
  }, [currentIndex, isMobile]);

  const handleScroll = () => {
    if (!isMobile || !mobileViewportRef.current) {
      return;
    }

    const { scrollLeft, clientWidth } = mobileViewportRef.current;
    const nextIndex = Math.round(scrollLeft / clientWidth);
    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex % normalizedImages.length);
    }
  };

  const itemsPerView = 2;
  const desktopItems = useMemo(() => {
    if (normalizedImages.length === 0) {
      return [];
    }

    return normalizedImages.slice(0, itemsPerView).map((image, idx) => ({
      ...image,
      key: `${image.src}-${idx}`
    }));
  }, [normalizedImages]);

  if (normalizedImages.length === 0) {
    return null;
  }

  return (
    <div className="about-showcase">
      {isMobile ? (
        <div
          ref={mobileViewportRef}
          className="about-showcase__viewport"
          onScroll={handleScroll}
        >
          {normalizedImages.map((image) => (
            <div className="about-showcase__item" key={image.src}>
              <img src={image.src} alt={image.alt} className="about-showcase__image" loading="lazy" />
              {image.caption && <p className="about-showcase__caption">{image.caption}</p>}
            </div>
          ))}
        </div>
      ) : (
        <div className="about-showcase__desktop">
          {desktopItems.map((image) => (
            <div className="about-showcase__item about-showcase__item--desktop" key={image.key}>
              <img src={image.src} alt={image.alt} className="about-showcase__image" loading="lazy" />
              {image.caption && <p className="about-showcase__caption">{image.caption}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutShowcaseCarousel;

