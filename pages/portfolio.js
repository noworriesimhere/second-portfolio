import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import styles from '../styles/Portfolio.module.scss';

import PortfolioItem from '../components/PortfolioItem';
import { projects } from '../utils/data';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Portfolio = () => {
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
      .to(firstAnimRef.current, { duration: 0.5, text: 'Past Projects' });
  });

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className={styles.container}>
        <h1>
          <span ref={firstAnimRef}></span>
          <span ref={firstCursorRef} className={styles.cursor}>
            _
          </span>
        </h1>
        <section className={styles.flex}>
          {projects.map((project) => (
            <PortfolioItem
              name={project.name}
              date={project.date}
              description={project.description}
              src={project.src}
              url={project.url}
              key={project.key}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Portfolio;
