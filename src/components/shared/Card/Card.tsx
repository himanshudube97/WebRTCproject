import React from 'react';
import styles from './Card.module.css';

interface props {
    title?: string,
    icon?: string,
    children?: any
}

export const Card = ({ title, icon, children }:props) => {
    return (
        
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                {icon && <img src="" alt="logo" />}
                {title && <h1 className={styles.heading}>{title}</h1>}
            </div>
            {children}
        </div>
    );
};

