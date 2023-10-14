import { useState, useEffect } from "react";
import { StepName } from "../Steps/StepName/StepName";
import { StepAvatar } from "../Steps/StepAvatar/StepAvatar";

const steps: { [key: string]: (props: { onNext: () => void }) => JSX.Element } =
  {
    1: StepName,
    2: StepAvatar,
  };
export const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div>Activate</div>
      <Step onNext={onNext} />
    </>
  );
};
