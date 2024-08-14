import React, { createContext, useState, useContext, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(
    token ? jwtDecode<User>(token) : null
  );

  const login = (token: string) => {
    try {
      localStorage.setItem("token", token);
      setToken(token);
      setUser(jwtDecode<User>(token));
    } catch (error) {
      console.error("Error decoding token:", error);
      // Optionally handle the error
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
