// import { useEffect, useContext } from "react";
// import { useError } from "../context/errorContext/useError";
// import { LoadingContext } from "../context/loadingContext/loadingContext";
// export function useQueryUI({ isLoading, isError, error, hasToken }) {
//   const { showError } = useError();
//   const { showLoading, hideLoading } = useContext(LoadingContext);
//   useEffect(() => {
//     if (!hasToken) {
//       showError("خطا في ايجاد التوكن !!");
//     }
//     if (isError) {
//       showError(error.message);
//     }
//   }, [isError, error, hasToken, showError]);

//   useEffect(() => {
//     if (isLoading) {
//       showLoading();
//     } else {
//       hideLoading();
//     }
//   }, [isLoading, showLoading, hideLoading]);
// }










import { useEffect, useContext } from "react";
import { useError } from "../context/errorContext/useError";
import { LoadingContext } from "../context/loadingContext/loadingContext";

export function useQueryUI({
    isLoading = false,
    isPending = false,
    isError,
    error,
    hasToken = true,
}) {
    const { showError } = useError();
    const { showLoading, hideLoading } = useContext(LoadingContext);

    const loading = isLoading || isPending;

    useEffect(() => {
        if (!hasToken) {
            showError("خطأ في إيجاد التوكن !!");
            return;
        }

        if (isError) {
            showError(error?.message || "حدث خطأ");
        }
    }, [isError, error, hasToken, showError]);

    useEffect(() => {
        if (loading) {
            showLoading();
        } else {
            hideLoading();
        }
    }, [loading, showLoading, hideLoading]);
}