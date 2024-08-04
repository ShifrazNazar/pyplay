import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to PyPlay
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Discover interactive quizzes and dynamic flashcards that make
            learning fun and engaging.
          </p>
          <div className="flex flex-col md:flex-row md:justify-center gap-4">
            <a
              href="/single-player-quiz"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3B3A8B] transition"
            >
              Start Single Player Quiz
            </a>
            <a
              href="/multiplayer-quiz"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3B3A8B] transition"
            >
              Start Multiplayer Quiz
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Interactive Quizzes
              </h3>
              <p className="text-gray-600">
                Challenge yourself with engaging quizzes designed to test and
                improve your knowledge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Multiplayer Challenges
              </h3>
              <p className="text-gray-600">
                Face off against friends and other players in exciting
                multiplayer quiz challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Flashcards
              </h3>
              <p className="text-gray-600">
                Utilize flashcards to study and review material at your own
                pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>&copy; 2024 PyPlay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
