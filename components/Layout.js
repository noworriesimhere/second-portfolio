import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useResizeDetector } from 'react-resize-detector';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Layout = ({ children, setIsTransitioning }) => {
  const [offsetTop, setOffsetTop] = useState(0);
  const [homeOffset, setHomeOffset] = useState(0);
  const [trigger, setTrigger] = useState(false);

  const navRef = useRef();
  const homeRef = useRef();
  const highlightRef = useRef();

  const { ref, width, height } = useResizeDetector();

  const router = useRouter();
  let name = router.pathname;

  useEffect(() => {
    setHomeOffset(homeRef.current.offsetTop);
    gsap.to(navRef.current, { duration: 1, x: 0 }, 1);
    setTrigger(true);
  }, [width, height]);

  useEffect(() => {
    let menuHeight = homeRef.current.clientHeight;
    switch (name) {
      case '/':
        trigger && setOffsetTop(homeOffset);
        break;
      case '/about':
        trigger && setOffsetTop(homeOffset + menuHeight);
        break;
      case '/portfolio':
        trigger && setOffsetTop(homeOffset + menuHeight * 2);
        break;
      case '/contact':
        trigger && setOffsetTop(homeOffset + menuHeight * 3);
        break;
    }
    console.log(menuHeight);
  }, [homeRef, name, trigger, width, height]);

  useEffect(() => {
    gsap.to(highlightRef.current, { duration: 0.5, y: offsetTop });
  }, [offsetTop]);

  const changePage = (e, destination) => {
    e.preventDefault();
    if (name === destination) return;
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(destination);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <>
      <div className={styles.container} ref={ref}>
        <nav className={styles.nav} ref={navRef}>
          <ul>
            <div className={styles.highlight} ref={highlightRef} />

            <li
              className={name === '/' ? styles.active : ''}
              onMouseEnter={({ target: { offsetTop } }) => {
                setOffsetTop(offsetTop);
                setTrigger(false);
              }}
              onMouseLeave={(e) => {
                setTrigger(true);
              }}
              onClick={(e) => {
                changePage(e, '/');
              }}
              ref={homeRef}
            >
              Alan Tran
            </li>

            <li
              className={name === '/about' ? styles.active : ''}
              onMouseEnter={({ target: { offsetTop } }) => {
                setOffsetTop(offsetTop);
                setTrigger(false);
              }}
              onMouseLeave={(e) => {
                setTrigger(true);
              }}
              onClick={(e) => {
                changePage(e, '/about');
              }}
            >
              About Me
            </li>

            <Link href='/portfolio'>
              <li
                className={name === '/portfolio' ? styles.active : ''}
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
                className={name === '/contact' ? styles.active : ''}
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
