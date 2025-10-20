import { NextPage, GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import GameRecommendations from '../components/GameRecommendations';
import Footer from '../components/Footer';
import Header from '../components/Header';
import  Testimonials  from '../components/Testimonials';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GameTips from '../components/GameTips';
import FAQSection from '../components/FAQSection';
import GameGuide from '../components/GameGuide';
import BlockBlastSolver from '../components/BlockBlastSolver';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { loadTranslations } from '../lib/loadTranslations';
import { useState, useRef } from 'react';
import IntroductionGame from '../components/IntroductionGame';


const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, defaultLocale, pathname } = router;
  const canonicalUrl = `https://blockblastgame.net${locale === defaultLocale ? '' : `/${locale}`}${pathname}`;
  const [showGame, setShowGame] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);


  return (
    <div className='flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen px-4 sm:px-6'>
      <Head>

        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="canonical" href={canonicalUrl} />
        {/* <link rel="dns-prefetch" href="https://nos.blockblastgame.net"></link> */}

        {/* hreflang 标记 */}
        {locales?.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={`https://blockblastgame.net${l === defaultLocale ? '' : `/${l}`}${pathname}`}
          />
        ))}

        {/* x-default hreflang */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://blockblastgame.net${pathname}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": t('meta.ogTitle'),
            "applicationCategory": "Game",
            "operatingSystem": "Any",
            "description": t('meta.description'),
            "url": canonicalUrl,
            "sameAs": [
              "https://www.tiktok.com/@blockblastofficial",
              "https://x.com/BlockBlastSquad",
              "https://discord.gg/DxqHRKAKpu",
              "https://www.youtube.com/@BlockBlastOfficial",
              "https://www.instagram.com/blockblastglobal/",
              "https://www.facebook.com/61564167488999/",
              "https://www.reddit.com/user/BlockBlastOfficial/"
            ],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "gameItem": [
              {
                "@type": "Thing",
                "name": "Classic Mode"
              },
              {
                "@type": "Thing",
                "name": "Adventure Mode"
              },
              {
                "@type": "Thing",
                "name": "Daily Challenges"
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Block Blast Games"
            },
            "datePublished": "2024-01-01",
            "inLanguage": locale || "ja",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "1526"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": t('testimonials.player1.name')
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": t('testimonials.player1.content')
              }
            ],
            "gamePlatform": ["Web Browser", "Online", "Mobile"],
            "genre": ["Puzzle Game", "Casual Game", "Strategy Game"]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "datePublished": "2024-01-01",
            "dateModified": "2024-03-20",
            "publisher": {
              "@type": "Organization",
              "name": "Block Blast Games"
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": t('faq.whatIs.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.whatIs.answer')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.howToPlay.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.howToPlay.answer')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.offline.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.offline.answer')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.gameModes.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.gameModes.answer')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.highScore.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.highScore.answer')
                }
              },
              {
                "@type": "Question",
                "name": t('faq.rewards.question'),
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": t('faq.rewards.answer')
                }
              }
            ]
          })}
        </script>

      </Head>
      <Header />

      {/* 修改游戏区域的布局为flex容器 */}
      <div className='w-full flex flex-col items-center mt-4 sm:mt-10'>
        <div className='w-full flex flex-col lg:flex-row lg:space-x-6 max-w-[1100px]'>
          {/* 游戏主区域 */}
          <div className='flex-1 flex flex-col'>
            {/* 游戏iframe区域 - order-1确保视觉上在顶部 */}
            <div
              className='relative w-full h-[320px] sm:h-[573px] border border-gray-300 rounded-lg shadow-lg overflow-hidden order-1'
              onClick={() => setShowGame(true)}
            >
              {!showGame ? (
                <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 cursor-pointer'>
                  <img
                    src="https://cdn.blockblastgame.net/block-blast-banner.webp"
                    alt="block-blast-banner"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    className='bg-blue-500 text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-blue-400 transition duration-300 ease-in-out z-10 text-sm sm:text-base'
                  >
                    Start Game
                  </button>
                </div>
              ) : (
                <iframe
                  ref={iframeRef}
                  src="https://blockblastonline.com/1.embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="HTML Game"
                  onLoad={() => setIframeLoaded(true)}
                  className={iframeLoaded ? '' : 'hidden'}
                ></iframe>
              )}
            </div>

            {/* H1标签 - order-2确保在HTML中靠前但视觉上在游戏后 */}
            <h1 className="order-2 text-3xl sm:text-4xl font-bold text-center mt-6 mb-4 text-indigo-700">
              ブロック ブラスト
            </h1>

            {/* 游戏控制说明 */}
            <div className="order-3 mt-4 w-full bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md p-4 sm:p-6">
              <p className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-indigo-700">
                {t('gameControls.title')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <p className="font-semibold text-base sm:text-lg text-indigo-600 mb-2">
                    {t('gameControls.basicControls.title')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    {(() => {
                      const controls = t('gameControls.basicControls.controls', { returnObjects: true });
                      return Array.isArray(controls) ? controls.map((control: {action: string, key: string}, index: number) => (
                        <li key={index}>
                          <span className="font-medium">{control.action}:</span> {control.key}
                        </li>
                      )) : null;
                    })()}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <p className="font-semibold text-base sm:text-lg text-indigo-600 mb-2">
                    {t('gameControls.gameplayTips.title')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
                    {(() => {
                      const tips = t('gameControls.gameplayTips.tips', { returnObjects: true });
                      return Array.isArray(tips) ? tips.map((tip: string, index: number) => (
                        <li key={index}>{tip}</li>
                      )) : null;
                    })()}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* 右侧推荐区域 */}
          <div className="hidden lg:block lg:w-[320px] lg:shrink-0 lg:bg-gray-50 lg:p-6 lg:rounded-lg lg:border lg:border-gray-100 lg:shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended Games</h3>
            <GameRecommendations />
          </div>
        </div>
      </div>

      <IntroductionGame />
      {/* BlockBlastSolver 组件 */}
      <div className="w-full mt-4 sm:mt-8">
        <BlockBlastSolver />
      </div>

      {/* 其他部分的移动端优化 */}
      <div className="w-full space-y-6 sm:space-y-8 mt-4 sm:mt-8">

        <FeaturesSection />
        <HowItWorksSection />
        <GameTips />
        <FAQSection />
        <Testimonials />
        <GameGuide />
      </div>

      <Footer />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }: GetStaticPropsContext) => {
  if (!locale) {
    throw new Error('Locale is not defined');
  }

  return {
    props: loadTranslations(locale, ['common', 'games']),
  };
};
export default Home;






