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
            "name": "Block Blast",
            "applicationCategory": "Game",
            "operatingSystem": "Any",
            "description": "Block Blast is a free online puzzle game where you match and clear blocks to score points. With multiple game modes, offline play capability, and daily challenges, Block Blast offers endless puzzle fun for players of all ages.",
            "url": "https://blockblastgame.net",
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
            "inLanguage": ["en", "ja", "ko", "fr", "it"],
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
                  "name": "Emma S."
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Block Blast is my favorite puzzle game! The gameplay is smooth, and I love how I can play it anywhere without internet. Perfect for quick gaming sessions!"
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
                "name": "What is Block Blast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Block Blast is a free online puzzle game where you match and clear blocks to score points. It features multiple game modes, including Classic Mode and Adventure Mode, and can be played directly in your web browser without any downloads."
                }
              },
              {
                "@type": "Question",
                "name": "How do you play Block Blast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Playing Block Blast is simple! Drag and drop blocks onto the grid, and try to fill complete rows or columns to clear them. The more lines you clear at once, the more points you earn. The game continues until there's no more space to place new blocks."
                }
              },
              {
                "@type": "Question",
                "name": "Can I play Block Blast offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Block Blast can be played offline once you've loaded the game. No internet connection is needed for basic gameplay, making it perfect for playing on the go or when WiFi isn't available."
                }
              },
              {
                "@type": "Question",
                "name": "What game modes are available in Block Blast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Block Blast offers two main game modes: Classic Mode, where you match blocks to score points, and Adventure Mode, where you explore different levels while solving puzzles. There are also daily challenges for extra fun and rewards."
                }
              },
              {
                "@type": "Question",
                "name": "Is Block Blast suitable for children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Block Blast is family-friendly and suitable for all ages. It's easy to learn but offers enough challenge to keep players engaged. The game helps develop problem-solving skills and strategic thinking in a fun way."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a high score in Block Blast?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To achieve high scores in Block Blast, try to clear multiple rows or columns at once for bonus points. Plan your moves ahead, keep the board clear, and look for opportunities to create big combinations. Practice and strategy are key to improving your score!"
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
          <div className='flex-1'>
            <div 
              className='relative w-full h-[320px] sm:h-[573px] border border-gray-300 rounded-lg shadow-lg overflow-hidden'
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
                  src="https://blockblastonline.com/game/block-blast-v1/"
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

            {/* 游戏控制说明 */}
            <div className="mt-4 w-full bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-md p-4 sm:p-6">
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






