import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../styles/About.module.scss';
import Image from 'next/image';

import { useNonInitialEffect } from '../../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const About = ({ isTransitioning }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();
  const fourthAnimRef = useRef();
  const firstCursorRef = useRef();
  const secondCursorRef = useRef();
  const thirdCursorRef = useRef();

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(firstAnimRef.current, { duration: 0.5, text: 'Web Developer' })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, {
        duration: 0.75,
        text: `Self-taught && self-teaching `,
      })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(thirdAnimRef.current, {
        duration: 5,
        text: `
        Some technologies that I use: <br /> <br />
        The Front-End Fundamentals: <br /> 
        HTML / CSS / Javascript <br /> <br />
        The Frameworks: <br />
        React / NextJS <br /> <br />
        The Back-End: <br />
        NodeJS / Express / Mongoose / MongoDB / Firebase <br /> <br />
        ...and still learning!
        `,
      })
      .to(
        fourthAnimRef.current,
        {
          duration: 1,
          y: 0,
        },
        '1.5'
      );
  }, []);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL
      .to(fourthAnimRef.current, {
        duration: 0.5,
        y: 1000,
      })
      .to(thirdAnimRef.current, { duration: 0.25, text: ` ` }, 0)
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondAnimRef.current, { duration: 0.25, text: ` ` }, 0)
      .to(firstAnimRef.current, { duration: 0.25, text: ' ' }, 0);
  }, [isTransitioning]);
  return (
    <>
      <Head>
        <title>About Me - Alan Tran</title>
      </Head>
      <main className={styles.container}>
        <header>
          <h1>
            <span ref={firstAnimRef}></span>
            <span ref={firstCursorRef} className={styles.cursor}>
              _
            </span>
          </h1>
          <h3>
            <span ref={secondAnimRef}></span>
            <span ref={secondCursorRef} className={styles.cursor}>
              _
            </span>
          </h3>
        </header>

        <section className={styles.left}>
          <p>
            <span ref={thirdAnimRef}></span>
            <span ref={thirdCursorRef} className={styles.cursor}>
              _
            </span>
          </p>
        </section>
        <figure className={styles.right} ref={fourthAnimRef}>
          <aside className={styles.background} />
          <aside className={styles.portrait}>
            <Image
              src='/portrait.png'
              alt='Portrait of me'
              width={291}
              height={426}
              priority
              className={styles.img}
            />
          </aside>
        </figure>
      </main>
    </>
  );
};

export default About;
