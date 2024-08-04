import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Room = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      navigate("/multiplayer-quiz", { state: { roomCode } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
          <h1 className="text-3xl text-center font-bold text-primary mb-4">
            Join Room
          </h1>
          <div className="mb-4">
            <label
              htmlFor="roomCode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Room Code:
            </label>
            <input
              id="roomCode"
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Room Code"
            />
          </div>
          <button
            onClick={handleJoinRoom}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Join Room
          </button>
        </div>
      </main>
    </div>
  );
};

export default Room;
