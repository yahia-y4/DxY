import "./input.css";

export default function Input({ label, value, onChange, type = "text" ,labelC}) {
  return (
    <div className="input-div">
      {label && <label className="input-label" style={{color:labelC}}>{label}</label>}
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
