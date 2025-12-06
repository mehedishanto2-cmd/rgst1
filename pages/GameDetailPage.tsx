
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockGames } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

const GameDetailPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const { addToCart } = useCart();
  const game = mockGames.find(g => g.id === parseInt(gameId || ''));

  if (!game) {
    return <div className="text-center text-2xl text-white">Game not found.</div>;
  }

  return (
    <div className="bg-brand-light-dark rounded-lg shadow-2xl overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-full w-full object-cover md:w-96" src={game.coverImage} alt={game.title} />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="uppercase tracking-wide text-sm text-brand-red font-semibold">{game.genre} | {game.platform}</div>
            <h1 className="mt-2 block text-4xl leading-tight font-black text-white">{game.title}</h1>
            <p className="mt-4 text-gray-300">{game.description}</p>
          </div>
          <div className="mt-8">
            <span className="text-4xl font-extrabold text-white">${game.price}</span>
            <button 
                onClick={() => addToCart(game)}
                className="mt-4 w-full bg-brand-red text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-red-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {game.screenshots && game.screenshots.length > 0 && (
        <div className="p-8 bg-brand-dark">
            <h2 className="text-2xl font-bold text-white mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {game.screenshots.map((ss, index) => (
                    <img key={index} src={ss} alt={`Screenshot ${index + 1}`} className="rounded-lg object-cover w-full h-auto" />
                ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
