import { useState } from "react";
import { Phone } from "./Phone/Phone";
import { Email } from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";
const phoneEmailStep: { [key: string]: (props: { onNext: () => void }) => JSX.Element } = {
  phone: Phone,
  email: Email,
};
export const StepPhoneEmail = ({ onNext }: any) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailStep[type];

  return (
    <>
    <div className={styles.cardWrapper}>
        <div>
            <div className={styles.buttonWrap}>
                <button
                    className={`${styles.tabButton} ${
                        type === 'phone' ? styles.active : ''
                    }`}
                    onClick={() => setType('phone')}
                >
                    <img src="/images/phone-white.png" alt="phone" />
                </button>
                <button
                    className={`${styles.tabButton} ${
                        type === 'email' ? styles.active : ''
                    }`}
                    onClick={() => setType('email')}
                >
                    <img src="/images/mail-white.png" alt="email" />
                </button>
            </div>
            <Component onNext={onNext} />
        </div>
    </div>
</>
  );
};
