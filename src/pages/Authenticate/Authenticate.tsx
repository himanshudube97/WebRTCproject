import { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { StepPhoneEmail } from "../Steps/StepPhoneEmail/StepPhoneEmail";
import { StepOtp } from "../Steps/StepOtp/StepOtp";
const steps: { [key: number]: (props: { onNext: () => void }) => JSX.Element } =
  {
    1: StepPhoneEmail,
    2: StepOtp,
  };

export const Authenticate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div>Authenticate</div>
      <Step onNext={onNext} />
    </>
  );
};
