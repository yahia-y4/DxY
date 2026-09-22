import { useState } from "react";
import { LoadingContext } from "./loadingContext";
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  function showLoading() {
    setLoading(true);
  }

  function hideLoading() {
    setLoading(false);
  }
  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
