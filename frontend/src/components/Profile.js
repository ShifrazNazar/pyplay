import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  const handleUpdateUsername = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/user/profile/username",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ newUsername }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          username: newUsername,
        }));
        setIsModalOpen(false);
        setSuccessMessage("Username updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
      } else {
        alert(data.message || "Failed to update username");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewUsername("");
  };

  if (!profile) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-primary text-lg">Loading profile...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center my-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">
            {profile.username}'s Profile
          </h1>
          <div className="text-lg text-gray-700 mb-6">
            <p className="mb-4">
              <strong className="text-primary">Email:</strong> {profile.email}
            </p>
            <p className="mb-4">
              <strong className="text-primary">Joined on:</strong>{" "}
              {new Date(profile.created_at).toLocaleDateString()}
            </p>
          </div>
          <button
            className="bg-primary text-white font-bold py-2 px-4 rounded"
            onClick={openModal}
          >
            Update Username
          </button>
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Update Username
            </h2>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg mb-4"
              placeholder="Enter new username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded"
                onClick={handleUpdateUsername}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
