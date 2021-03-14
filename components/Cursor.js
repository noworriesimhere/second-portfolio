import { useRef } from 'react';

import { gsap } from 'gsap/dist/gsap';

const Cursor = ({ children }) => {
  const cursorRef = useRef();
  const linksRef = useRef();

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
          const location = e.target.getBoundingClientRect();
          gsap.to(cursorRef.current, {
            duration: 0.15,
            x: location.left + location.width / 2, //centers the hover horizontally
            y: location.top + location.height / 2, //centers the center vertically over menu item
            width: location.width + 20, //just a tad more width to the box
            height: location.height,

            borderRadius: '5px',
            background: 'white',
            opacity: 1,
          });
        } else if (
          e.target.localName === 'input' ||
          e.target.localName === 'textarea'
        ) {
          const location = e.target.getBoundingClientRect();
          gsap.to(cursorRef.current, {
            duration: 0.15,
            x: location.left + location.width / 2, //centers the hover horizontally
            y: location.top + location.height / 2, //centers the center vertically over menu item
            width: location.width + 20, //just a tad more width to the box
            height: location.height + 20,

            borderRadius: '20px',
            background: 'white',
            opacity: 1,
          });
        } else {
          gsap.to(cursorRef.current, {
            duration: 0.1,
            width: '5rem',
            height: '5rem',
            borderRadius: '50%',
            x: e.clientX,
            y: e.clientY,
            background: 'none',
            opacity: 1,
          });
        }
      }}
      onPointerDown={() => {
        gsap.to(cursorRef.current, {
          duration: 1,
          scale: 0.8,
          ease: 'elastic.out(1, 0.3)',
        });
      }}
      onPointerUp={() => {
        gsap.to(cursorRef.current, {
          duration: 1,
          scale: 1,
          ease: 'elastic.out(1, 0.3)',
        });
      }}
    >
      <div className='cursor' ref={cursorRef} />
      {children}
    </div>
  );
};

export default Cursor;
