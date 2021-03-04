import { useRef, useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap';

const Cursor = ({ children, Component }) => {
  const cursorRef = useRef();
  const linksRef = useRef();

  const cursor = (e) => {
    gsap.to(cursorRef.current, { duration: 0, x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const links = linksRef.current.querySelectorAll('button, span');
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
  }, [linksRef.current, Component]);

  return (
    <div
      ref={linksRef}
      onMouseMove={(e) => {
        if (e.target.localName === 'li') {
          const location = e.target.getBoundingClientRect();
          gsap.to(cursorRef.current, {
            duration: 0.2,
            x: location.left + location.width / 1.9,
            y: location.top + location.height / 2,
            width: location.width + 20,
            height: location.height,
            scale: 1,
            borderRadius: '5px',
          });
        } else {
          gsap.to(cursorRef.current, {
            duration: 0.2,
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            x: e.clientX,
            y: e.clientY,
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
