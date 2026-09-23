import "./addToothWin.css";

export default function AddToothWin({ w, h, title ,number,vertical,horizontal , onToothClick}) {
  return (
    <div className="addToothWin-div" style={{ width: w, height: h }}>
      <p className="title">{title}</p>
      <div className="addToothWin-content">
        <section className="top-right">
          <div onClick={()=>onToothClick({number:1,vertical:"top",horizontal:"right"})} className={(number ==1 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>1</div>
          <div onClick={()=>onToothClick({number:2,vertical:"top",horizontal:"right"})} className={(number ==2 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>2</div>
          <div onClick={()=>onToothClick({number:3,vertical:"top",horizontal:"right"})} className={(number ==3 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>3</div>
          <div onClick={()=>onToothClick({number:4,vertical:"top",horizontal:"right"})} className={(number ==4 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>4</div>
          <div onClick={()=>onToothClick({number:5,vertical:"top",horizontal:"right"})} className={(number ==5 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>5</div>
          <div onClick={()=>onToothClick({number:6,vertical:"top",horizontal:"right"})} className={(number ==6 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>6</div>
          <div onClick={()=>onToothClick({number:7,vertical:"top",horizontal:"right"})} className={(number ==7 && vertical =="top" && horizontal =="right")? "selectedTooth":"one-tooth"}>7</div>
        </section>
        <section className="top-left">
          <div onClick={()=>onToothClick({number:1,vertical:"top",horizontal:"left"})} className={(number ==1 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>1</div>
          <div onClick={()=>onToothClick({number:2,vertical:"top",horizontal:"left"})} className={(number ==2 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>2</div>
          <div onClick={()=>onToothClick({number:3,vertical:"top",horizontal:"left"})} className={(number ==3 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>3</div>
          <div onClick={()=>onToothClick({number:4,vertical:"top",horizontal:"left"})} className={(number ==4 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>4</div>
          <div onClick={()=>onToothClick({number:5,vertical:"top",horizontal:"left"})} className={(number ==5 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>5</div>
          <div onClick={()=>onToothClick({number:6,vertical:"top",horizontal:"left"})} className={(number ==6 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>6</div>
          <div onClick={()=>onToothClick({number:7,vertical:"top",horizontal:"left"})} className={(number ==7 && vertical =="top" && horizontal =="left")? "selectedTooth":"one-tooth"}>7</div>
        </section>
        <section className="bottom-right">
          <div onClick={()=>onToothClick({number:1,vertical:"bottom",horizontal:"right"})} className={(number ==1 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>1</div>
          <div onClick={()=>onToothClick({number:2,vertical:"bottom",horizontal:"right"})} className={(number ==2 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>2</div>
          <div onClick={()=>onToothClick({number:3,vertical:"bottom",horizontal:"right"})}  className={(number ==3 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>3</div>
          <div onClick={()=>onToothClick({number:4,vertical:"bottom",horizontal:"right"})} className={(number ==4 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>4</div>
          <div onClick={()=>onToothClick({number:5,vertical:"bottom",horizontal:"right"})} className={(number ==5 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>5</div>
          <div onClick={()=>onToothClick({number:6,vertical:"bottom",horizontal:"right"})} className={(number ==6 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>6</div>
          <div onClick={()=>onToothClick({number:7,vertical:"bottom",horizontal:"right"})} className={(number ==7 && vertical =="bottom" && horizontal =="right")? "selectedTooth":"one-tooth"}>7</div>
        </section>
        <section className="bottom-left">
          <div onClick={()=>onToothClick({number:1,vertical:"bottom",horizontal:"left"})} className={(number ==1 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>1</div>
          <div  onClick={()=>onToothClick({number:2,vertical:"bottom",horizontal:"left"})}  className={(number ==2 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>2</div>
          <div  onClick={()=>onToothClick({number:3,vertical:"bottom",horizontal:"left"})}  className={(number ==3 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>3</div>
          <div onClick={()=>onToothClick({number:4,vertical:"bottom",horizontal:"left"})}  className={(number ==4 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>4</div>
          <div onClick={()=>onToothClick({number:5,vertical:"bottom",horizontal:"left"})}  className={(number ==5 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>5</div>
          <div  onClick={()=>onToothClick({number:6,vertical:"bottom",horizontal:"left"})} className={(number ==6 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>6</div>
          <div  onClick={()=>onToothClick({number:7,vertical:"bottom",horizontal:"left"})} className={(number ==7 && vertical =="bottom" && horizontal =="left")? "selectedTooth":"one-tooth"}>7</div>
        </section>
      </div>
    </div>
  );
}
