import React, { useState } from "react";
import "./App.css";
import ButtonComponent from "./ButtonComponent.js";
import Header from "./Header.js";
import ProgressComponent from "./ProgressComponent.js";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";
import Screen3 from "./screens/Screen3";
import Screen4 from "./screens/Screen4";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <Header />
      <ProgressComponent activeStep={step} />
      {step === 0 ? (
        <Screen1 />
      ) : step === 1 ? (
        <Screen2 />
      ) : step === 2 ? (
        <Screen3 />
      ) : (
        <Screen4 />
      )}
      <ButtonComponent step={step} stepChanger={setStep} />
    </div>
  );
}

export default App;
