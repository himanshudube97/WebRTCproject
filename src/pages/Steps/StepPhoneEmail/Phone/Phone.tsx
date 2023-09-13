import {useState, useEffect} from "react";
import { Card } from "../../../../components/shared/Card/Card";
import { Button } from "../../../../components/shared/Button/Button";
import { TextInput } from "../../../../components/shared/TextInput/TextInput";

export const Phone = ({ onNext }: any) => {
    const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Card title="Enter Your Phone Number" icon="logo">
        <TextInput value={phoneNumber} onChange={(e:any)=>{setPhoneNumber(e.target.value)}} />
        <div>
          <Button text="Next!" onClick={onNext}></Button>
        </div>
      </Card>
    </>
  );
};
