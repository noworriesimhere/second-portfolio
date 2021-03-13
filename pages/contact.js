import Head from 'next/head';
import React from 'react';
import ContactForm from '../components/ContactForm';

import styles from '../styles/Contact.module.scss';

import { spanify } from '../utils/utilFunctions';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <div div className={styles.container}>
        <h1>Let's Talk!</h1>
        <h4>
          Whether it's a job opportunity or an idea, I'd love to get in touch
        </h4>
        <main>
          <ContactForm />
        </main>
      </div>
    </>
  );
};

export default Contact;
