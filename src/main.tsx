import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error/ErrorBoundary.tsx";
import { HelmetProvider } from "react-helmet-async";
import AuthContextProvider from "./context/AuthProvider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <AuthContextProvider>
          {" "}
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);
