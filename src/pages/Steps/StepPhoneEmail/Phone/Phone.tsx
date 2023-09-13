import React from "react";
import { Card } from "../../../../components/shared/Card/Card";
import { Button } from "../../../../components/shared/Button/Button";

export const Phone = ({ onNext }: any) => {
  return (
    <>
      <Card title="Enter Your Phone Number" icon="logo">
        <div>
          <Button text="Next!" onClick={onNext}></Button>
        </div>
      </Card>
    </>
  );
};
