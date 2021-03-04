import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useState } from 'react';

import Cursor from '../components/Cursor';

function MyApp({ Component, pageProps }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <Cursor
      onMouseMove={(e) => {
        cursor(e);
      }}
      Component={Component}
    >
      <Layout
        setIsTransitioning={setIsTransitioning}
        isTransitioning={isTransitioning}
      >
        <Component {...pageProps} isTransitioning={isTransitioning} />
      </Layout>
    </Cursor>
  );
}

export default MyApp;
