import React from 'react';

const guidelineSections = [
  {
    title: '貸前評估必讀',
    points: [
      '先盤點自身信用、財務負擔與可承受的月繳金額，避免過度借貸。',
      '準備好身份證、財力證明、薪轉紀錄等文件，能加快審核速度。',
      '若曾有信用瑕疵或延遲繳款紀錄，請主動告知顧問協助規劃。',
    ],
  },
  {
    title: '核貸流程提醒',
    points: [
      '核貸前請確認所有條款、費用和利率，必要時索取書面說明。',
      '銀行或金主可能會致電聯繫，請保持電話暢通並主動回覆。',
      '收到核准條件後再次檢查期數、利率與相關設定，確保符合期待。',
    ],
  },
  {
    title: '撥款後注意事項',
    points: [
      '依約定日期準時繳款，避免產生違約金與信用瑕疵。',
      '若遇到資金調整或提前清償需求，先詢問是否有手續費。',
      '妥善保存合約、對帳單與撥款憑證，以便日後查證。',
    ],
  },
  {
    title: '常見問題速記',
    points: [
      '貸款利率會依個人信用、擔保品及方案不同而調整。',
      '整合負債或轉貸需先確認原貸款是否有違約金或提前清償費。',
      '若為公司或行號申貸，需準備財報、稅單或營運證明等文件。',
    ],
  },
];

const LoanGuidelines = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Loan Checklist</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">貸款須知</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            辦理貸款前後的每一個步驟都與信用息息相關。以下重點整理讓您掌握節奏，與顧問合作來制定最適的資金策略。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {guidelineSections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-gray-800/70 bg-gray-800/70 backdrop-blur-sm shadow-[0_12px_45px_-20px_rgba(15,23,42,0.8)] hover:border-yellow-400/40 transition-colors duration-300"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center text-sm md:text-base text-gray-500">
          <p>
            貸款條件以核准書面為準，如對內容有疑問，歡迎立即聯繫好貸智專屬顧問，由專業團隊提供進一步協助與方案調整。
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoanGuidelines;

