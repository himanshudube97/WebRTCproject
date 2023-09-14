import {useState} from 'react';
import styles from "./TextInput.module.css";
export const TextInput = (props:any) => {
  return (
   <>
   <div>
    <input className={styles.input} type='text' {...props} />

   </div>
   </>
  )
}
