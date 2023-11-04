import { forwardRef, useRef } from "react";
import Section from "../../componets/Section";
import hotel from "../../data/media/videos/hotel.mp4";
import offek from "../../data/media/videos/offek.mp4";
import ton from "../../data/media/videos/ton.mp4";
import ReactPlayer from "react-player";
import TypingEffect from "../../componets/TypingEffect";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeadline from "../../componets/SectionHeadline";
const Projects = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    ["0%", "0%", "-66.9%", "-66.9%"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.83, 1, 1, 0.83]
  );

  const data = (
    <div className="relative h-[375vh] lg:pb-0 " ref={ref}>
      <SectionHeadline
        txt={"Here're some projects i've done"}
        className={"w-10/12 mx-auto "}
      />
      <motion.div
        className=" overflow-hidden rounded-lg sticky top-[25vh] md:top-20 xl:-top-20  "
        style={{ scale }}
      >
        <motion.div className="flex gap-6 w-fit " style={{ x }}>
          {videos.map(({ name, href }, i) => (
            <motion.div
              className="shadow-lg w-screen flex-shrink-0  object-fit  "
              key={i}
            >
              <a href={href}>
                <ReactPlayer
                  url={name}
                  playing={true}
                  loop={true}
                  muted={true}
                  width={"100%"}
                  height={"100%"}
                  playsinline
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
  return data;
});
export default Projects;

const videos = [
  { name: hotel, href: "https://the-place-ve.vercel.app" },
  { name: offek, href: "https://sayag-studio.site" },
  { name: ton, href: "https://ynlevi.github.io/ton-repairs-en" },
];
