import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <Layout setIsTransitioning={setIsTransitioning}>
      <Component {...pageProps} isTransitioning={isTransitioning} />
    </Layout>
  );
}

export default MyApp;
