"use client";

import { useEffect } from "react";

export default function BootstrapLoader() {
  useEffect(() => {
    // Dynamically load Bootstrap JS on mount client-side
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return null;
}
