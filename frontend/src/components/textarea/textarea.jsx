
import "./textarea.css"

export default function Textarea({ label, value, onChange , h,labelC}) {
  return (
    <div className="textarea-div" style={{height:h}}>
      {label && <label className="input-label" style={{color:labelC}}>{label}</label>}
      <textarea onChange={(e)=>{onChange(e.target.value)}}>{value}</textarea>
  
    </div>
  );
}
