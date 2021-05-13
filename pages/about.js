import React, { useRef, useEffect, createRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

import HoverLink from '../components/HoverLink';

import { technologies } from '../utils/data';
import { spanify } from '../utils/utilFunctions';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { useResizeDetector } from 'react-resize-detector';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const About = ({ isTransitioning }) => {
  const [currentTech, setCurrentTech] = useState(true);
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();
  const fourthAnimRef = useRef();

  const firstCursorRef = useRef();
  const secondCursorRef = useRef();
  const thirdCursorRef = useRef();

  let techsAnimRefs = [];

  const masterTL = gsap.timeline();

  const { width, ref } = useResizeDetector();

  useEffect(() => {
    if (width > 1180) {
      setTitle('Self Teaching Developer');
      setSubTitle('My skills and how I learned them');
    } else {
      setTitle('Web Developer');
      setSubTitle('Tap below to learn more');
    }
  }, [width]);

  useNonInitialEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(firstAnimRef.current, {
        duration: 0.5,
        text: spanify(title),
      })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(secondAnimRef.current, {
        duration: 0.75,
        text: spanify(subtitle),
      })
      .to(secondCursorRef.current, { duration: 0.1, visibility: 'hidden' })
      .to(thirdCursorRef.current, { duration: 0.1, visibility: 'visible' })

    techsAnimRefs.forEach((tech, i) => {
      masterTL
      .to(tech.current, {
        duration: 0.25,
        text: technologies[i].name,
      })
      ;
    });
    if (width < 620) {
    masterTL
    .fromTo(
      fourthAnimRef.current,
      { y: 500 },
      {
        duration: 0.75,
        y: 325,
      },
    )}
  }, [title, subtitle]);

  useNonInitialEffect(() => {
    if (!currentTech) {
      if (width < 620) {
        masterTL
        .fromTo(
          fourthAnimRef.current,
          { y: 500 },
          {
            duration: 0.75,
            y: 325,
          },
        )
      } else {
        masterTL
        .fromTo(
          fourthAnimRef.current,
          { y: 500 },
          {
            duration: 0.75,
            y: 0,
          },
          .5
        )
      }

      masterTL
        .to(
          thirdAnimRef.current,
          {
            duration: 0.75,
            text: ' ',
          },
          0
        );
    } else {
      masterTL
        .to(
          fourthAnimRef.current,
          {
            duration: 0.75,
            y: 500,
          },
          .5
        )
        .to(
          thirdAnimRef.current,
          {
            duration: 0.75,
            text: technologies.find((tech) => tech.name.includes(currentTech))
              .description,
          },
          0
        );
    }
  }, [currentTech]);

  // will fire when page needs to transition
  useEffect(() => {
    masterTL
      .to(
        fourthAnimRef.current,
        {
          duration: 0.5,
          y: 1000,
        },
        0
      )
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
      <main className={styles.container} ref={ref}>
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
            {technologies.map((tech, i) => {
              const newRef = createRef();
              techsAnimRefs.push(newRef);
              return (
                <HoverLink key={i}>
                  <a
                    ref={newRef}
                    onMouseEnter={(e) => {
                      setCurrentTech(e.target.innerHTML);
                    }}
                    onMouseLeave={() => {
                      setCurrentTech(undefined);
                    }}
                  />
                </HoverLink>
              );
            })}
            <span ref={thirdCursorRef} className={styles.cursor}>
              _
            </span>
          </div>
        </section>

        <section className={styles.right}>
          <span>
            <h5 ref={thirdAnimRef}></h5>
          </span>
          <div ref={fourthAnimRef}>
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
            <p>Available to work!</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
