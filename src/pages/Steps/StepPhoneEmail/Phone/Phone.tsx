import { useState, useEffect } from "react";
import { Card } from "../../../../components/shared/Card/Card";
import { Button } from "../../../../components/shared/Button/Button";
import { TextInput } from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";
import { sendOtp } from "../../../../http-service";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/authSlice";

export const Phone = ({ onNext }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async () => {
    //server request
    const { data } = await sendOtp({ phone: `+91${phoneNumber}` });
    console.log(data, "res");
    //after receiving the data from api, we are storing it to our global state.
    dispatch(setOtp({ phone: data.phone, hash: data.hash }));
    onNext();
  };
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
          <Button text="Next!" onClick={onSubmit}></Button>
        </div>
        <p className={styles.bottomParagraph}>
          By Entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </Card>
    </>
  );
};
