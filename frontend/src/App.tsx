// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SinglePlayerQuiz from "./components/SinglePlayerQuiz";
import MultiplayerQuiz from "./components/MultiplayerQuiz";
import Room from "./components/Room";
import Scoreboard from "./components/Scoreboard";
import Rules from "./components/Rules";
import Flashcards from "./components/FlashCard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/room" element={<ProtectedRoute element={<Room />} />} />
          <Route
            path="/single-player-quiz"
            element={<ProtectedRoute element={<SinglePlayerQuiz />} />}
          />
          <Route
            path="/multiplayer-quiz"
            element={<ProtectedRoute element={<MultiplayerQuiz />} />}
          />
          <Route
            path="/scoreboard"
            element={<ProtectedRoute element={<Scoreboard />} />}
          />
          <Route
            path="/rules"
            element={<ProtectedRoute element={<Rules />} />}
          />
          <Route
            path="/flashcards"
            element={<ProtectedRoute element={<Flashcards />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
