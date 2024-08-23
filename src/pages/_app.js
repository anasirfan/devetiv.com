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
        <link rel="icon" href="/logo.png" sizes="32x32" />
        <meta name="title" content="Devetiv Software Solutions | Innovative Technology & Consulting Services" />
        <meta name="description" content="Devetiv Software Solutions offers cutting-edge technology and consulting services to drive business growth. Specializing in custom software development, web and mobile applications, and IT consulting, we provide innovative solutions tailored to your needs. Explore our comprehensive range of services and discover how we can help your business thrive in the digital age." />

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
