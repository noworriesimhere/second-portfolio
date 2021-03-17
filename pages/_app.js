import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useState } from 'react';
import Head from 'next/head';

import Cursor from '../components/Cursor';

function MyApp({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/9b36654fc1.js'
          crossorigin='anonymous'
        ></script>
      </Head>
      <Cursor Component={Component}>
        <Layout
          setIsTransitioning={setIsTransitioning}
          isTransitioning={isTransitioning}
        >
          <Component {...pageProps} isTransitioning={isTransitioning} />
        </Layout>
      </Cursor>
    </>
  );
}

export default MyApp;
