import navLinks from "./data/links/navLinks";
import Header from "./componets/MobileHeader";
import About from "./sections/main/About";
import WhyMe from "./sections/main/WhyMe";
import Projects from "./sections/main/Projects";
import Contact from "./sections/main/Contact";
import Footer from "./sections/main/Footer";
import { useRef, forwardRef, useState, useEffect } from "react";
import MobileHeader from "./componets/MobileHeader";
import ComputerHeader from "./componets/ComputerHeader";
import BtnScrollToStart from "./componets/BtnScrollToStart";
import { useTranslation } from "react-i18next";
import {
  animate,
  motion,
  useAnimate,
  useElementScroll,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Offer from "./sections/main/Offer";
export default function Main() {
  const refs = initializeRefs();
  const mainRef = useRef(null);
  const sectionRef = useRef(null);

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "0"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const { t, i18n } = useTranslation();

  return (
    <div ref={mainRef}>
      <MobileHeader refs={refs} mainRef={mainRef} />
      <div dir={"auto"}>
        <motion.div
          className="sticky top-0 bg-dk-primary-bg "
          style={{ opacity, scale }}
        >
          <ComputerHeader refs={refs} />
          <About />
        </motion.div>
        <motion.div
          className="z-10 bg-dk-primary-bg mt-2 relative"
          ref={sectionRef}
        >
          {/*!!!! names of refs need to fit the navLinks arr that located at ./data/links/navLinks !!!!*/}
          <WhyMe />
          <Projects ref={refs.projects} />
          <Offer />
          <Contact ref={refs["contact-me"]} />
          <Footer />
          <BtnScrollToStart ref={mainRef} />
        </motion.div>
      </div>
    </div>
  );
}
function initializeRefs() {
  const refs = {};
  navLinks.forEach((link) => {
    refs[link.path] = useRef(null);
  });
  return refs;
}
