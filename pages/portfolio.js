import Head from 'next/head';
import React, { useRef, useEffect, createRef } from 'react';
import styles from '../styles/Portfolio.module.scss';

import PortfolioItem from '../components/PortfolioItem';
import { projects } from '../utils/data';
import { spanify } from '../utils/utilFunctions';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Portfolio = ({ isTransitioning }) => {
  const firstAnimRef = useRef();

  const firstCursorRef = useRef();

  let portRefs = [];

  const masterTL = gsap.timeline();

  useEffect(() => {
    masterTL
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'visible' })
      .to(firstAnimRef.current, {
        duration: 0.5,
        text: spanify('Past Projects'),
      });
    portRefs.forEach((item) => {
      masterTL.from(item.current, {
        duration: 0.3,
        y: 100,
        opacity: 0,
      });
    });
  }, []);

  // will fire when page needs to transition
  useNonInitialEffect(() => {
    portRefs.forEach((item) => {
      masterTL.to(item.current, {
        duration: 0.2,
        y: 100,
        opacity: 0,
      });
    });
    masterTL
      .to(firstAnimRef.current, { duration: 1, text: ' ' })
      .to(firstCursorRef.current, { duration: 0.1, visibility: 'invisible' });
  }, [isTransitioning]);

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
          {projects.map((project) => {
            const newRef = createRef();
            portRefs.push(newRef);
            return (
              <div ref={newRef} key={project.key}>
                <PortfolioItem
                  name={project.name}
                  date={project.date}
                  description={project.description}
                  src={project.src}
                  url={project.url}
                  github={project.github}
                />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Portfolio;
