import {useState} from 'react';
import styles from "./TextInput.moudle.css";
export const TextInput = (props:any) => {
  return (
   <>
    <input className={styles.input} type='text' {...props} />
   </>
  )
}
