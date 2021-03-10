import React, { useRef, useEffect, createRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

import HoverLink from '../components/HoverLink';

import { technologies } from '../utils/data';
import { spanify } from '../utils/utilFunctions';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

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

  let techsAnimRefs = [];

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
      .restart()
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(firstAnimRef.current, {
        duration: 0.5,
        text: spanify('Web Developer'),
      })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, {
        duration: 0.75,
        text: spanify(`Self-taught && self-teaching `),
      })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(thirdAnimRef.current, {
        duration: 1,
        text: `My stories with the tech I know (Hover over to learn more!)
        <br /> <br />`,
      })
      .to(
        fourthAnimRef.current,
        {
          duration: 1,
          y: 0,
        },
        '1.5'
      );
    techsAnimRefs.forEach((tech, i) => {
      masterTL.to(tech.current, {
        duration: 0.25,
        text: technologies[i].name,
      });
    });
  }, []);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    masterTL
      .to(
        fourthAnimRef.current,
        {
          duration: 0.5,
          y: 1000,
        },
        0
      )
      .to(thirdAnimRef.current, { duration: 0.25, text: ` ` }, 0)
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondAnimRef.current, { duration: 0.25, text: ` ` }, 0)
      .to(firstAnimRef.current, { duration: 0.25, text: ' ' }, 0);
    techsAnimRefs.forEach((tech) => {
      masterTL.to(
        tech.current,
        {
          duration: 0.25,
          text: ' ',
        },
        0
      );
    });
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
          <div>
            <span ref={thirdAnimRef}></span>
            {technologies.map((tech, i) => {
              const newRef = createRef();
              techsAnimRefs.push(newRef);
              return (
                <HoverLink key={i}>
                  <a ref={newRef} />
                </HoverLink>
              );
            })}
            <span ref={thirdCursorRef} className={styles.cursor}>
              _
            </span>
          </div>
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
