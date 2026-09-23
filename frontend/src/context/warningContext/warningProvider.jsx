import { WarningContext } from "./warningContext";
import { useState } from "react";

export function WarningProvider({ children }) {
    const [warning, setWarning] = useState("");
    const [warningFun, setWarningFun] = useState(null);

    const showWarning = (text,fun) => {
        setWarningFun(() => fun);
        setWarning(text);
    };

    const hideWarning = () => {
        setWarning(false);
        setWarningFun(null);
    };

    return (
        <WarningContext.Provider
            value={{
                warning,
                showWarning,
                hideWarning,
                warningFun,
            }}
        >
            {children}
        </WarningContext.Provider>
    );
}