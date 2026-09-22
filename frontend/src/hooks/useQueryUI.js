import { useEffect } from "react";
import { useError } from "../context/errorContext/useError";
export function useQueryUI({ isLoading, isError, error, hasToken }) {
  const { showError } = useError();
  useEffect(() => {
    if (!hasToken) {
      showError("خطا في ايجاد التوكن !!");
    }
    if (isError) {
      showError(error.message);
    }
  }, [isLoading, isError, error, hasToken, showError]);
}
