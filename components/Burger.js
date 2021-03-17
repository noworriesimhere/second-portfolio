import React from 'react';
import styles from '../styles/Burger.module.scss';

const Burger = ({ setHamburger, hamburger }) => {
  return (
    <button
      className={styles.styledBurger}
      onClick={() => {
        setHamburger(!hamburger);
      }}
    >
      <div className={`${hamburger ? styles.opened : styles.closed}`} />
      <div className={`${hamburger ? styles.opened : styles.closed}`} />
      <div className={`${hamburger ? styles.opened : styles.closed}`} />
    </button>
  );
};

export default Burger;
