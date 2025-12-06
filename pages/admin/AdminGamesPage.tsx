
import React, { useState } from 'react';
import { mockGames } from '../../data/mockData';
import { Game } from '../../types';
import AiDescriptionGenerator from '../../components/AiDescriptionGenerator';

const AdminGamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>(mockGames);
  const [showModal, setShowModal] = useState(false);
  const [newGame, setNewGame] = useState<Omit<Game, 'id'>>({
    title: '',
    description: '',
    price: 0,
    coverImage: 'https://picsum.photos/seed/newgame/300/400',
    genre: '',
    platform: 'PC',
    releaseDate: new Date().toISOString().split('T')[0],
    screenshots: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewGame(prev => ({ ...prev, [name]: name === 'price' ? parseFloat(value) : value }));
  };

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    const gameToAdd: Game = {
      ...newGame,
      id: Math.max(...games.map(g => g.id), 0) + 1,
    };
    setGames(prev => [gameToAdd, ...prev]);
    setShowModal(false);
    setNewGame({
        title: '', description: '', price: 0, coverImage: 'https://picsum.photos/seed/newgame/300/400', genre: '', platform: 'PC', releaseDate: new Date().toISOString().split('T')[0], screenshots: []
    });
  };

  const handleDeleteGame = (id: number) => {
    if(window.confirm('Are you sure you want to delete this game?')) {
        setGames(prev => prev.filter(game => game.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Manage Games</h1>
        <button onClick={() => setShowModal(true)} className="bg-brand-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
          Add New Game
        </button>
      </div>
      
      <div className="bg-brand-light-dark rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-brand-dark uppercase text-sm text-gray-400">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Title</th>
              <th className="p-4">Genre</th>
              <th className="p-4">Platform</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <tr key={game.id} className="border-b border-gray-700 hover:bg-brand-dark/50">
                <td className="p-4 text-gray-300">{game.id}</td>
                <td className="p-4 font-medium text-white">{game.title}</td>
                <td className="p-4 text-gray-300">{game.genre}</td>
                <td className="p-4 text-gray-300">{game.platform}</td>
                <td className="p-4 text-brand-red font-semibold">${game.price.toFixed(2)}</td>
                <td className="p-4">
                  <button onClick={() => handleDeleteGame(game.id)} className="text-red-500 hover:text-red-400">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-brand-light-dark rounded-lg p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Add New Game</h2>
            <form onSubmit={handleAddGame} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
                <input type="text" name="title" id="title" value={newGame.title} onChange={handleInputChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-red focus:border-brand-red" required />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
                <textarea name="description" id="description" rows={4} value={newGame.description} onChange={handleInputChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-red focus:border-brand-red" required></textarea>
                <AiDescriptionGenerator 
                    gameTitle={newGame.title} 
                    onDescriptionGenerated={(desc) => setNewGame(prev => ({ ...prev, description: desc }))} 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-300">Price</label>
                  <input type="number" name="price" id="price" value={newGame.price} onChange={handleInputChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-red focus:border-brand-red" required />
                </div>
                <div>
                  <label htmlFor="genre" className="block text-sm font-medium text-gray-300">Genre</label>
                  <input type="text" name="genre" id="genre" value={newGame.genre} onChange={handleInputChange} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-brand-red focus:border-brand-red" required />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500">Cancel</button>
                <button type="submit" className="bg-brand-red text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700">Add Game</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGamesPage;
