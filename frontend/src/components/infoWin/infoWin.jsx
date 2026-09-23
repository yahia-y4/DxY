import "./infoWin.css"

export default function InfoWin({lable,title,data , h,w}){
return(
    <div className="infoWin-box" style={{height:h,width:w}}>
        {lable && <h3 className="lable">{lable}</h3>}
        <div className="infoWin-div">
            {title && <h3> {title} </h3>}
            <p>{data}</p>
        </div>
    </div>
)
}