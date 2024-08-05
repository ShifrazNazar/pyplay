import React from "react";

const CompleteQuiz = ({ score, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Quiz Completed!</h2>
        <p className="text-lg text-center mb-6">
          Your final score is <span className="font-semibold">{score}</span>.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#3B3A8B]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteQuiz;
