import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <Layout activePage={Component} setIsTransitioning={setIsTransitioning}>
      <Component
        {...pageProps}
        isTransitioning={isTransitioning}
        setIsTransitioning={setIsTransitioning}
      />
    </Layout>
  );
}

export default MyApp;
