import React, { useState, useEffect } from 'react';

const SatisfyingPage = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleButtonClick = () => {
    if (!gameOver) {
      setScore(score + 1);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTimeLeft(10);
    setGameOver(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-cyan-500 min-h-screen flex flex-col justify-center items-center">
      <header>
        <h1 className="text-4xl text-white font-bold mb-8 transition-transform hover:scale-110">
          Welcome to Satisfying Page
        </h1>
      </header>
      <main>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-lg text-gray-800 mb-4">
            Click the button as many times as possible within {timeLeft} seconds!
          </p>
          <button
            className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
              gameOver && 'cursor-not-allowed opacity-50'
            }`}
            onClick={handleButtonClick}
            disabled={gameOver}
          >
            Click Me ({score})
          </button>
          {gameOver && (
            <div className="mt-4">
              <p className="text-lg text-red-600">Game Over!</p>
              <p className="text-lg text-gray-800">Your final score: {score}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                onClick={handleRestart}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SatisfyingPage;
