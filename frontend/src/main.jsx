import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorProvider } from "./context/errorContext/errorProvider.jsx";
import { LoadingProvider } from "./context/loadingContext/loadingProvider.jsx";
import { WarningProvider } from "./context/warningContext/warningProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ErrorProvider>
      <LoadingProvider>
        <WarningProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WarningProvider>
      </LoadingProvider>
    </ErrorProvider>
  </QueryClientProvider>,
);
