import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/About.module.scss';
import Image from 'next/image';

import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const About = ({ isTransitioning }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();
  const firstCursorRef = useRef();
  const secondCursorRef = useRef();
  const thirdCursorRef = useRef();

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.2, visibility: 'visible' })
      .to(firstAnimRef.current, { duration: 0.5, text: 'Web Dev' })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, {
        duration: 0.75,
        text: `Based in NYC`,
      })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(thirdAnimRef.current, {
        duration: 1,
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
      tempora, doloribus veritatis error animi qui dolores repellat,
      possimus dicta nisi, odit ipsa pariatur at vitae.`,
      });
  }, []);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL
      .to(thirdAnimRef.current, { duration: 0.25, text: ` ` })
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondAnimRef.current, { duration: 0.25, text: ` ` }, '-=.1')
      .to(firstAnimRef.current, { duration: 0.25, text: ' ' }, '-=.1');
  }, [isTransitioning]);
  return (
    <>
      <Head>
        <title>About Me - Alan Tran</title>
      </Head>
      <main className={styles.container}>
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
        <section className={styles.grid}>
          <article className={styles.left}>
            <p>
              <span ref={thirdAnimRef}></span>
              <span ref={thirdCursorRef} className={styles.cursor}>
                _
              </span>
            </p>
          </article>
          <figure className={styles.right}>
            <Image
              src='/portrait.png'
              alt='Portrait of me'
              width={433}
              height={577}
            />
          </figure>
        </section>
      </main>
    </>
  );
};

export default About;
