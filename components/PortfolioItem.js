import React, { useRef } from 'react';
import styles from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const PortfolioItem = ({ name, date, description, src, url, github }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();
  const fourthAnimRef = useRef();

  const masterTL = gsap.timeline();
  return (
    <div
      className={styles.box}
      onMouseEnter={() => {
        masterTL
          .restart()
          .to(firstAnimRef.current, {
            duration: 0.2,
            text: name,
          })
          .to(secondAnimRef.current, {
            duration: 0.2,
            text: 'Github Repo',
          })
          .to(thirdAnimRef.current, {
            duration: 0.2,
            text: date,
          })
          .to(fourthAnimRef.current, {
            duration: 0.5,

            text: description,
          });
      }}
      onMouseLeave={() => {
        masterTL.kill();
      }}
    >
      <Image src={src} layout='fill' objectFit='cover' />
      <main className={styles.main}>
        <h4>
          <a href={url} target='_blank' ref={firstAnimRef}></a>
        </h4>
        {github && 
        <h5>
          <a href={github} target='_blank' ref={secondAnimRef}></a>
        </h5>
        }
        <small className={styles.rightAlign} ref={thirdAnimRef}></small>

        <p ref={fourthAnimRef}></p>
      </main>
    </div>
  );
};

export default PortfolioItem;
