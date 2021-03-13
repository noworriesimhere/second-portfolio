import React from 'react';
import styles from '../styles/Button.module.scss';

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
