import { useState, useEffect } from "react";
import { Card } from "../../../../components/shared/Card/Card";
import { Button } from "../../../../components/shared/Button/Button";
import { TextInput } from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
export const Phone = ({ onNext }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Card title="Enter Your Phone Number" icon="logo">
        <TextInput
          value={phoneNumber}
          onChange={(e: any) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <div className={styles.actionButtonWrap}>
          <Button text="Next!" onClick={onNext}></Button>
        </div>
        <p className={styles.bottomParagraph}>
            By Entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
        </p>
      </Card>
    </>
  );
};
