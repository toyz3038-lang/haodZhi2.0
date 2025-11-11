import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Logo from './components/Logo';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 關閉選單當視窗大小改變
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 檢查當前路徑是否為活動頁面
  const isActive = (path) => {
    return location.pathname === path;
  };

  // 切換手機版選單
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 關閉選單當點擊連結
  const closeMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        {/* Logo 區域 */}
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link">
            <Logo size={40} className="nav-logo-icon" />
            <span className="nav-logo-text">好貸智</span>
          </Link>
        </div>

        {/* 選單項目 */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              關於我們
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/loan-plans"
              className={`nav-link ${isActive('/loan-plans') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              貸款方案
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/process"
              className={`nav-link ${isActive('/process') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              申辦流程
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faq"
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              常見問題
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              聯絡我們
            </Link>
          </li>
        </ul>

        {/* 手機版選單按鈕 */}
        <div
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
