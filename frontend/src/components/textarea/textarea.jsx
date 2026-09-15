
import "./textarea.css"

export default function Textarea({ label, value, onChange , h,w,labelC}) {
  return (
    <div className="textarea-div" style={{height:h,width:w}}>
      {label && <label className="input-label" style={{color:labelC}}>{label}</label>}
      <textarea onChange={(e)=>{onChange(e.target.value)}}>{value}</textarea>
  
    </div>
  );
}
