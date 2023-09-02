import profile from "../../src/data/media/images/profile.jpeg";
import BtnXMotion from "./BtnXMotion";
import navLinks from "../data/links/navLinks";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function Hamburger({ refs, mainRef, handleClick, isOpen }) {
  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <BtnXMotion
            icon={<RxHamburgerMenu className="text-dk-secondary" />}
            handleClick={handleClick}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <SideMenu
            handleClick={handleClick}
            isOpen={isOpen}
            refs={refs}
            mainRef={mainRef}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const SideMenu = ({ handleClick, refs, mainRef }) => {
  const castomSideMenu = {
    isClose: { x: "100%", transition: { delay: 0, type: "tween" } },
    isOpen: { x: 0, transition: { duration: 0.15, type: "tween", delay: 0.3 } },
  };
  const castomOverlay = {
    isClose: {
      opacity: 0,
      x: "100%",
      transition: { type: "tween", duration: 0.15 },
    },
    isOpen: {
      opacity: 0.5,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.45,
      },
    },
  };
  return (
    <>
      <motion.div
        key={0}
        className="absolute top-0 right-0 w-1/2 z-50 bg-dk-primary  h-screen shadow-2xl divide-y divide-dk-secondary opacity-100"
        variants={castomSideMenu}
        initial="isClose"
        animate="isOpen"
        exit="isClose"
      >
        <motion.ul className="text-4xl flex justify-between py-2 px-3">
          <motion.li>
            <img
              src={profile}
              alt="profile"
              className="w-12 h-12 cursor-pointer rounded-full"
              onClick={() => scrollTo(mainRef, handleClick)}
            />
          </motion.li>
          <motion.li onClick={handleClick}>
            <BtnXMotion icon={<CgClose />} className="text-dk-secondary-bg" />
          </motion.li>
        </motion.ul>
        <MenuLinks refs={refs} handleClick={handleClick} />
      </motion.div>
      <motion.div
        key={1}
        variants={castomOverlay}
        initial="isClose"
        animate="isOpen"
        exit="isClose"
        className="absolute inset-0 right-1/2 bg-dk-primary  h-screen cursor-pointer"
        onClick={handleClick}
      />
    </>
  );
};

const MenuLinks = ({ refs, handleClick }) => {
  const castumLinkList = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };
  const castumLinkItem = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <motion.ul
      className="flex flex-col gap-1"
      variants={castumLinkList}
      initial="closed"
      animate="open"
    >
      {navLinks.map((obj, i) => (
        <motion.li
          key={i}
          className="my-5 ml-4 text-dk-secondary-bg hover:text-primary-hover list-none font-bold cursor-pointer"
          variants={castumLinkItem}
          whileTap={{ color: "var(--dk-secondary)" }}
          onClick={() => scrollTo(refs[obj.path], handleClick)}
        >
          {obj.name}
        </motion.li>
      ))}
    </motion.ul>
  );
};
const scrollTo = (sectionRef, handleClick) => {
  handleClick();
  sectionRef.current.scrollIntoView({ top: 10, behavior: "smooth" });
};
