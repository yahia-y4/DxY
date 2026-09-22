import "./patientFinance.css";
import FinanceAdd from "./financeAdd/financeAdd";
import FinanceTable from "./financeTable/financeTable";
export default function PatientFinance(){
    return(
        <div className="PatientFinance">
            <FinanceAdd/>
            <FinanceTable/>
            
        </div>
    )
}

