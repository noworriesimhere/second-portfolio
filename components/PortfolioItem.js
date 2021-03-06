import React, { useRef } from 'react';
import styles from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const PortfolioItem = ({ name, date, description, src, url }) => {
  const firstAnimRef = useRef();
  const secondAnimRef = useRef();
  const thirdAnimRef = useRef();

  const masterTL = gsap.timeline();

  return (
    <div
      className={styles.box}
      onMouseEnter={() => {
        masterTL
          .to(firstAnimRef.current, {
            duration: 0.25,
            text: name,
          })
          .to(secondAnimRef.current, {
            duration: 0.25,
            text: description,
          })
          .to(thirdAnimRef.current, {
            duration: 0.5,
            text: date,
          });
      }}
    >
      <Image src={src} layout='fill' objectFit='cover' />
      <main className={styles.main}>
        <h4>
          <a href={url} target='_blank' ref={firstAnimRef}></a>
        </h4>
        <p ref={secondAnimRef}></p>
        <small ref={thirdAnimRef}></small>
      </main>
    </div>
  );
};

export default PortfolioItem;
