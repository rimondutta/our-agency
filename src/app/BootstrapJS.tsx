"use client";

import { useEffect } from "react";

export default function BootstrapJS() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return null;
}
