import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import ContactForm from '../components/ContactForm';

import styles from '../styles/Contact.module.scss';

import { spanify } from '../utils/utilFunctions';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Contact = ({ isTransitioning }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();

  const firstCursorRef = useRef();
  const secondCursorRef = useRef();

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(firstAnimRef.current, {
        duration: 0.5,
        text: spanify(`Let's talk!`),
      })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, {
        duration: 0.5,
        text:
          `<a href='tel:6467255620'>Call me</a>, <a href='mailto: contact@alantran.tech'>email me</a>` +
          spanify(`, or please fill out below`),
      })
      .from(thirdAnimRef.current, { duration: 0.5, opacity: 0, y: 300 }, 0.5);
  }, []);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL
      .to(
        thirdAnimRef.current,
        {
          duration: 0.5,
          y: 1000,
        },
        0
      )
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondAnimRef.current, { duration: 0.25, text: ` ` }, 0)
      .to(firstAnimRef.current, { duration: 0.25, text: ' ' }, 0);
  }, [isTransitioning]);

  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className={styles.container}>
        <h1>
          <span ref={firstAnimRef}></span>
          <span ref={firstCursorRef} className={styles.cursor}>
            _
          </span>
        </h1>
        <main ref={thirdAnimRef} className={styles.main}>
          <h4>
            <span ref={secondAnimRef}></span>
            <span ref={secondCursorRef} className={styles.cursor}>
              _
            </span>
          </h4>
          <ContactForm />
        </main>
      </div>
    </>
  );
};

export default Contact;
