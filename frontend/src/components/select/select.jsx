import "./select.css";
export default function Select({ label, w, name, patients=[], value, onChange}) {
  return (
    <div className="select-div" style={{ width: w }}>
      <label>{label}</label>
      <select onChange={(e)=>onChange(e)} name={name} value={value}>
        <option value="" key={0}>المريض</option>
        {patients.map((patient) => (
          <option value={patient.id} key={patient.id}>
            {patient.name} {patient.father_name}  {patient.nick_name}
          </option>
        ))}
      </select>
    </div>
  );
}
