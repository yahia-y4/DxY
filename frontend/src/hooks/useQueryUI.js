import { useEffect, useContext } from "react";
import { useError } from "../context/errorContext/useError";
import { LoadingContext } from "../context/loadingContext/loadingContext";
export function useQueryUI({ isLoading, isError, error, hasToken }) {
  const { showError } = useError();
  const { showLoading, hideLoading } = useContext(LoadingContext);
  useEffect(() => {
    if (!hasToken) {
      showError("خطا في ايجاد التوكن !!");
    }
    if (isError) {
      showError(error.message);
    }
  }, [isError, error, hasToken, showError]);

  useEffect(() => {
    if (isLoading) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isLoading, showLoading, hideLoading]);
}
