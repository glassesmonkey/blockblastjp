import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    'whatIs',
    'howToPlay',
    'gameModes',
    'offline',
    'highScore',
    'rewards',
    'social'
  ];

  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          {t('faq.mainTitle')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('faq.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, index) => (
          <div 
            key={faq} 
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="text-left text-lg font-semibold">
                {t(`faq.${faq}.question`)}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white">
                <p className="text-gray-600">{t(`faq.${faq}.answer`)}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          {t('faq.needHelp')}
          <a 
            href="mailto:support@blockblastjp.com" 
            className="text-blue-500 hover:text-blue-600 ml-1"
          >
            {t('faq.contactSupport')}
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
