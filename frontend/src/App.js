// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SinglePlayerQuiz from "./components/SinglePlayerQuiz";
import MultiplayerQuiz from "./components/MultiplayerQuiz";
import Room from "./components/Room";
import ViewProgress from "./components/ViewProgress";
import ViewRules from "./components/ViewRules";
import Flashcards from "./components/FlashCard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
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
            path="/view-progress"
            element={<ProtectedRoute element={<ViewProgress />} />}
          />
          <Route
            path="/view-rules"
            element={<ProtectedRoute element={<ViewRules />} />}
          />
          <Route
            path="/flashcards"
            element={<ProtectedRoute element={<Flashcards />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
