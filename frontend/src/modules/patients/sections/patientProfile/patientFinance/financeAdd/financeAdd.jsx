
import "./financeAdd.css"
import ListButton from "../../../../../../components/listButton/listButton";
import Input from "../../../../../../components/input/input";
import Button from "../../../../../../components/button/button";
import IconButton from "../../../../../../components/iconButton/iconButton";
import ForwardIcon from '@mui/icons-material/Forward';
import { handleArrayState } from "../../../../../../helperFunctions/handleArrayState";
import { PatientsContext } from "../../../../context/patientsContext";
import { useContext } from "react";
import { useState } from "react";
import { useError } from "../../../../../../context/errorContext/useError";
import { useAddCharges } from "../../../../../finance/queries/useAddCharges";
import { useAddPayment } from "../../../../../finance/queries/useAddPayment";
 import { handleInputs } from "../../../../../../helperFunctions/handleInputs";
export default function FinanceAdd(){
    const {setSelectedPatientSection,selectedPatient} = useContext(PatientsContext);
     const [addFinanceState, setAddFinanceState] = useState("charges");
      const { showError } = useError();
      const [formData, setFormData] = useState({
        patient_id: selectedPatient.id,
        amount: 0,
        note: "",
      });
      
      const addCharges = useAddCharges();
      const addPayment = useAddPayment();
    
      //functions
      function addChargesFun() {
        addCharges.mutate(formData, {
          onSuccess: () => {
            emptyData();
          },
          onError: (e) => {
            showError(e.message);
          },
        });
      }
      function addPaymentFun() {
        addPayment.mutate(formData, {
          onSuccess: () => {
            emptyData();
          },
          onError: (e) => {
            showError(e.message? e.message : "خطا");
          },
        });
      }
    
      function handleAddFinanceState() {
        addFinanceState == "payment"
          ? setAddFinanceState("charges")
          : setAddFinanceState("payment");
      }
      function emptyData() {
        setFormData({
          patient_id: selectedPatient.id,
          amount: 0,
          note: "",
        });
      }
    
      function handleAdd() {
        if (addFinanceState == "charges") {
          addChargesFun();
        } else {
          addPaymentFun();
        }
      }
    

    function back(){
        handleArrayState(setSelectedPatientSection,1,null)
    }
    //

    
    return(
        <div className="financeAdd">
            <div className="financeAdd-Control">
                <IconButton onClick={back} icon={<ForwardIcon style={{fontSize:"35px"}} />}/>
                <ListButton selected={addFinanceState == "charges"} onClick={handleAddFinanceState} label={"اضافة دين"}/>
                <ListButton selected={addFinanceState == "payment"} onClick={handleAddFinanceState} label={"استلام دفعة"}/>
            </div>
            <Input onChange={(e)=>handleInputs(setFormData,e)} value={formData.amount} name={"amount"} type="number" label={"المبلغ"}/>
            <Input onChange={(e)=>handleInputs(setFormData,e)} value={formData.note} name={"note"} label={"ملاحظة"}/>

             <div className="financeAdd-buts">
                <Button onClick={handleAdd} lable={addFinanceState == "charges" ? "اضافة دين" : "استلام دفعة"}/>
                <Button lable={"الغاء"}/>
             </div>
        </div>
    )
}