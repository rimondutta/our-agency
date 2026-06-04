"use client";
import { ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

// Inner provider that uses the session
const AuthStateProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  return (
    <AuthContext.Provider 
      value={{ 
        authUser: session?.user || null, 
        status 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  return (
    <SessionProvider>
      <AuthStateProvider>{children}</AuthStateProvider>
    </SessionProvider>
  );
};

export default AuthContextProvider;
