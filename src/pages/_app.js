import { Poppins } from "next/font/google";
import "../assets/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";
import { AnimatePresence } from 'framer-motion';
import Aos from "aos";
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

NProgress.configure({ showSpinner: true }); // Optional configuration

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.refresh();
    Aos.init({ duration: 1000, once: true }); // Initialize AOS with default duration and options
  }, []);
  const router = useRouter()
  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start();
    };
    const handleRouteChangeComplete = () => {
      NProgress.done();
    };
    const handleRouteChangeError = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Devetiv</title>
        <meta name="description" content="Devetiv software solutions....." />
      </Head>
      <div className={poppins.className}>

        <AnimatePresence mode='wait'>
        

            <Component {...pageProps} key={router.route} />
        
        </AnimatePresence>

      </div>
    </>
  );
}

export default MyApp;
