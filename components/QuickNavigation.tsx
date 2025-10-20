import React from 'react';
import { useTranslation } from 'next-i18next';
import { ChevronDown } from 'lucide-react';

const QuickNavigation = () => {
  const { t } = useTranslation('common');

  const navigationItems = [
    { id: 'introduction', label: t('nav.introduction') },
    { id: 'features', label: t('nav.features') },
    { id: 'how-it-works', label: t('nav.howItWorks') },
    { id: 'tips', label: t('nav.tips') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'guide', label: t('nav.guide') },
  ];

  return (
    <nav className="hidden lg:block bg-blue-50 border-b border-blue-100 sticky top-0 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-gray-600 mr-4">
              {t('nav.quickNav')}:
            </span>
            <div className="flex space-x-6">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {t('nav.scrollToTop')}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default QuickNavigation;