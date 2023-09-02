import Section from "../../componets/Section";
import profile from "../../data/media/images/profile.jpeg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useMediaQuery } from "@uidotdev/usehooks";
export default function About() {
  const isSmall = useMediaQuery("only screen and (max-width : 640px)");
  const isMedium = useMediaQuery("only screen and (max-width: 768px)");

  const [HeaderEffectIsFinished, setHeaderEffectIsFinished] = useState(false);
  const [pEffectIsFinished, setPEffectIsFinished] = useState(false);

  const data = (
    <div
      className="flex flex-col justify-evenly"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <div className=" mx-auto w-11/12 sm:w-9/12 md:w-10/12 ">
        <TypingEffect
          p={["Hi there, I'm Yonathan"]}
          className={
            "text-3xl md:text-5xl text-dk-primary font-mono md:max-w-2xl mx-auto"
          }
          handleFinish={() =>
            setTimeout(() => setHeaderEffectIsFinished(true), 700)
          }
        />
        {HeaderEffectIsFinished ? (
          <TypingEffect
            p={["A Front-End developer who can do pretty cool stuff"]}
            className={
              "text-dk-primary  md:text-xl mt-8 font-mono md:max-w-2xl mx-auto md:pl-6"
            }
            handleFinish={() => setPEffectIsFinished(true)}
            speed={30}
          />
        ) : (
          <p className="mt-8 md:mt-9 opacity-0">{"."}</p>
        )}
      </div>
      <motion.div
        className="w-96 h-96 mx-auto "
        initial={
          isSmall
            ? { opacity: 0, scale: 0.01, rotate: "360deg", x: -106, y: -272 }
            : isMedium
            ? { opacity: 0, scale: 0.01, rotate: "360deg", x: 240, y: -280 }
            : { opacity: 0, scale: 0.01, rotate: "360deg", x: 298, y: -276 }
        }
        animate={
          pEffectIsFinished && {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0,
            transition: { duration: 2 },
          }
        }
      >
        <motion.img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-full shadow-md"
        />
      </motion.div>
    </div>
  );
  return <Section data={data} className={"h-screen"} />;
}
const TypingEffect = ({ p, className, handleFinish, speed }) => {
  const [hideCursor, setHideCursor] = useState(false);
  const [text] = useTypewriter({
    words: p,
    loop: 1,
    onLoopDone: () => {
      setHideCursor(true);
      handleFinish();
    },
    typeSpeed: speed,
  });
  return (
    <div className={className}>
      <span>{text}</span>
      <Cursor
        cursorStyle={hideCursor ? "." : "|"}
        cursorBlinking={!hideCursor}
      />
    </div>
  );
};
