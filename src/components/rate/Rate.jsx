import "./Rate.css";
import logo from "/images/icon-star.svg";

function Rate() {
    let buttons = [1,2,3,4,5]
  return (
    <div className="rate-container">
      <img src={logo}/>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn-container">
       {buttons.map((button) => <button className="rate-btn">{button}</button>)}
      </div>
      <button className="submit">SUBMIT</button>
      
    </div>
  );
}

export default Rate;
