import React from 'react';

const rows = [
  {
    type: '個人信貸',
    advantages: ['申請門檻低，不需提供擔保品', '審核速度快，資金到位時間短', '可自由運用資金'],
    disadvantages: ['利率相對較高', '可貸金額有限', '信用評分影響核准率與利率'],
    suitable: '上班族、信用良好的自由工作者、臨時資金需求者',
  },
  {
    type: '房屋貸款',
    advantages: ['利率最低、期數最長', '可貸金額高', '有房產可作為擔保品，審核較穩定'],
    disadvantages: ['需提供房屋抵押', '審核時間長、手續繁瑣', '若無法還款，可能喪失房產'],
    suitable: '有自有房產、想購屋或整合高利貸款者',
  },
  {
    type: '企業貸款',
    advantages: ['可支應營運資金或擴展需求', '可依企業狀況彈性設計貸款方案', '利率通常比個人信貸低'],
    disadvantages: ['需提供財報、營運證明等文件', '審核時間長', '若公司財務不佳，核貸困難'],
    suitable: '中小企業主、創業者、公司法人',
  },
  {
    type: '汽車貸款',
    advantages: ['有車可作為抵押，核准率高', '手續簡便，審核速度快', '適合需要購車或資金週轉者'],
    disadvantages: ['車輛貶值快，抵押價值易降低', '利率略高於房貸', '未清償前車輛所有權屬於銀行或貸方'],
    suitable: '想購車、以車借款的上班族或個體戶',
  },
];

const LoanComparisonTable = () => {
  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Plan Overview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">貸款方案比較</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            透過優缺點與適合對象的整理，快速掌握各項貸款差異，挑選最符合您的財務規劃與資金需求的方案。
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-800/80 bg-gray-900/80 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.8)]">
          <table className="min-w-full text-left text-sm md:text-base text-gray-300 border-separate border-spacing-0">
            <thead className="bg-gray-800/80 text-yellow-300 uppercase tracking-[0.25em] text-xs md:text-sm">
              <tr>
                <th className="px-5 py-4 font-semibold border-b border-r border-gray-700">貸款種類</th>
                <th className="px-5 py-4 font-semibold border-b border-r border-gray-700">優點</th>
                <th className="px-5 py-4 font-semibold border-b border-r border-gray-700">缺點</th>
                <th className="px-5 py-4 font-semibold border-b border-gray-700">適合對象</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.type}
                  className={`${index % 2 === 0 ? 'bg-gray-900/70' : 'bg-gray-900/40'} hover:bg-gray-800/60 transition-colors duration-200`}
                >
                  <td className="px-5 py-5 text-white text-base font-semibold whitespace-nowrap border-r border-b border-gray-800/80">{row.type}</td>
                  <td className="px-5 py-5 align-top border-r border-b border-gray-800/80">
                    <ul className="space-y-2">
                      {row.advantages.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5 align-top border-r border-b border-gray-800/80">
                    <ul className="space-y-2">
                      {row.disadvantages.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5 align-top text-gray-200 leading-relaxed border-b border-gray-800/80">{row.suitable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-center text-sm md:text-base text-gray-500">
          以上資訊僅供參考，實際核貸條件需依金融機構審核結果為準，歡迎諮詢顧問獲得更細節的專屬建議。
        </p>
      </div>
    </section>
  );
};

export default LoanComparisonTable;

