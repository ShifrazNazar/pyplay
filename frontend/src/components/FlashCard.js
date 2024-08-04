// src/components/Flashcards.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import flashcards from '../data/flashcards';
import Navbar from './Navbar';

const Flashcards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleQuit = () => {
    navigate('/'); // Redirect to home page
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">Flashcard: {currentCard.id}</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-inner">
              <p className="text-lg font-medium text-gray-800">{currentCard.question}</p>
              {showAnswer && (
                <div className="mt-4 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-lg shadow-inner">
                  <p className="font-semibold">Answer:</p>
                  <p>{currentCard.answer}</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
              disabled={currentCardIndex === 0}
            >
              Previous
            </button>

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>

            <button
              onClick={handleNext}
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
              disabled={currentCardIndex === flashcards.length - 1}
            >
              Next
            </button>
          </div>

         
        </div>
        <div className="mt-6 text-center">
            <button
              onClick={handleQuit}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Quit
            </button>
          </div>
      </main>
    </div>
  );
};

export default Flashcards;
