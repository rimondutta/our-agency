"use client";

import React, { useEffect } from "react";

export const Helmet = ({ children }: any) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // React children could be single child, array, or null
    const childrenArray = React.Children.toArray(children);

    childrenArray.forEach((child: any) => {
      if (!child || !child.type) return;

      if (child.type === "title") {
        const titleText = child.props.children;
        if (typeof titleText === "string") {
          document.title = titleText;
        }
      } else if (child.type === "meta") {
        const name = child.props.name;
        const content = child.props.content;
        if (name && content) {
          let metaTag = document.querySelector(`meta[name="${name}"]`);
          if (!metaTag) {
            metaTag = document.createElement("meta");
            metaTag.setAttribute("name", name);
            document.head.appendChild(metaTag);
          }
          metaTag.setAttribute("content", content);
        }
      } else if (child.type === "script") {
        // Handle client-side script tag injection (such as clarity in Helmet)
        const src = child.props.src;
        const inlineContent = child.props.children;
        const attrs = { ...child.props };
        delete attrs.children;
        delete attrs.src;

        const selector = src ? `script[src="${src}"]` : `script[data-helmet]`;
        let scriptTag = document.querySelector(selector);
        if (!scriptTag) {
          scriptTag = document.createElement("script");
          if (src) {
            scriptTag.setAttribute("src", src);
          } else {
            scriptTag.setAttribute("data-helmet", "true");
            scriptTag.textContent = inlineContent || "";
          }
          Object.entries(attrs).forEach(([key, val]) => {
            scriptTag?.setAttribute(key, String(val));
          });
          document.head.appendChild(scriptTag);
        }
      }
    });
  }, [children]);

  return null;
};

export const HelmetProvider = ({ children }: any) => {
  return <>{children}</>;
};
