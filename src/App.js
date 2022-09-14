import React, { useState } from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent.js";
import Header from "./Header.js";
import ProgressComponent from "./ProgressComponent.js";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <Header />
      <ProgressComponent activeStep={step} />
      <ButtonComponent step={step} stepChanger={setStep} />
    </div>
  );
}

export default App;
