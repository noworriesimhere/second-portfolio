import { useRef, useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';

const Cursor = ({ children, Component }) => {
  const cursorRef = useRef();
  const linksRef = useRef();

  useEffect(() => {
    const links = linksRef.current.querySelectorAll('button');
    links.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        cursorRef.current.classList.remove('link-grow');
        gsap.to(cursorRef.current, {
          duration: 0.4,
          scale: 1,
        });
      });

      link.addEventListener('mouseover', () => {
        cursorRef.current.classList.add('link-grow');
        gsap.to(cursorRef.current, { duration: 0.4, scale: 2 });
      });
    });
    console.log('fired button');
  }, [linksRef.current, Component]);

  useEffect(() => {
    const allLis = linksRef.current.querySelectorAll('li, a');
    allLis.forEach((li) => {
      li.addEventListener('mouseover', (e) => {
        const location = e.target.getBoundingClientRect();
        gsap.to(cursorRef.current, {
          duration: 0.15,
          x: location.left + location.width / 2, //centers the hover horizontally
          y: location.top + location.height / 2, //centers the center vertically over menu item
          width: location.width + 10, //just a tad more width to the box
          height: location.height,
          scale: 1,
          borderRadius: '5px',
          background: 'white',
          opacity: 1,
        });
      });
    });
    console.log('fired li and a');
  }, [linksRef.current, Component]);

  return (
    <div
      ref={linksRef}
      onPointerLeave={() => {
        gsap.to(cursorRef.current, {
          opacity: 0,
        });
        //cursor will disappear when moving away from window
      }}
      onPointerMove={(e) => {
        if (e.target.localName === 'li' || e.target.localName === 'a') {
          return;
        } else {
          gsap.to(cursorRef.current, {
            duration: 0.1,
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            x: e.clientX,
            y: e.clientY,
            background: 'none',
            opacity: 1,
          });
        }
      }}
    >
      <div className='cursor' ref={cursorRef} />
      {children}
    </div>
  );
};

export default Cursor;
