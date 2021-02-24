import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { shuffledArray } from '../utils/data';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

export default function Home() {
  const [message, setMessage] = useState('write code');
  const [counter, setCounter] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const messageRef = useRef();
  const firstCursorRef = useRef();
  const secondCursorRef = useRef();
  const buttonRef = useRef();

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL.to(secondCursorRef.current, {
      duration: 0.75,
      visibility: 'hidden',
    });
    masterTL.to(firstAnimRef.current, { duration: 1, text: 'Hello there!' });
    masterTL.to(firstCursorRef.current, {
      duration: 0.1,
      visibility: 'hidden',
    });
    masterTL.to(secondCursorRef.current, {
      duration: 0.1,
      visibility: 'visible',
    });
    masterTL.to(secondAnimRef.current, {
      duration: 1,
      text: `I'm Alan, and I `,
    });
    masterTL.to(messageRef.current, { duration: 1, text: `${message}` });
    masterTL.to(
      buttonRef.current,
      {
        duration: 1,
        y: 0,
      },
      '-=1.5'
    );
  }, []);

  // fires when button is clicked
  useNonInitialEffect(() => {
    masterTL.to(messageRef.current, {
      duration: 0.5,
      text: ``,
    });
    masterTL.to(messageRef.current, { duration: 1, text: `${message}` });
  }, [message]);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL.to(messageRef.current, { duration: 0.25, text: ` ` });
    masterTL.to(secondAnimRef.current, { duration: 0.25, text: ` ` });
    masterTL.to(firstAnimRef.current, { duration: 0.25, text: ' ' }, '-=.1');
    masterTL.to(firstCursorRef.current, {
      duration: 0.1,
      visibility: 'hidden',
    });
    masterTL.to(secondCursorRef.current, {
      duration: 0.1,
      visibility: 'hidden',
    });
    masterTL.to(
      buttonRef.current,
      {
        duration: 1,
        y: 200,
      },
      '-=.5'
    );
  }, [isTrue]);

  const changeText = () => {
    setMessage(shuffledArray[counter]);
    if (counter < shuffledArray.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio - Alan Tran</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.hero}>
          <span ref={firstAnimRef}></span>
          <span ref={firstCursorRef} className={styles.cursor}>
            _
          </span>
        </h1>
        <h3>
          <span ref={secondAnimRef}></span>
          <span ref={messageRef}></span>
          <span ref={secondCursorRef} className={styles.cursor}>
            _
          </span>
        </h3>
        <button
          ref={buttonRef}
          className={styles.btn}
          onClick={() => {
            changeText();
          }}
        >
          And what else?
        </button>
      </div>
    </>
  );
}
