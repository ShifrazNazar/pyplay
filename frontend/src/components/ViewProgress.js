import React from "react";
import Navbar from "./Navbar";

const ViewProgress = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">
            Progress Overview
          </h1>

          {/* Your Progress */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Your Progress</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">
                Score: <span className="text-primary">150</span>
              </p>
              <p className="text-lg font-semibold">
                Total Questions Attempted:{" "}
                <span className="text-primary">50</span>
              </p>
            </div>
          </section>

          {/* Score Over Time */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Score Over Time</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg">
                Graph or chart to display score trends over time
              </p>
              {/* Insert a graph or chart component here */}
            </div>
          </section>

          {/* Milestones Achieved */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Milestones Achieved</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg">
                List of milestones with dates and descriptions
              </p>
              {/* Example milestone */}
              <p>
                <span className="font-semibold">Milestone 1:</span> Reached 100
                points on July 30, 2024
              </p>
              <p>
                <span className="font-semibold">Milestone 2:</span> Completed 10
                quizzes on August 1, 2024
              </p>
            </div>
          </section>

          {/* Badges Earned */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Badges Earned</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <div className="flex flex-wrap gap-4">
                {/* Badge 1 */}
                <div className="w-64 p-4 bg-white shadow-sm rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Badge Name 1</h3>
                  <p className="text-lg font-semibold">Correct Answers:</p>
                  <p className="text-lg">42</p>
                  <p className="mt-2 text-gray-700">Description of Badge 1</p>
                </div>

                {/* Badge 2 */}
                <div className="w-64 p-4 bg-white shadow-sm rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Badge Name 2</h3>
                  <p className="text-lg font-semibold">Wrong Answers:</p>
                  <p className="text-lg">18</p>
                  <p className="mt-2 text-gray-700">Description of Badge 2</p>
                </div>

                {/* Badge 3 */}
                <div className="w-64 p-4 bg-white shadow-sm rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Badge Name 3</h3>
                  <p className="text-lg">Description of Badge 3</p>
                </div>
              </div>
            </div>
          </section>

          {/* Correct/Wrong Answers Breakdown */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Correct/Wrong Answers Breakdown
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <p className="text-lg font-semibold">Correct Answers:</p>
              <p className="text-lg">42</p>
              <p className="mt-2 text-lg font-semibold">Wrong Answers:</p>
              <p className="text-lg">18</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ViewProgress;
