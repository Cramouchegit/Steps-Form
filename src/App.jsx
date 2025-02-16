import { useState } from "react";
import "./App.css";

const stepItems = ["Fullstack Web Developer", "Data Science", "Data Analysis"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    console.log(step);
  };
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    console.log(step);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {stepItems[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              style={{ backgroundColor: "#526D82", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
