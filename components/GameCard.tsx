
import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import { useCart } from '../contexts/CartContext';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    const { addToCart } = useCart();
  return (
    <div className="bg-brand-light-dark rounded-lg overflow-hidden shadow-lg hover:shadow-brand-red/50 transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <Link to={`/game/${game.id}`} className="block">
        <img className="w-full h-80 object-cover" src={game.coverImage} alt={game.title} />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white truncate">{game.title}</h3>
        <p className="text-gray-400 text-sm mt-1">{game.genre} | {game.platform}</p>
        <div className="mt-4 flex justify-between items-center flex-grow">
          <p className="text-2xl font-black text-brand-red">${game.price}</p>
        </div>
      </div>
      <div className="p-4 pt-0">
         <button 
          onClick={() => addToCart(game)}
          className="w-full bg-brand-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
