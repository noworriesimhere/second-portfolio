import Head from 'next/head';
import React,{ useRef, useEffect } from 'react';
import styles from '../styles/Resume.module.scss';
import Button from '../components/Button';

import { spanify } from '../utils/utilFunctions';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);


const Resume = ({ isTransitioning }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();

  const firstCursorRef = useRef();


  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
    .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
    .to(firstAnimRef.current, {
      duration: 0.5,
      text: spanify('Resume'),
    })
    .fromTo(secondAnimRef.current, 
      {
        y:200,
        opacity: 0
      },
      { 
        y: 0,
        opacity: 1,
        duration: .5, 
         })
    .fromTo(thirdAnimRef.current, 
      {
        y:200,
        opacity: 0
      },
      { 
        y: 0,
        opacity: 1,
        duration: .5, 
         })
  }, [])
  
  useNonInitialEffect(() => {
    masterTL
      .to(thirdAnimRef.current, { duration: .5, y:200, opacity: 0 })
      .to(secondAnimRef.current, { duration: 0.5, y:200, opacity: 0 }, 0.25)
      .to(firstAnimRef.current, { duration: 0.5, text: ' ' }, 0.25);
  }, [isTransitioning]);

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <main className={styles.container}>
        <h1>
        <span ref={firstAnimRef}></span>
            <span ref={firstCursorRef} className={styles.cursor}>
              _
            </span>
        </h1>
        <embed ref={secondAnimRef} src='resume.pdf' type='application/pdf' className={styles.pdf} />
        <form ref={thirdAnimRef} className={styles.form} action="get" action="resume.pdf" target="_blank">
          <Button>Download Resume</Button>
        </form>
      </main>
    </>
  );
};

export default Resume;
