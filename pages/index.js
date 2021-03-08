import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

import { shuffledArray } from '../utils/data';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

export default function Home({ isTransitioning }) {
  const [message, setMessage] = useState('write code');
  const [counter, setCounter] = useState(0);

  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const messageRef = useRef();
  const firstCursorRef = useRef();
  const secondCursorRef = useRef();
  const buttonRef = useRef();

  let masterTL = gsap.timeline();

  const spanify = (string) => {
    let finalString = '';
    [...string].forEach((letter) => {
      if (letter === ' ') {
        finalString += `<span>${letter}</span>`;
      } else {
        finalString += `<span class='raiseMe'>${letter}</span>`;
      }
    });
    return finalString;
  };

  useEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.2, visibility: 'visible' })
      .to(firstAnimRef.current, {
        duration: 0.5,
        text: 'Hello there!',
        onComplete: () => {
          firstAnimRef.current.innerHTML = spanify(
            firstAnimRef.current.innerHTML
          );
        },
      })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, { duration: 0.5, text: `I'm Alan, and I ` })
      .to(messageRef.current, { duration: 0.5, text: `${message}` })
      .to(buttonRef.current, { duration: 1, y: 0 }, '-=1.5');
  }, []);

  // fires when button is clicked
  useNonInitialEffect(() => {
    masterTL
      .to(messageRef.current, {
        duration: 0.25,
        text: ``,
      })
      .to(messageRef.current, { duration: 0.75, text: `${message}` });
  }, [message]);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL
      .to(messageRef.current, { duration: 0.25, text: ` ` })
      .to(secondAnimRef.current, { duration: 0.25, text: ` ` })
      .to(firstAnimRef.current, { duration: 0.25, text: ' ' }, '-=.1')
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(buttonRef.current, { duration: 1, y: 200 }, '-=.5');
  }, [isTransitioning]);

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
        <header>
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
        </header>
        <button
          ref={buttonRef}
          className={styles.btn}
          onClick={() => {
            changeText();
          }}
        >
          and what else?
        </button>
      </div>
    </>
  );
}
