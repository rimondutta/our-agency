"use client";

import React, { useState, useEffect } from "react";
import AuthContextProvider from "@/context/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Preloader from "@/components/utilities/Preloader";
import RoutesScrollToTop from "@/components/utilities/RoutesScrollToTop";
import Dependency from "@/components/utilities/Dependency";
import BootstrapLoader from "@/components/utilities/BootstrapLoader";

export default function GlobalClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContextProvider>
      <HelmetProvider>
        <BootstrapLoader />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {children}
            <RoutesScrollToTop />
            <Dependency />
          </>
        )}
      </HelmetProvider>
    </AuthContextProvider>
  );
}
