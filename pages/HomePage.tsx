
import React from 'react';
import { Link } from 'react-router-dom';
import { mockGames } from '../data/mockData';
import GameCard from '../components/GameCard';

const HomePage: React.FC = () => {
  const featuredGames = mockGames.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center rounded-lg overflow-hidden h-96 flex items-center justify-center text-center p-4"
        style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('https://picsum.photos/seed/hero/1200/400')` }}
      >
        <div className="z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider">Your Digital Playground</h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">Instant access to thousands of games. Your next adventure is just a click away.</p>
          <Link to="/shop" className="mt-8 inline-block bg-brand-red text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300">
            Explore Games
          </Link>
        </div>
      </section>

      {/* Featured Games Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-brand-red pl-4">Featured Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
