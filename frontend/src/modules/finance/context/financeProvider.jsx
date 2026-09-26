import { FinanceContext } from "./financeContext";

export function FinanceProvider({children}){

    return(
        <FinanceContext.Provider value={{}}>
            {children}
        </FinanceContext.Provider>
    )
}