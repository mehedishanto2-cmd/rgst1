
import React, { useState } from 'react';
import { generateGameDescription } from '../services/geminiService';

interface AiDescriptionGeneratorProps {
  gameTitle: string;
  onDescriptionGenerated: (description: string) => void;
}

const AiDescriptionGenerator: React.FC<AiDescriptionGeneratorProps> = ({ gameTitle, onDescriptionGenerated }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!gameTitle) {
      setError('Please enter a game title first.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const description = await generateGameDescription(gameTitle);
      onDescriptionGenerated(description);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleGenerate}
        disabled={isLoading || !gameTitle}
        className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-dark focus:ring-indigo-500"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          'Generate Description with AI'
        )}
      </button>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AiDescriptionGenerator;
