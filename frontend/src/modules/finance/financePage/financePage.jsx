
import FinanceAdd from "../sections/financeAdd/financeAdd"
import FinanceTable from "../sections/financeTable/financeTable"
import "./financePage.css"

export default function FinancePage(){
    return(
        <div className="financePage">
            <FinanceAdd/>
            <FinanceTable/>
        </div>
    )
}