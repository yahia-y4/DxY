import { useState } from "react";
import { ErrorContext  } from "./errorContext";


export function ErrorProvider({ children }) {
    const [message, setMessage] = useState(null);

    function showError(message) {
        setMessage(message);
    }

    function hideError() {
        setMessage(null);
    }

    return (
        <ErrorContext.Provider value={{ showError, hideError, message }}>
            {children}
        </ErrorContext.Provider>
    );
}

