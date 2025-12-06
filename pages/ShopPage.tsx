
import React, { useState } from 'react';
import { mockGames } from '../data/mockData';
import GameCard from '../components/GameCard';
import { Game } from '../types';

const ShopPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>(mockGames);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = games.filter(game => 
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-white uppercase">Game Library</h1>
        <p className="text-gray-400 mt-2">Browse our entire collection of digital games.</p>
      </div>
      
      <div className="flex justify-between items-center bg-brand-light-dark p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search for a game..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md py-2 px-4 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-brand-red"
        />
        {/* Add sorting/filtering dropdowns here if needed */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredGames.length > 0 ? (
            filteredGames.map(game => (
                <GameCard key={game.id} game={game} />
            ))
        ) : (
            <p className="text-center text-gray-400 col-span-full">No games found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
