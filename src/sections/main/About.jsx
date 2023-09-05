import Section from "../../componets/Section";
import profile from "../../data/media/images/profile.jpeg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TypingEffect from "../../componets/TypingEffect";
import { useMediaQuery } from "@uidotdev/usehooks";
export default function About() {
  const isSmall = useMediaQuery("only screen and (max-width : 640px)");
  const isMedium = useMediaQuery("only screen and (max-width: 768px)");

  const [HeaderEffectIsFinished, setHeaderEffectIsFinished] = useState(false);
  const [pEffectIsFinished, setPEffectIsFinished] = useState(false);

  const data = (
    <div className="flex flex-col justify-evenly gap-20 w-screen h-screen ">
      <div className=" mx-auto w-8/12 md:w-10/12  relative md:left-8 md:mt-20  -z-50">
        <TypingEffect
          txt={["Hi there:)", "I'm Yonathan"]}
          className={
            "text-3xl sm:text-5xl text-dk-primary font-mono md:max-w-2xl mx-auto "
          }
          handleFinish={() =>
            setTimeout(() => setHeaderEffectIsFinished(true), 700)
          }
        />
        {HeaderEffectIsFinished && (
          <TypingEffect
            txt={["A Front-End developer who can do pretty cool stuff"]}
            className={
              "text-dk-primary sm:text-xl mt-8 font-mono max-w-xs md:max-w-2xl mx-auto absolute md:inset-x-0"
            }
            handleFinish={() => setPEffectIsFinished(true)}
            speed={30}
          />
        )}
      </div>
      <motion.div
        className="w-80 h-80  md:w-[23rem] md:h-[23rem] mx-auto "
        initial={
          isSmall
            ? { opacity: 0, scale: 0.01, rotate: "360deg", x: 7, y: -242 }
            : isMedium
            ? { opacity: 0, scale: 0.01, rotate: "360deg", x: 240, y: -280 }
            : { opacity: 0, scale: 0.01, rotate: "360deg", x: 298, y: -276 }
        }
        animate={
          pEffectIsFinished && {
            opacity: 1,
            scale: 1,
            rotate: 0,
            x: isSmall ? [7, 200, 0] : isMedium ? [240, 400, 0] : [298, 500, 0],
            y: [isSmall ? -242 : isMedium ? -280 : -276, -320, 0],
            transition: { duration: 2 },
          }
        }
      >
        <motion.img
          src={profile}
          alt="profile"
          className="w-full h-full rounded-full shadow-md "
        />
      </motion.div>
    </div>
  );
  return data;
}
