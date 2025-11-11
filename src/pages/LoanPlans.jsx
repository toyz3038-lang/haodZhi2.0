import React, { useMemo, useState } from 'react';
import {
  MoneyIcon,
  CarIcon,
  RefinanceIcon,
  HouseIcon,
  DebtConsolidationIcon,
  BusinessIcon,
} from '../components/IconComponents';
import LoanGuidelines from '../components/LoanGuidelines';
import LoanComparisonTable from '../components/LoanComparisonTable';

const LoanPlans = () => {
  const plans = useMemo(
    () => [
      {
        id: 'personal',
        title: '信用貸款',
        subtitle: '免擔保、免抵押，靈活週轉',
        icon: MoneyIcon,
        highlights: ['利率 2.68% 起', '額度最高 300 萬', '最長 84 期攤還'],
        conditions: ['年滿 20 歲～65 歲', '具備穩定薪轉或收入證明', '可搭配聯徵評估彈性核貸'],
        process: ['線上或電話留下基本資料', '專屬顧問即刻規劃最適方案', '核准撥款後一次或分次撥入戶頭'],
      },
      {
        id: 'auto',
        title: '汽車貸款',
        subtitle: '保留愛車使用權，低利率過件快',
        icon: CarIcon,
        highlights: ['車齡 15 年內皆可評估', '保留車輛持有與使用', '不限個人或公司名義'],
        conditions: ['提供車籍資料與行照', '需有基本信用紀錄', '可搭配增貸或轉貸需求'],
        process: ['顧問協助車況與價值評估', '擬定低月付分期方案', '完成設定後即可核貸撥款'],
      },
      {
        id: 'refinance',
        title: '低利轉貸',
        subtitle: '整合高利負擔，降低月付壓力',
        icon: RefinanceIcon,
        highlights: ['利率向下調整 1%～3%', '月繳最高可省 30%', '支援多筆負債整合'],
        conditions: ['已有貸款或信用卡循環', '正常繳款 6 個月以上最佳', '可搭配房屋／汽車資產做設定'],
        process: ['盤點現有負債與利率', '規劃最佳轉貸銀行或方案', '協助辦理清償與新貸撥款'],
      },
      {
        id: 'mortgage',
        title: '房屋貸款',
        subtitle: '中古屋、增貸、轉貸皆可協辦',
        icon: HouseIcon,
        highlights: ['貸款成數最高 85%', '支援增貸／轉貸／購屋', '最快 3 天核准'],
        conditions: ['本人或配偶名下持有房屋', '可接受自有、親屬或投資持有', '屋齡與權狀用途可由顧問評估'],
        process: ['提出房屋資料、權狀影本', '估價師或系統進行鑑價', '核准後設定抵押並完成撥款'],
      },
      {
        id: 'debt',
        title: '整合負債',
        subtitle: '減輕利息壓力，輕鬆分期還款',
        icon: DebtConsolidationIcon,
        highlights: ['整合卡債、信貸、代償', '一次性降低總利率與月付', '可搭配信用重建方案'],
        conditions: ['名下仍有信用往來', '需提供債務明細與繳款紀錄', '依個人財務狀況客製化期數'],
        process: ['盤整所有債務與利率', '顧問與合作銀行協調整合', '簽約後一次清償舊債、改繳新貸'],
      },
      {
        id: 'sme',
        title: '中小企業融資',
        subtitle: '創業資金、營運週轉專案',
        icon: BusinessIcon,
        highlights: ['營運貸款／應收帳款融資', '政府或銀行專案利率', '客製化增信或擔保'],
        conditions: ['公司或行號設立滿 6 個月', '備妥財報或營收證明', '可搭配動產、不動產擔保'],
        process: ['企業財務健檢與需求分析', '媒合銀行或合作金主', '核准後撥款至公司帳戶'],
      },
    ],
    [],
  );

  const [expandedPlans, setExpandedPlans] = useState(() =>
    plans.reduce((acc, plan) => ({ ...acc, [plan.id]: false }), {}),
  );

  const togglePlan = (planId) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [planId]: !prev[planId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">貸款方案</h1>
            <p className="text-lg md:text-xl text-gray-300">
              精選六大熱門方案，一鍵比較優勢與條件。點選卡片即可展開詳細內容，由專屬顧問為您量身規劃最適合的資金解決方案。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isExpanded = !!expandedPlans[plan.id];

              return (
                <article
                  key={plan.id}
                  className={`relative w-full rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? 'border-yellow-400/70 bg-gray-800 shadow-[0_10px_45px_-15px_rgba(250,204,21,0.45)]'
                      : 'border-gray-700 bg-gray-800/70 hover:border-yellow-400/40 hover:shadow-[0_10px_35px_-18px_rgba(250,204,21,0.35)]'
                  }`}
                >
                  <div className="flex items-start gap-4 p-6">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isExpanded
                          ? 'border-yellow-400/80 bg-yellow-400/10 text-yellow-300'
                          : 'border-gray-700 bg-gray-900 text-yellow-300/80'
                      }`}
                    >
                      <Icon size={30} />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold text-white tracking-wide">{plan.title}</h2>
                      <p className="text-sm md:text-base text-gray-400 mt-2 leading-relaxed">{plan.subtitle}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <button
                      type="button"
                      onClick={() => togglePlan(plan.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-yellow-400/70 px-5 py-2 text-sm font-semibold text-yellow-300 transition-colors duration-200 hover:bg-yellow-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/80"
                    >
                      {isExpanded ? '收起更多' : '查看更多'}
                    </button>
                  </div>

                  <div
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="px-6 pb-6 text-gray-300">
                      <div className="mb-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">亮點特色</h3>
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                          {plan.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-5">
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">申請條件</h3>
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed">
                          {plan.conditions.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400 mb-3">流程說明</h3>
                        <ol className="space-y-3 text-sm md:text-base leading-relaxed">
                          {plan.process.map((step, index) => (
                            <li key={step} className="flex items-start gap-3">
                              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-yellow-400/60 text-xs font-semibold text-yellow-300">
                                {index + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <LoanComparisonTable />
      <LoanGuidelines />
    </div>
  );
};

export default LoanPlans;
