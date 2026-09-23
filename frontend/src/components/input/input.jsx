import "./input.css";

export default function Input({ label, value, onChange, type = "text" ,labelC,w,name}) {
  return (
    <div className="input-div" style={{width:w}}>
      {label && <label className="input-label" style={{color:labelC}}>{label}</label>}
      <input name={name}
        className="input-field"
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
