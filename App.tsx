import React, { useState } from 'react';
import { THEORISTS } from './constants';
import type { Theorist } from './types';
import Introduction from './components/Introduction';
import TheoristView from './components/TheoristView';
import OwnerView from './components/OwnerView';

const App: React.FC = () => {
  const [selectedTheorist, setSelectedTheorist] = useState<Theorist | null>(null);
  const [showOwnerPage, setShowOwnerPage] = useState(false);

  const handleSelectTheorist = (theoristId: string | null) => {
    setShowOwnerPage(false);
    if (theoristId === null) {
      setSelectedTheorist(null);
      return;
    }
    const theorist = THEORISTS.find((t) => t.id === theoristId);
    setSelectedTheorist(theorist || null);
  };
  
  const handleSelectOwner = () => {
    setSelectedTheorist(null);
    setShowOwnerPage(true);
  };

  const handleBackToIntro = () => {
    setSelectedTheorist(null);
    setShowOwnerPage(false);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <header className="text-center p-4 md:p-6 relative z-10">
          <button
            onClick={handleBackToIntro}
            className="focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-4 focus:ring-offset-pink-50 rounded-lg transition-transform duration-300 hover:scale-105"
            aria-label="Back to introduction"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Theories of Personality
            </h1>
          </button>
        </header>

        <main className="container mx-auto px-4 py-4 md:py-8 relative z-10">
          {selectedTheorist ? (
            <TheoristView theorist={selectedTheorist} onBack={handleBackToIntro} />
          ) : showOwnerPage ? (
            <OwnerView onBack={handleBackToIntro} />
          ) : (
            <Introduction 
              theorists={THEORISTS} 
              onSelect={handleSelectTheorist} 
              onSelectOwner={handleSelectOwner} 
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
