"use client";

import { useEffect } from "react";

export default function ClarityScript() {
  useEffect(() => {
    // @ts-ignore
    (function (c, l, a, r, i, t, y) {
      // @ts-ignore
      c[a] = c[a] || function () { // @ts-ignore
        (c[a].q = c[a].q || []).push(arguments) 
      };
      // @ts-ignore
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      // @ts-ignore
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "rc7ck20ad9");
  }, []);

  return null;
}
