import "./addToothWin.css";

export default function AddToothWin({ w, h, title }) {
  return (
    <div className="addToothWin-div" style={{ width: w, height: h }}>
      <p className="title">{title}</p>
      <div className="addToothWin-content">
        <section className="top-right">
          <div className="one-tooth">1</div>
          <div className="one-tooth">2</div>
          <div className="one-tooth">3</div>
          <div className="one-tooth">4</div>
          <div className="one-tooth">5</div>
          <div className="one-tooth">6</div>
          <div className="one-tooth">7</div>
        </section>
        <section className="top-left">
          <div className="one-tooth">1</div>
          <div className="one-tooth">2</div>
          <div className="one-tooth">3</div>
          <div className="one-tooth">4</div>
          <div className="one-tooth">5</div>
          <div className="one-tooth">6</div>
          <div className="one-tooth">7</div>
        </section>
        <section className="bottom-right">
          <div className="one-tooth">1</div>
          <div className="one-tooth">2</div>
          <div className="one-tooth">3</div>
          <div className="one-tooth">4</div>
          <div className="one-tooth">5</div>
          <div className="one-tooth">6</div>
          <div className="one-tooth">7</div>
        </section>
        <section className="bottom-left">
          <div className="one-tooth">1</div>
          <div className="one-tooth">2</div>
          <div className="one-tooth">3</div>
          <div className="one-tooth">4</div>
          <div className="one-tooth">5</div>
          <div className="one-tooth">6</div>
          <div className="one-tooth">7</div>
        </section>
      </div>
    </div>
  );
}
