import "./financeAdd.css";
import ListButton from "../../../../components/listButton/listButton";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import Button from "../../../../components/button/button";
import { usePatients } from "../../../patients/queries/usePatients";
import { useState } from "react";
import { useAddCharges } from "../../queries/useAddCharges";
import { useAddPayment } from "../../queries/useAddPayment";
import { handleInputs } from "../../../../helperFunctions/handleInputs";
import { useError } from "../../../../context/errorContext/useError";
export default function FinanceAdd() {
  const [addFinanceState, setAddFinanceState] = useState("charges");
  const { showError } = useError();
  const [formData, setFormData] = useState({
    patient_id: "",
    amount: 0,
    note: "",
  });
  const patients = usePatients();
  const addCharges = useAddCharges();
  const addPayment = useAddPayment();

  //functions
  function addChargesFun() {
    addCharges.mutate(formData, {
      onSuccess: () => {
        emptyData();
      },
      onError: () => {
        showError("خطا في اضافة الدين");
      },
    });
  }
  function addPaymentFun() {
    addPayment.mutate(formData, {
      onSuccess: () => {
        emptyData();
      },
      onError: () => {
        showError("خطا في استلام الدفعة");
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
      patient_id: "",
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
  //----
  return (
    <div className="financeAdd">
      <div className="financeAdd-Control">
        <ListButton
          onClick={handleAddFinanceState}
          selected={addFinanceState == "charges"}
          label={"اضافة دين"}
        />
        <ListButton
          onClick={handleAddFinanceState}
          selected={addFinanceState == "payment"}
          label={"استلام دفعة"}
        />
      </div>
      <Select
        onChange={(e) => handleInputs(setFormData, e)}
        name={"patient_id"}
        value={formData.patient_id}
        patients={patients?.data}
        label={"المريض"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"amount"}
        value={formData.amount}
        type="number"
        label={"المبلغ $"}
      />
      <Input
        onChange={(e) => handleInputs(setFormData, e)}
        name={"note"}
        value={formData.note}
        label={"ملاحظة"}
      />

      <div className="financeAdd-buts">
        <Button
          onClick={handleAdd}
          lable={addFinanceState == "charges" ? "اضافة دين" : "استلام دفعة"}
        />
        <Button lable={"الغاء"} />
      </div>
    </div>
  );
}
