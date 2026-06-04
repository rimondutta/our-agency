"use client";

import { useEffect, useState } from "react";
import Preloader from "../components/utilities/Preloader";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
