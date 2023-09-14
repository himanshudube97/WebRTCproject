import {useState} from 'react'
import { Card } from '../../../../components/shared/Card/Card'
import { Button } from '../../../../components/shared/Button/Button'
import { TextInput } from '../../../../components/shared/TextInput/TextInput'
import styles from "../StepPhoneEmail.module.css";
export const Email = ({onNext}:any) => {
    const [email, setEmail] = useState("");
  return (
    <>
    <Card title="Enter Your Email" icon="logo">
    <TextInput
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
       <div className={styles.actionButtonWrap}>
          <Button text="Next!" onClick={onNext}></Button>
          By Entering your email, you're agreeing to our Terms of Service and Privacy Policy. Thanks!

        </div>
      </Card>
    </>
  ) 
}
