import type { Metadata } from "next";

// Global CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/css/modal-video.css";
import "react-photo-view/dist/react-photo-view.css";
import "react-circular-progressbar/dist/styles.css";
import "animate.css";

import "../assets/css/animate.css";
import "../assets/css/font-awesome.css";
import "../assets/css/flaticon-set.css";

import "../assets/css/helper.css";
import "../assets/css/unit-test.css";
import "../assets/css/validnavs.css";
import "../assets/css/style.css";
import "../assets/css/team-page.css";

// Context & Wrappers
import AuthContextProvider from "../context/AuthProvider";
import PreloaderWrapper from "./PreloaderWrapper";
import Dependency from "../components/utilities/Dependency";
import BootstrapJS from "./BootstrapJS";
import ClarityScript from "./ClarityScript";

export const metadata: Metadata = {
  title: "Market Growth Experts",
  description: "Transforming Startups into Brands",
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "ViJ0BpPqCoQ7_TqtFKQThcSKYvxf97FVTA-WAD5MGCw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
      </head>
      <body suppressHydrationWarning>
        <AuthContextProvider>
          <PreloaderWrapper>
            {children}
            <Dependency />
          </PreloaderWrapper>
        </AuthContextProvider>
        <BootstrapJS />
        <ClarityScript />
      </body>
    </html>
  );
}
