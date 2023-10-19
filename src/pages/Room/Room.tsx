import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Room = () => {
  const location = useLocation();
  console.log(location.state, "location");
  
  return <>
  "room"
  </>;
};
