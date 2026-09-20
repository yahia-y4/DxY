
import "./iconButton.css";
export default function IconButton({ icon, onClick }) {
  return (
    <div className="icon-button" onClick={onClick}>
      {icon}
    </div>
  );
}