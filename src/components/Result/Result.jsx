import "./Result.css";
import illustration from "/images/illustration-thank-you.svg";

function Result({rate}) {
  return (
    <div className="result-container">
      <img src={illustration} />
      <h2>You selected {rate} out of 5 </h2>
      <h1>Thank you!</h1>
      <p className="result-p">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Result;
