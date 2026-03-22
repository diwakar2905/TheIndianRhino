"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoaded: boolean;
  login: (email: string, pass?: string) => void;
  signup: (name: string, email: string, pass?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("rhino_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse user from local storage");
      }
    }
    setIsLoaded(true);
  }, []);

  const login = (email: string) => {
    const name = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, " ");
    const dummyUser = { email, name };
    setUser(dummyUser);
    localStorage.setItem("rhino_user", JSON.stringify(dummyUser));
  };

  const signup = (name: string, email: string) => {
    const newUser = { email, name };
    setUser(newUser);
    localStorage.setItem("rhino_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("rhino_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoaded, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
