import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoneyIcon, LightningIcon, LockIcon, PersonalLoanIcon } from '../components/IconComponents';

const steps = [
  {
    id: 1,
    title: '線上填表',
    description: '填寫聯絡方式與基本財務資料，1 分鐘完成初步申請，專屬顧問立即接手。',
    highlight: '快速提交、保密加密',
  },
  {
    id: 2,
    title: '評估額度',
    description: '依據收入、信用與財務狀況，初步估算可貸額度，提供清楚的核貸方向。',
    highlight: '量身訂製額度建議',
  },
  {
    id: 3,
    title: '評估方案',
    description: '比較不同銀行與金融機構方案，模擬月付與期數，挑選最適合的貸款配置。',
    highlight: '多元方案專業分析',
  },
  {
    id: 4,
    title: '到場辦理',
    description: '安排至合作據點或指定地點核對文件、完成簽約設定，全程專員陪同。',
    highlight: '流程清楚、文件把關',
  },
  {
    id: 5,
    title: '快速撥款',
    description: '核准後即刻撥款入帳，提供撥款明細與後續繳款提醒，安心啟動資金計畫。',
    highlight: '撥款即時、專人追蹤',
  },
];

const featureCards = [
  {
    title: '線上安全加密',
    description: '使用 SSL 加密傳輸，所有資料僅用於專案評估，不外洩、不推銷。',
    icon: LockIcon,
  },
  {
    title: '顧問隨行服務',
    description: '從申請到撥款全程追蹤，文件準備、條件談判都由專業顧問協助完成。',
    icon: PersonalLoanIcon,
  },
  {
    title: '彈性核貸條件',
    description: '信用、薪轉、資產多面向評估，提供多種方案供挑選，通過率大幅提升。',
    icon: LightningIcon,
  },
  {
    title: '透明費用資訊',
    description: '辦理前揭露所有費用與利率，無前期費用、無隱藏條件，簽約更安心。',
    icon: MoneyIcon,
  },
];

