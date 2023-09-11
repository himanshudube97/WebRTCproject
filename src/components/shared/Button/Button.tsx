import React from 'react';
import styles from './Button.module.css';
interface Props {
    text: string,
    onClick:  (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ text, onClick }:Props) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img src="/images/arrow.png" width={50} alt="image" />

        </button>
    );
};
