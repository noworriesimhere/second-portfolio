import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useState, useRef, useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';

function MyApp({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cursorRef = useRef();
  const linksRef = useRef();

  const cursor = (e) => {
    gsap.to(cursorRef.current, { duration: 0.01, x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const links = linksRef.current.querySelectorAll('button, li, span');
    console.log(links);
    links.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        cursorRef.current.classList.remove('link-grow');
        gsap.to(cursorRef.current, { duration: 0.4, scale: 1 });
      });

      link.addEventListener('mouseover', () => {
        cursorRef.current.classList.add('link-grow');
        gsap.to(cursorRef.current, { duration: 0.4, scale: 2 });
      });
    });
  }, [linksRef.current, Component]);

  return (
    <div
      onMouseMove={(e) => {
        cursor(e);
      }}
      ref={linksRef}
    >
      <div className='cursor' ref={cursorRef} />
      <Layout
        setIsTransitioning={setIsTransitioning}
        isTransitioning={isTransitioning}
      >
        <Component {...pageProps} isTransitioning={isTransitioning} />
      </Layout>
    </div>
  );
}

export default MyApp;
