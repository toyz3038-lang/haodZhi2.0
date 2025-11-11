# 好貸智 - React 專案

這是一個使用 React 構建的多頁面網站，包含獨立的導覽列組件。

## 專案結構

```
好貸智/
├── public/
│   └── index.html          # HTML 模板
├── src/
│   ├── Navigation.jsx      # 導覽列組件（獨立組件）
│   ├── Navigation.css      # 導覽列樣式
│   ├── App.jsx             # 主應用組件
│   ├── App.css             # 應用樣式
│   ├── index.js            # React 入口文件
│   ├── styles.css          # 全域樣式
│   └── pages/              # 頁面組件
│       ├── Home.jsx        # 首頁
│       ├── About.jsx       # 關於我們
│       ├── LoanPlans.jsx   # 貸款方案
│       ├── Process.jsx     # 申辦流程
│       ├── FAQ.jsx         # 常見問題
│       └── Contact.jsx     # 聯絡我們
├── package.json            # 專案依賴
├── webpack.config.js       # Webpack 配置
├── .babelrc                # Babel 配置
└── .gitignore              # Git 忽略文件
```

## 安裝步驟

1. **安裝依賴**
```bash
npm install
```

2. **啟動開發伺服器**
```bash
npm run dev
```
或
```bash
npm start
```

3. **構建生產版本**
```bash
npm run build
```

## 導覽列組件使用

導覽列組件位於 `src/Navigation.jsx`，這是一個獨立的 React 組件，可以在任何頁面中重複使用。

### 特點

- ✅ 獨立組件，易於維護
- ✅ 使用 React Router 進行路由管理
- ✅ 自動高亮當前頁面
- ✅ 響應式設計（支援手機、平板、桌面）
- ✅ 手機版漢堡選單

### 導覽列選項

- 首頁 (Home) - `/`
- 關於我們 (About) - `/about`
- 貸款方案 (Loan Plans) - `/loan-plans`
- 申辦流程 (Process) - `/process`
- 常見問題 (FAQ) - `/faq`
- 聯絡我們 (Contact) - `/contact`

## 新增頁面

要新增頁面，請按照以下步驟：

1. 在 `src/pages/` 目錄下創建新的頁面組件
2. 在 `src/App.jsx` 中添加路由：
```jsx
import NewPage from './pages/NewPage';

// 在 Routes 中添加
<Route path="/new-page" element={<NewPage />} />
```

3. 在 `src/Navigation.jsx` 中添加導覽連結：
```jsx
<li className="nav-item">
  <Link
    to="/new-page"
    className={`nav-link ${isActive('/new-page') ? 'active' : ''}`}
    onClick={closeMenu}
  >
    新頁面
  </Link>
</li>
```

## 技術棧

- **React** 18.2.0 - UI 框架
- **React Router** 6.20.0 - 路由管理
- **Webpack** 5.89.0 - 模組打包工具
- **Babel** - JavaScript 編譯器

## 開發說明

- 開發伺服器運行在 `http://localhost:3000`
- 所有 React 組件使用 JSX 語法
- 樣式使用 CSS 模組或獨立 CSS 文件
- 使用 React Router 的 `Link` 組件進行頁面導航

## 自訂樣式

- 導覽列樣式：`src/Navigation.css`
- 全域樣式：`src/styles.css`
- 應用樣式：`src/App.css`

您可以根據需要修改這些樣式文件來調整網站的外觀。
