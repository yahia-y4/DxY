
import "./textarea.css"

export default function Textarea({ label, value,name, onChange , h,w,labelC}) {
  return (
    <div className="textarea-div" style={{height:h,width:w}}>
      {label && <label className="input-label" style={{color:labelC}}>{label}</label>}
      <textarea  name={name} onChange={(e)=>{onChange(e)}}>{value}</textarea>
  
    </div>
  );
}
