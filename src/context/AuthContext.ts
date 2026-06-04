"use client";
import { createContext, useContext } from "react";
import { Session } from "next-auth";

interface AuthContextType {
  authUser: Session["user"] | null;
  status: "authenticated" | "loading" | "unauthenticated";
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};
