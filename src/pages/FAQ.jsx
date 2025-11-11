import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { LightningIcon, MoneyIcon, LockIcon } from '../components/IconComponents';

const faqCategories = [
  { id: 'qualification', label: '📝 申請資格' },
  { id: 'documents', label: '📄 所需文件' },
  { id: 'rate', label: '💰 利率與費用' },
  { id: 'review', label: '⚡ 快速審核流程' },
];

const faqs = [
  {
    question: '我有信用瑕疵還能辦貸款嗎？',
    answer: '可以的。不是所有貸款都看銀行往來，我們會依照你的工作、收入與還款能力重新評估可能的方案。',
    categories: ['qualification'],
  },
  {
    question: '需要準備哪些文件？',
    answer: '通常需要身分證、健保卡、薪轉證明或勞保資料，視貸款產品不同會再補件。',
    categories: ['documents'],
  },
  {
    question: '一定要本人到場嗎？',
    answer: '是的，為了保障雙方權益需要本人到場辦理，顧問會協助安排時間地點。',
    categories: ['qualification'],
  },
  {
    question: '申請後多久會知道結果？',
    answer: '一般 30 分鐘至 2 小時即可完成初審；若個案較複雜，顧問會主動通知最新狀態。',
    categories: ['review'],
  },
  {
    question: '我目前有欠款或協商過，可以申請嗎？',
    answer: '可以，會依照現況與金流重新評估是否適合承作，並提供最有利的整合建議。',
    categories: ['qualification'],
  },
  {
    question: '我薪資不固定也能辦嗎？',
    answer: '可以，接案或無固定薪的族群也能以收入證明或帳戶流水辦理，由顧問協助規劃。',
    categories: ['qualification'],
  },
  {
    question: '貸款利率怎麼算？會不會很高？',
    answer: '利率依個人財務狀況與產品不同而定，會在申辦前揭露完整利率與費用，保證透明無隱藏。',
    categories: ['rate'],
  },
  {
    question: '可以提前還款嗎？會不會有違約金？',
    answer: '大多數產品可提前清償，是否有違約金會在簽約前清楚告知，協助你做出最佳決策。',
    categories: ['rate'],
  },
  {
    question: '初審通過後就一定能核貸嗎？',
    answer: '不一定。初審是先評估可行性，最終核貸仍需依照完整文件與銀行／公司審查為主。',
    categories: ['review'],
  },
  {
    question: '如何知道我適合哪一種貸款？',
    answer: '你可以先提供需求（整合、週轉或資金用途）與工作收入，顧問會依你的狀況配對最合適方案。',
    categories: ['qualification'],
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question || null);

  const filteredFaqs = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchKeyword =
        !keyword ||
        faq.question.toLowerCase().includes(keyword) ||
        faq.answer.toLowerCase().includes(keyword);
      const matchCategory =
        !activeCategory || (faq.categories && faq.categories.includes(activeCategory));
      return matchKeyword && matchCategory;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-800">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-500/10 to-transparent blur-3xl" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full border border-yellow-500/20" />
          <div className="absolute bottom-0 right-12 h-72 w-72 rounded-full border border-gray-700/30" />
        </div>
        <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">FAQ Center</p>
            <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">常見問題 FAQ</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">
              貸款流程透明，所有問題一次為你解答。若找不到答案，專屬顧問仍隨時待命協助。
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section 2: 搜尋欄 */}
          <div className="relative -mt-12 mb-12 rounded-3xl border border-gray-800/70 bg-gray-900/95 p-6 shadow-[0_25px_45px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
            <label htmlFor="faq-search" className="sr-only">
              搜尋常見問題
            </label>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-gray-900/70 px-4 py-3 ring-offset-0">
              <span className="text-yellow-300/70 text-xl">🔍</span>
              <input
                id="faq-search"
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="輸入你的問題，例如：信用瑕疵可辦嗎？"
                className="w-full bg-transparent text-base text-gray-200 placeholder-gray-500 outline-none"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-yellow-300"
                >
                  清除
                </button>
              )}
            </div>
          </div>

          {/* Section 3: FAQ 分類標籤 */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm">
            {faqCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(isActive ? null : category.id)}
                  className={`rounded-full border px-5 py-2 transition-all duration-200 ${
                    isActive
                      ? 'border-yellow-400/80 bg-yellow-400/10 text-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.35)]'
                      : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-yellow-400/60 hover:text-yellow-200'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Section 4: Accordion */}
          <div className="mx-auto max-w-4xl space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openQuestion === faq.question;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-yellow-400/60 bg-gray-900/90 shadow-[0_25px_55px_-35px_rgba(250,204,21,0.55)]'
                      : 'border-gray-800/70 bg-gray-900/70 hover:border-yellow-400/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? null : faq.question)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-yellow-400">Q</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    <span
                      className={`text-2xl transition-transform duration-200 ${
                        isOpen ? 'text-yellow-300' : 'text-gray-500'
                      }`}
                    >
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-800/60 bg-gray-900/90 px-6 py-5 text-base leading-relaxed text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
            {!filteredFaqs.length && (
              <div className="rounded-2xl border border-gray-800/70 bg-gray-900/80 px-6 py-10 text-center text-gray-400">
                找不到符合的問題，歡迎直接聯繫我們的顧問團隊。
              </div>
            )}
          </div>

          {/* Section 5: CTA */}
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-yellow-400/30 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800/80 p-8 text-center shadow-[0_30px_65px_-40px_rgba(250,204,21,0.45)]">
            <h2 className="text-2xl font-semibold text-white md:text-3xl">找不到你的問題嗎？讓我們直接幫你！</h2>
            <p className="mt-3 text-gray-300">
              留下需求或線上諮詢，顧問會在最短時間內與你聯繫，提供專屬方案與評估。
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://line.me/ti/p/-dTe6677Tc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-15px_rgba(16,185,129,0.8)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-300 sm:w-auto"
              >
                立即諮詢專員（LINE）
              </a>
              <a
                href="/#application-form"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-900/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-18px_rgba(30,64,175,0.65)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:w-auto"
              >
                立即申請貸款
              </a>
            </div>
          </div>

          {/* Section 6: Reminders */}
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-800/70 bg-gray-900/80 p-8">
            <div className="mb-6 flex items-center gap-3 text-yellow-300">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10">
                <LockIcon size={24} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">安心保障承諾</h3>
                <p className="text-sm text-gray-400">每一位申請者都是我們重要的合作夥伴。</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm text-gray-300 md:grid-cols-2">
              {[
                '✔ 嚴格保密你的資料',
                '✔ 無任何預先收費',
                '✔ 透明流程、清楚說明',
                '✔ 尊重每一位申請者',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-800/70 bg-gray-900/60 px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">
                    <LightningIcon size={16} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
