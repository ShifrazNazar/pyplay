import React from "react";
import Navbar from "./Navbar";

const ViewRules = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            Quiz Rules
          </h1>

          <div className="space-y-4">
            <section>
              <h2 className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-gray-700">
                The objective of the quiz is to test your knowledge on Python
                programming concepts. Each question has multiple choices, and
                you need to select the correct answer to earn points.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Rules</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="mb-2">
                  Each question presents multiple choices, and only one is
                  correct.
                </li>
                <li className="mb-2">
                  Correct answers earn you 10 points, while incorrect answers
                  deduct 2 points.
                </li>
                <li className="mb-2">
                  You can use hints to get a clue about the correct answer, but
                  using a hint will deduct 2 points from your score.
                </li>
                <li className="mb-2">
                  You must select an option before proceeding to the next
                  question.
                </li>
                <li className="mb-2">
                  At the end of the quiz, your final score will be displayed.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewRules;
