import "../styles/globals.css";
import Appbar from "../components/Nav";
import AOS from "aos";
import Loader from "../components/Loader";
import { Box } from "@mui/material";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    setTimeout(() => setLoading(false), 2000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Appbar />
      <Box sx={{ mt: { xs: "86px", md: "76px" } }} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
    
  );
}

export default MyApp;
