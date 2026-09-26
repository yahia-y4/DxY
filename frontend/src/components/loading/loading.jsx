import "./loading.css";
import { useContext } from "react";
import { LoadingContext } from "../../context/loadingContext/loadingContext";

export default function Loading() {
  const { loading } = useContext(LoadingContext);
  if(!loading) return null
  return (
    <div className="loading-div">
      <div className="loader"></div>
    </div>
  );
}
