import React from 'react';
import { useTranslation } from 'next-i18next';
import { Gamepad, Star, Target, Trophy, Zap, Heart, HelpCircle } from 'lucide-react';

const GameGuide = () => {
  const { t } = useTranslation('common');

  const sections = [
    'basics',
    'modes',
    'scoring',
    'powerUps',
    'achievements',
    'advanced',
    'help'
  ];

  const icons = {
    basics: <Gamepad className="h-6 w-6 text-blue-500" />,
    modes: <Star className="h-6 w-6 text-blue-500" />,
    scoring: <Target className="h-6 w-6 text-blue-500" />,
    powerUps: <Zap className="h-6 w-6 text-blue-500" />,
    achievements: <Trophy className="h-6 w-6 text-blue-500" />,
    advanced: <Heart className="h-6 w-6 text-blue-500" />,
    help: <HelpCircle className="h-6 w-6 text-blue-500" />
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          {t('gameGuide.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-500 md:text-xl">
          {t('gameGuide.description')}
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        {sections.map((section) => (
          <div key={section} className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4">
              {icons[section as keyof typeof icons]}
              <h3 className="ml-3 text-2xl font-bold">
                {t(`gameGuide.${section}.title`)}
              </h3>
            </div>
            <p className="mb-4 text-gray-600">
              {t(`gameGuide.${section}.description`)}
            </p>
            <ul className="space-y-2">
              {(t(`gameGuide.${section}.items`, { returnObjects: true }) as string[]).map((tip: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameGuide;
