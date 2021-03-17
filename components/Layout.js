import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles/Layout.module.scss';
import { useRouter } from 'next/router';

import { useResizeDetector } from 'react-resize-detector';

import Burger from './Burger';

import { gsap } from 'gsap/dist/gsap';
import { RoughEase } from 'gsap/dist/EasePack';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin, RoughEase);

const Layout = ({ children, setIsTransitioning, isTransitioning }) => {
  const [offsetTop, setOffsetTop] = useState(0);
  const [homeOffset, setHomeOffset] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const navRef = useRef();
  const homeRef = useRef();
  const highlightRef = useRef();

  const { ref, width, height } = useResizeDetector();

  const router = useRouter();
  let name = router.pathname;

  useEffect(() => {
    setHomeOffset(homeRef.current.offsetTop);
    if (width > 620) {
      gsap.to(navRef.current, { duration: 1, x: 0 }, 0.5);
    } else if (hamburger) {
      gsap.to(navRef.current, { duration: 0.25, x: 0 });
    } else {
      gsap.to(navRef.current, { duration: 0.25, x: 620 });
    }
    setTrigger(true);
  }, [width, height, hamburger]);

  useEffect(() => {
    let menuHeight = homeRef.current.clientHeight;
    if (isTransitioning) return; // to set the highlighter over the new menu item
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
  }, [homeRef, name, trigger, width, height]);

  //Moves the red highlight bar to where it needs to hover over
  useEffect(() => {
    gsap.to(highlightRef.current, { duration: 0.5, y: offsetTop });
  }, [offsetTop, width, height]);

  const changePage = (e, destination) => {
    e.preventDefault();
    if (name === destination) return;
    setIsTransitioning(true);
    setTimeout(() => {
      router.push(destination);
      setIsTransitioning(false);
    }, 600);
  };

  const hoverEnter = ({ target: { offsetTop } }) => {
    if (isTransitioning) return;
    setOffsetTop(offsetTop);
    setTrigger(false);
  };

  const hoverExit = () => {
    if (isTransitioning) return;
    setTrigger(true);
  };

  return (
    <>
      <div className={styles.container} ref={ref}>
        <nav className={styles.nav} ref={navRef}>
          <ul>
            <div
              className={styles.highlight}
              ref={highlightRef}
              style={{
                height: homeRef.current && homeRef.current.clientHeight,
              }}
            />

            <li
              className={name === '/' ? styles.active : ''}
              onMouseEnter={(e) => hoverEnter(e)}
              onMouseLeave={() => hoverExit()}
              onClick={(e) => {
                changePage(e, '/');
              }}
              ref={homeRef}
            >
              Home
            </li>

            <li
              className={name === '/about' ? styles.active : ''}
              onMouseEnter={(e) => hoverEnter(e)}
              onMouseLeave={() => hoverExit()}
              onClick={(e) => {
                changePage(e, '/about');
              }}
            >
              About Me
            </li>

            <li
              className={name === '/portfolio' ? styles.active : ''}
              onMouseEnter={(e) => hoverEnter(e)}
              onMouseLeave={() => hoverExit()}
              onClick={(e) => {
                changePage(e, '/portfolio');
              }}
            >
              Portfolio
            </li>

            <li
              className={name === '/contact' ? styles.active : ''}
              onMouseEnter={(e) => hoverEnter(e)}
              onMouseLeave={() => hoverExit()}
              onClick={(e) => {
                changePage(e, '/contact');
              }}
            >
              Contact
            </li>
            <li
              className={name === '/resume' ? styles.active : ''}
              onMouseEnter={(e) => hoverEnter(e)}
              onMouseLeave={() => hoverExit()}
              onClick={(e) => {
                changePage(e, '/resume');
              }}
            >
              Resume
            </li>
          </ul>
        </nav>
        <main className={styles.main}>{children}</main>
        <Burger setHamburger={setHamburger} hamburger={hamburger} />
      </div>
    </>
  );
};

export default Layout;
