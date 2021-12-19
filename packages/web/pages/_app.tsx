import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { withUrqlClient } from 'next-urql';

import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>LocalTracker</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default withUrqlClient((ssrExchange, ctx) => {
  let cookie = '';

  return {
    url: 'http://localhost:4000/graphql',
    fetchOptions: {
      credentials: 'same-origin' as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
  };
})(MyApp);
