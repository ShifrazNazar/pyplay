import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ViewProgress = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/api/quiz/user-scores"
        );
        const data = await response.json();

        const highestScores = data.reduce((acc, score) => {
          if (!acc[score.username] || acc[score.username].score < score.score) {
            acc[score.username] = score;
          }
          return acc;
        }, {});

        const sortedScores = Object.values(highestScores).sort(
          (a, b) => b.score - a.score
        );
        setScores(sortedScores);
      } catch (error) {
        console.error("Failed to fetch scores", error);
      }
    };

    fetchScores();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">
            Global Scoreboard
          </h1>

          {/* Score Table */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Scoreboard</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b text-left">Username</th>
                    <th className="py-2 px-4 border-b text-left">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((score, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b">{score.username}</td>
                      <td className="py-2 px-4 border-b">{score.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ViewProgress;
