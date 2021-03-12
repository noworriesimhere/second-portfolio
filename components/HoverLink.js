import React from 'react';
import styles from '../styles/HoverLink.module.scss';

const HoverLink = ({ children }) => {
  return (
    <div>
      <span className={styles.bounceMe}>{children}</span>
    </div>
  );
};

export default HoverLink;
