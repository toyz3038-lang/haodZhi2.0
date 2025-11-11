import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { LockIcon, LightningIcon } from '../components/IconComponents';

const contactMethods = [
  {
    title: 'LINE 官方帳號',
    description: '最快速、最直接的諮詢方式',
    buttonLabel: '加入官方 LINE',
    buttonLink: 'https://line.me/ti/p/-dTe6677Tc',
    buttonColor: 'bg-green-500 hover:bg-green-400 focus-visible:ring-green-300',
    note: null,
  },
  {
    title: '客服電話',
    description: '專人服務時間：10:00 – 20:00',
    buttonLabel: '0958-699-687',
    buttonLink: 'tel:0958699687',
    buttonColor: 'bg-blue-900/90 hover:bg-blue-800 focus-visible:ring-blue-400',
    note: '提供初步試算與方案說明',
  },
];

const promises = [
  '所有資料全程加密處理',
  '絕不會在未經許可的情況下聯絡親友或公司',
  '不會在線上收取任何費用',
  '流程透明、文件清楚說明',
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Section 1: Hero */}
      <section className="bg-gray-900 px-4 py-10 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Contact</p>
          <h1 className="mt-4 text-3xl font-bold text-white md:text-4xl">聯絡我們</h1>
          <p className="mt-3 text-base md:text-lg text-gray-300">
            有任何問題，我們都願意親自為你解答。留下方式，立即收到專屬顧問的即時協助。
          </p>
        </div>
      </section>

      {/* Section 2: Contact Methods */}
      <section className="bg-gray-900 pb-6 pt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="rounded-3xl border border-gray-800/70 bg-gray-900/90 p-8 shadow-[0_25px_55px_-40px_rgba(250,204,21,0.45)]"
                >
                  <h2 className="text-2xl font-semibold text-white md:text-3xl">{method.title}</h2>
                  <p className="mt-3 text-gray-300">{method.description}</p>
                  {method.note && <p className="mt-2 text-sm text-gray-500">{method.note}</p>}
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href={method.buttonLink}
                      target={method.buttonLink.startsWith('http') ? '_blank' : undefined}
                      rel={method.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-18px_rgba(30,64,175,0.65)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 ${method.buttonColor} sm:w-auto`}
                    >
                      {method.buttonLabel}
                    </a>
                    {method.title === 'LINE 官方帳號' && (
                      <span className="text-sm text-gray-400">掃描 QR code 或直接點擊按鈕加入</span>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl border border-gray-800/70 bg-gray-900/80 p-10 shadow-[0_25px_55px_-40px_rgba(250,204,21,0.35)]">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10 text-yellow-300">
                    <LockIcon size={28} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">好貸智的安心承諾</h2>
                    <p className="text-sm text-gray-400">我們以誠信與透明守護每一位客戶的權益。</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                  {promises.map((promise) => (
                    <div
                      key={promise}
                      className="flex items-start gap-3 rounded-2xl border border-gray-800/70 bg-gray-900/70 px-5 py-4"
                    >
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">
                        <LightningIcon size={16} />
                      </span>
                      <span className="text-gray-300">{promise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-800/70 bg-gray-900/90 p-6 shadow-[0_20px_45px_-40px_rgba(59,130,246,0.45)]">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-800/60 flex items-center justify-center">
                <img
                  src="/images/contact/line-qr-code.png"
                  alt="好貸智 LINE QR Code"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 flex w-full items-center justify-center rounded-2xl border border-gray-800/70 bg-gray-900/85 py-6">
                <Logo size={1080} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
