import Head from 'next/head';
import React from 'react';

import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <>
      <Head>
        <title>About Me - Alan Tran</title>
      </Head>
      <main className={styles.container}>
        <h1>About Me</h1>
        <h3>Web Developer from NYC</h3>
        <section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            tempora, doloribus veritatis error animi qui dolores repellat,
            possimus dicta nisi, odit ipsa pariatur at vitae.
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
