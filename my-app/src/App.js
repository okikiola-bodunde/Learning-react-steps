import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            {" "}
            Step {step} :{messages[step - 1]}{" "}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => handlePrevious()}
            >
              previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// export default function App(){
//   return (
//     <div>
//     <counter/>
//     </div>
//   )
// }

// function Counter(){
//   const [count, setCount] = useState(0);
//   const {step, setStep} = useState(1);

//   const date = new Date();
//   date.setDate(date.getDate() + count)

//   return(
//     <div>
//       <div>
//         <button onClick = {() => setCount(c => c - 1)
//         }>-</button>
//         <span>Count : {count}</span>
//           <button onClick = {() => setCount(c => c + 1)
//         }>+</button>
//       </div>

//       <div>
//         <button onClick = {() => setStep(s => s - step)
//         }>-</button>
//         <span>Step : {step}</span>
//           <button onClick = {() => setStep(s => s + step)
//         }>+</button>
//       </div>

//       <p>
//         <span>{count === 0 ? "Today is" : count < 0 ? `${Math.abs(count)} days ago` : `${count} days from now`}</span>
//         {date.toDateString()}
//       </p>
//     </div>
//   )
// }
