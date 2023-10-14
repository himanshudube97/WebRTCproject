import { useState } from "react";
import { Card } from "../../../components/shared/Card/Card";
import { TextInput } from "../../../components/shared/TextInput/TextInput";
import { Button } from "../../../components/shared/Button/Button";
import styles from "./StepName.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";

export const StepName = ({ onNext }: any) => {
  const {name} = useSelector((state: any) => {
    return state.activateSlice;
  });
  console.log(name, "name");
  const [fullName, setFullName] = useState(name); //taking this value from global state, so that if we went back then the value will not be empty;
  const dispatch = useDispatch();

  const nextStep = () => {
    if (!fullName) return;

    dispatch(setName(fullName));
    onNext();
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="What's your full name?" icon="lock-emoji">
          <TextInput
            value={fullName}
            onChange={(e: any) => setFullName(e.target.value)}
          />
          <div className={styles.actionButtonWrap}>
            <Button
              onClick={() => {
                nextStep();
              }}
              text="Next"
            />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};
