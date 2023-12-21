import { Box, ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import Router from 'next/router';
import NProgress from 'nprogress';

import '@/styles/css/nprogress.css';
import GlobalStyle from '@/styles/styles';
import theme from '@/styles/theme';
import Fonts from 'public/fonts';

// NProgress configuration
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MotionBox = motion(Box);

const MyApp = ({ Component, pageProps, router }) => (
  <ChakraProvider resetCSS theme={theme}>
    <DefaultSeo {...SEO} />
    <Fonts />
    <GlobalStyle>
      <AnimatePresence exitBeforeEnter>
        <MotionBox
          key={router.route}
          animate="enter"
          as="main"
          exit="exit"
          flexGrow={1}
          initial="initial"
          variants={{
            initial: { opacity: 0, y: -10 },
            enter: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 10 },
          }}
        >
          <Component {...pageProps} />
        </MotionBox>
      </AnimatePresence>
    </GlobalStyle>
  </ChakraProvider>
);

export default MyApp;
