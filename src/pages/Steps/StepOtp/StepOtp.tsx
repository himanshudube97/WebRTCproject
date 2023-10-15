import { useState } from "react";
import { Card } from "../../../components/shared/Card/Card";
import { TextInput } from "../../../components/shared/TextInput/TextInput";
import { Button } from "../../../components/shared/Button/Button";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http-service";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../store/authSlice";

export const StepOtp = ({ onNext }: any) => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  //useSelector is used to get the data from the global state.
  const { phone, hash } = useSelector((state: any) => state.auth.otp);
  const onSubmit = async () => {
    try {
      const { data } = await verifyOtp({ otp, phone: phone, hash: hash });
      console.log(data, "data");

   
      dispatch(setAuth(data));

    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock-emoji">
          <TextInput
            value={otp}
            onChange={(e: any) => setOtp(e.target.value)}
          />
          <div className={styles.actionButtonWrap}>
            <Button
              onClick={() => {
                onSubmit();
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
