import { useState } from "react";
import { Card } from "../../../components/shared/Card/Card";
import { Button } from "../../../components/shared/Button/Button";
import styles from "./StepAvatar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import { activate } from "../../../http-service";
import { setAuth } from "../../../store/authSlice";
import Loader from "../../../components/shared/Loader/Loader";
export const StepAvatar = ({ onNext }: any) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state: any) => {
    return state.activateSlice;
  });
  const [image, setImage] = useState("/images/bro.png");
  const [loading, setLoading] = useState(false);

  const onSelectImage = (e: any) => {
    const file = e.target.files[0]; //image is in file format, we need to covert it inot base 64 string and then send.
    const reader = new FileReader(); //inbuilt browser api.
    reader.readAsDataURL(file); //it may take time so we have callback mentioned below.
    reader.onloadend = function () {
      const base64String = reader.result as string;
      setImage(base64String);
      dispatch(setAvatar(base64String));
    };
  };
  const onSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await activate({ name, image });
      console.log(data, "data");
      if (data.auth) {
        dispatch(setAuth(data));
      }
      // setLoading(false);
    } catch (error) {
      console.log(error, "error");
      // setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <Loader message="Activation in progress..." />;
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`Ok! ${name}`} icon="lock-emoji">
          <p className={styles.subheading}>How's this photo?</p>
          <div className={styles.avatarWrapper}>
            <img className={styles.avatarImage} src={image} alt="image" />
          </div>
          <div>
            <input
              onChange={onSelectImage}
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />
            <label className={styles.avatarLabel} htmlFor="avatarInput">
              {" "}
              Choose a different file?{" "}
            </label>
          </div>
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
