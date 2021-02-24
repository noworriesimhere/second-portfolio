import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useResizeDetector } from 'react-resize-detector';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Layout = ({ children, activePage: { name } }) => {
  const [offsetTop, setOffsetTop] = useState(0);
  const [homeOffset, setHomeOffset] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const masterTL = gsap.timeline();
  const navRef = useRef();
  const homeRef = useRef();
  const highlightRef = useRef();

  const { ref, width, height } = useResizeDetector();

  const router = useRouter();

  useEffect(() => {
    masterTL.to(navRef.current, { duration: 1, x: 0 }, 1);
    setHomeOffset(homeRef.current.offsetTop);
    setOffsetTop(homeOffset);
  }, [homeOffset, width, height]);

  useEffect(() => {
    let menuHeight = homeRef.current.clientHeight;
    switch (name) {
      case 'Home':
        trigger && setOffsetTop(homeOffset);
        break;
      case 'About':
        trigger && setOffsetTop(homeOffset + menuHeight);
        break;
      case 'Portfolio':
        trigger && setOffsetTop(homeOffset + menuHeight * 2);
        break;
      case 'Contact':
        trigger && setOffsetTop(homeOffset + menuHeight * 3);
        break;
    }
  }, [homeRef.current, name, trigger]);

  useEffect(() => {
    gsap.to(highlightRef.current, { duration: 0.5, y: offsetTop });
  }, [offsetTop]);

  return (
    <>
      <div className={styles.container} ref={ref}>
        <nav className={styles.nav} ref={navRef}>
          <ul>
            <div className={styles.highlight} ref={highlightRef} />
            <Link href='/'>
              <li
                onMouseEnter={({ target: { offsetTop } }) => {
                  setOffsetTop(offsetTop);
                  setTrigger(false);
                  console.log(offsetTop);
                }}
                onMouseLeave={(e) => {
                  setTrigger(true);
                }}
                ref={homeRef}
              >
                Alan Tran
              </li>
            </Link>
            <Link href='/about'>
              <li
                onMouseEnter={({ target: { offsetTop } }) => {
                  setOffsetTop(offsetTop);
                  setTrigger(false);
                }}
                onMouseLeave={(e) => {
                  setTrigger(true);
                }}
              >
                About Me
              </li>
            </Link>
            <Link href='/portfolio'>
              <li
                onMouseEnter={({ target: { offsetTop } }) => {
                  setOffsetTop(offsetTop);
                  setTrigger(false);
                }}
                onMouseLeave={(e) => {
                  setTrigger(true);
                }}
              >
                Portfolio
              </li>
            </Link>
            <Link href='/contact'>
              <li
                onMouseEnter={({ target: { offsetTop } }) => {
                  setOffsetTop(offsetTop);
                  setTrigger(false);
                }}
                onMouseLeave={(e) => {
                  setTrigger(true);
                }}
              >
                Contact
              </li>
            </Link>
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
