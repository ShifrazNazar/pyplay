import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import axios from "axios";
import Navbar from "./Navbar";
import CompleteQuiz from "./CompleteQuiz";

const socket = io("http://localhost:5001");

const MultiplayerQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hintDisabled, setHintDisabled] = useState(false);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [showCompleteQuiz, setShowCompleteQuiz] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const roomCode = location.state?.roomCode;

  useEffect(() => {
    if (!roomCode) {
      navigate("/");
    }

    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/mcqs");
        const formattedQuestions = response.data.map((question) => ({
          ...question,
          options: [
            { value: question.optionA, label: question.optionA },
            { value: question.optionB, label: question.optionB },
            { value: question.optionC, label: question.optionC },
            { value: question.optionD, label: question.optionD },
          ],
        }));
        setQuestions(formattedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();

    socket.emit("joinRoom", { roomCode });

    socket.on("updateOpponentScore", (newScore) => {
      setOpponentScore(newScore);
    });

    return () => {
      socket.emit("leaveRoom", { roomCode });
      socket.off("updateOpponentScore");
    };
  }, [roomCode, navigate]);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionValue) => {
    if (!answerSubmitted && !optionsDisabled) {
      setSelectedOption(optionValue);

      if (optionValue === currentQuestion.answer) {
        setScore((prevScore) => {
          const newScore = prevScore + 10;
          socket.emit("scoreUpdate", { roomCode, score: newScore });
          return newScore;
        });
        setErrorMessage("");
      } else {
        setScore((prevScore) => {
          const newScore = prevScore - 2;
          socket.emit("scoreUpdate", { roomCode, score: newScore });
          return newScore;
        });
        setHintDisabled(true);
        setOptionsDisabled(true);
        setErrorMessage("");
      }

      setAnswerSubmitted(true);
    }
  };

  const handleNext = () => {
    if (answerSubmitted) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setHintUsed(false);
        setHintDisabled(false);
        setOptionsDisabled(false);
        setAnswerSubmitted(false);
        setErrorMessage("");
      } else {
        setShowCompleteQuiz(true);
      }
    } else {
      setErrorMessage(
        "Please select an option before proceeding to the next question."
      );
    }
  };

  const useHint = () => {
    if (!hintUsed && !hintDisabled) {
      setHintUsed(true);
      setScore(score - 2);
    }
  };

  const quitQuiz = () => {
    navigate("/");
  };

  const closeModal = () => {
    setShowCompleteQuiz(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">
            Multiplayer Quiz
          </h1>

          {/* Flex Container for Question and Opponent Info */}
          <div className="flex flex-col sm:flex-row">
            {/* Question Section */}
            <div className="flex-grow sm:pr-4 mb-4 sm:mb-0">
              <h2 className="text-xl font-semibold mb-4">
                {currentQuestion.question}
              </h2>

              <div className="space-y-2">
                {currentQuestion.options.map((option) => {
                  let buttonClass =
                    "w-full text-left px-4 py-2 rounded-md border transition-colors duration-300 ";

                  if (answerSubmitted) {
                    if (option.value === currentQuestion.answer) {
                      buttonClass += "bg-green-200 text-green-800"; // Correct answer
                    } else if (option.value === selectedOption) {
                      buttonClass += "bg-red-200 text-red-800"; // Incorrect answer
                    } else {
                      buttonClass += "bg-gray-100 text-gray-700"; // Non-selected options
                    }
                  } else {
                    buttonClass +=
                      option.value === selectedOption
                        ? "bg-blue-200 text-blue-800 border-blue-500" // Selected answer
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"; // Non-selected options
                  }

                  return (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      disabled={optionsDisabled || answerSubmitted}
                      className={buttonClass}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>

              {/* Hint and Error Message */}
              {hintUsed && (
                <div className="mt-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded">
                  <p className="font-semibold">Hint:</p>
                  <p>{currentQuestion.hint}</p>
                </div>
              )}

              {errorMessage && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                  <p className="font-semibold">{errorMessage}</p>
                </div>
              )}

              {/* Actions and Score */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <button
                  onClick={useHint}
                  className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 mb-2 sm:mb-0 ${
                    hintUsed || hintDisabled
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                  disabled={hintUsed || hintDisabled}
                >
                  Use Hint
                </button>

                <button
                  onClick={handleNext}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Next
                </button>
              </div>

              {/* Progress and Score */}
              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-lg font-semibold">
                  Progress: {currentQuestionIndex + 1}/{questions.length}
                </p>
                <p className="text-lg font-semibold">Score: {score}</p>
              </div>
            </div>

            {/* Opponent Info Section */}
            <div className="w-full sm:w-64 sm:pl-4 sm:border-l border-gray-200">
              <h2 className="text-lg font-semibold mb-2">Opponent Info</h2>
              <p className="text-gray-700">
                Opponent's Score:{" "}
                <span className="font-semibold">{opponentScore}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Quit Quiz Button */}
        <div className="mt-4 text-center">
          <button
            onClick={quitQuiz}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Quit Quiz
          </button>
        </div>
      </main>

      {/* Show completion modal when quiz is done */}
      {showCompleteQuiz && <CompleteQuiz score={score} onClose={closeModal} />}
    </div>
  );
};

export default MultiplayerQuiz;
