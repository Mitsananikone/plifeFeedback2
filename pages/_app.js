import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import Navbar from '@/components/nav/nav';
// import Footer from '@/components/footer/footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import '@/components/logo/logo.module.css';
import markerSDK from '@marker.io/browser';
import Footer from '@/components/footer/footer';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   async function initializeMarker() {
  //     const widget = await markerSDK.loadWidget({
  //       project: '64f9013cd15407380f6eeef2',
  //     });
  //   }

  //   initializeMarker();
  // }, []);

  return (
    <div className="appWrapper">
      <Head>
        <title>Phoenique Life</title>
      </Head>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={router.route} classNames="page" timeout={800}>
          <div className="contentWrapper">
            <Component {...pageProps} />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
  
}