const Process = () => {
  const gaugeRef = useRef(null);
  const pointerBounds = useMemo(() => ({ min: -70, max: 70 }), []);
  const pointerAngles = useMemo(() => {
    const totalRange = pointerBounds.max - pointerBounds.min;
    const segment = totalRange / steps.length;
    return steps.map((_, index) => pointerBounds.min + segment * (index + 0.5));
  }, [pointerBounds.max, pointerBounds.min]);

  const [activeStepId, setActiveStepId] = useState(steps[0].id);
  const [pointerAngle, setPointerAngle] = useState(pointerAngles[0]);

  const clamp = useCallback((value, min, max) => Math.min(Math.max(value, min), max), []);

  const setActiveByIndex = useCallback(
    (index) => {
      const clampedIndex = clamp(index, 0, steps.length - 1);
      setActiveStepId(steps[clampedIndex].id);
    },
    [clamp],
  );

  const handleGaugeMouseMove = useCallback(
    (event) => {
      if (!gaugeRef.current) return;
      const rect = gaugeRef.current.getBoundingClientRect();
      const relativeX = event.clientX - rect.left;
      const ratio = clamp(relativeX / rect.width, 0, 1);
      const angle = pointerBounds.min + ratio * (pointerBounds.max - pointerBounds.min);
      setPointerAngle(angle);
      setActiveByIndex(Math.floor(ratio * steps.length));
    },
    [clamp, pointerBounds.max, pointerBounds.min, setActiveByIndex],
  );

  const handleGaugeMouseLeave = useCallback(() => {
    const currentIndex = steps.findIndex((step) => step.id === activeStepId);
    if (currentIndex >= 0) {
      setPointerAngle(pointerAngles[currentIndex]);
    }
  }, [activeStepId, pointerAngles]);

  const focusStep = useCallback(
    (stepId) => {
      const index = steps.findIndex((step) => step.id === stepId);
      if (index >= 0) {
        setActiveStepId(stepId);
        setPointerAngle(pointerAngles[index]);
      }
    },
    [pointerAngles],
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Smart Loan Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">申辦流程</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              只要五個步驟，專屬顧問帶您完成從填表、評估、簽約到撥款的全流程服務。全程透明、快速且保密，讓資金需求不再複雜。
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div
            ref={gaugeRef}
            onMouseMove={handleGaugeMouseMove}
            onMouseLeave={handleGaugeMouseLeave}
            className="relative mx-auto mb-12 h-60 w-full max-w-4xl rounded-t-[400px] border border-yellow-400/20 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-800/30"
          >
            <div className="absolute inset-0 overflow-hidden rounded-t-[400px]">
              <div className="absolute inset-x-0 top-1/2 h-1 bg-yellow-400/20" />
              <div className="absolute inset-x-12 top-6 h-4 rounded-full bg-yellow-400/5 blur-lg" />
            </div>

            <div
              className="pointer-events-none absolute bottom-8 left-1/2 h-40 w-1.5 origin-bottom rounded-full bg-gradient-to-t from-yellow-400 via-yellow-300 to-white shadow-[0_0_35px_rgba(250,204,21,0.35)] transition-transform duration-150 ease-out"
              style={{ transform: `translateX(-50%) rotate(${pointerAngle}deg)` }}
            />
            <div className="pointer-events-none absolute bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full border border-yellow-400/20 bg-gray-900/90 shadow-[0_10px_20px_-12px_rgba(250,204,21,0.45)]" />

            <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex justify-between px-6 text-xs uppercase tracking-[0.25em] text-gray-500">
              {steps.map((step, index) => {
                const isActive = activeStepId === step.id;
                return (
                  <span
                    key={step.id}
                    className={`transition-colors duration-200 ${isActive ? 'text-yellow-300' : ''}`}
                  >
                    {step.title}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {steps.map((step) => {
              const isActive = activeStepId === step.id;
              return (
                <article
                  key={step.id}
                  className={`relative flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-200 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-yellow-400/70 ${
                    isActive
                      ? 'border-yellow-400/80 bg-gray-800/90 shadow-[0_20px_45px_-25px_rgba(250,204,21,0.65)]'
                      : 'border-gray-800/60 bg-gray-800/60 hover:border-yellow-400/50 hover:shadow-[0_20px_35px_-28px_rgba(250,204,21,0.55)]'
                  }`}
                  onMouseEnter={() => focusStep(step.id)}
                  onFocus={() => focusStep(step.id)}
                  tabIndex={0}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'border-yellow-400/90 bg-yellow-400/10 text-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.35)]'
                        : 'border-gray-700 text-yellow-300/70'
                    }`}
                  >
                    {step.id}
                  </div>
                  <div className="space-y-3">
                    <h2
                      className={`text-xl font-semibold tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-yellow-200' : 'text-white'
                      }`}
                    >
                      {step.title}
                    </h2>
                    <p className={`leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
                      {step.description}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-200 ${
                      isActive
                        ? 'border-yellow-400/80 bg-yellow-400/10 text-yellow-200'
                        : 'border-gray-700 text-gray-400'
                    }`}
                  >
                    {step.highlight}
                  </span>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/loan-plans"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/70 px-6 py-3 text-sm md:text-base font-semibold text-yellow-300 transition-colors duration-200 hover:bg-yellow-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
            >
              查看熱門貸款方案
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 border-t border-gray-800/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Why SmartLoan</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">更多服務保障</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              不只是代辦流程，我們提供全方位的貸前貸後支援，守護您每一個資金決策，讓貸款體驗安全、放心又高效率。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="flex flex-col gap-4 rounded-2xl border border-gray-800/60 bg-gray-800/60 p-6 shadow-[0_12px_45px_-25px_rgba(14,20,31,0.8)] hover:border-yellow-400/40 transition-colors duration-300"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/80 bg-yellow-400/10 text-yellow-300">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
