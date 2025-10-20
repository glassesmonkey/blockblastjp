import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  isExternal?: boolean;
}

const GameRecommendations = () => {
  const { t } = useTranslation('games');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const rawGames = t('recommendations.games', { returnObjects: true });
  const games: Game[] = Array.isArray(rawGames) 
    ? rawGames.map(game => ({
        ...game,
        isExternal: game.url.startsWith('http') || game.url.startsWith('https')
      }))
    : [];

  useEffect(() => {
    if (!Array.isArray(rawGames)) {
      console.warn('Translation data is not in expected format:', rawGames);
    }
  }, [rawGames]);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;
    
    const scroll = () => {
      if (scrollRef.current && !isHovered && autoScrollEnabled) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        
        if (scrollTop >= scrollHeight / 2) {
          scrollRef.current.scrollTop = 0;
        } else {
          scrollRef.current.scrollTop += 1;
        }
      }
    };

    scrollInterval = setInterval(scroll, 20);
    setAutoScrollEnabled(true);

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered, autoScrollEnabled]);

  const handleScroll = () => {
    setAutoScrollEnabled(false);
    setTimeout(() => setAutoScrollEnabled(true), 5000);
  };

  return (
    <section className="w-full max-w-[280px] h-[573px] py-4">
      <div className="sticky top-4 h-full flex flex-col bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold text-text-primary mb-4">
          {t('recommendations.title')}
        </h2>
        
        <div 
          ref={scrollRef}
          className={`flex-1 overflow-y-auto pr-2 space-y-4 ${
            isHovered ? 'custom-scrollbar' : 'hide-scrollbar'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onScroll={handleScroll}
        >
          {games.map((game) => (
            <div
              key={`first-${game.id}`}
              className="game-card group hover:bg-background-light/50 
                       transform transition-all duration-300 hover:-translate-y-1"
            >
              {game.isExternal ? (
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GameCard game={game} />
                </a>
              ) : (
                <Link href={game.url}>
                  <GameCard game={game} />
                </Link>
              )}
            </div>
          ))}
          
          {games.map((game) => (
            <div
              key={`second-${game.id}`}
              className="game-card group hover:bg-background-light/50 
                       transform transition-all duration-300 hover:-translate-y-1"
            >
              {game.isExternal ? (
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GameCard game={game} />
                </a>
              ) : (
                <Link href={game.url}>
                  <GameCard game={game} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative h-16 w-16 flex-shrink-0">
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-text-primary truncate">
          {game.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-2">
          {game.description}
        </p>
      </div>
    </div>
  );
};

export default GameRecommendations; 