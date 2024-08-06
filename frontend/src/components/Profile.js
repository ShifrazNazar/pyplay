import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const Profile = () => {
  const [profile, setProfile] = useState(null);
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
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              <strong className="text-primary">Email:</strong> {profile.email}
            </p>
            <p>
              <strong className="text-primary">Joined on:</strong>{" "}
              {new Date(profile.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
