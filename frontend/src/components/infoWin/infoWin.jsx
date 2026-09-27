import "./infoWin.css"

export default function InfoWin({lable,title,data,h,w,notCenter}){
return(
    <div className={"infoWin-box"} style={{height:h,width:w}}>
        {lable && <h3 className="lable">{lable}</h3>}
        <div className={notCenter? "infoWin-div-not-center" : "infoWin-div"}>
            {title && <h3> {title} </h3>}
            <p>{data}</p>
        </div>
    </div>
)
}