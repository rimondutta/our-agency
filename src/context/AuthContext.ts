// AuthContext.ts
import { createContext, useContext } from "react";

interface AuthContextType {
  authUser: string | null;
  setAuthUser: (user: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};
