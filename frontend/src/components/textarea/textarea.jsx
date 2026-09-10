
import "./textarea.css"

export default function Textarea({ label, value, onChange , h}) {
  return (
    <div className="textarea-div" style={{height:h}}>
      {label && <label className="input-label">{label}</label>}
      <textarea onChange={(e)=>{onChange(e.target.value)}}>{value}</textarea>
  
    </div>
  );
}
