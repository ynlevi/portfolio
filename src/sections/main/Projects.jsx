import { forwardRef, useRef } from "react";
import Section from "../../componets/Section";
import sayag from "../../data/media/videos/sayag-studio.mp4";
import ReactPlayer from "react-player";
import TypingEffect from "../../componets/TypingEffect";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
const Projects = forwardRef((_, ref) => {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (l) => console.log(l, "l"));
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0.8, 1, 1, 0.8]
  );
  const data = (
    <div className="relative h-[300vh] " ref={videoRef}>
      <motion.div
        className=" overflow-hidden  rounded-lg sticky top-[25vh] md:top-20 xl:-top-20  "
        style={{ scale }}
      >
        <motion.div className="flex gap-6 w-fit " style={{ x }}>
          {videos.map((video, i) => (
            <motion.div
              className="shadow-lg w-screen flex-shrink-0  object-fit  "
              key={i}
            >
              <a href="https://ynlevi.github.io/sayag-studio/">
                <ReactPlayer
                  url={video}
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
  return (
    <div className="">
      <TypingEffect
        txt={["Projects"]}
        className="text-dk-primary text-3xl mb-8 md:text-5xl capitalize font-extralight w-11/12 md:w-10/12 mx-auto"
        cursorStyle={"transparent"}
        speed={25}
      />
      {data}
    </div>
  );
});
export default Projects;

const videos = [sayag, sayag, sayag];
// const data = (
//   <div className="relative h-[300vh] " ref={videoRef}>
//     <motion.div
//       className=" overflow-hidden  rounded-lg sticky -top-20 "
//       style={{ scale }}
//     >
//       <motion.div className="flex gap-6 w-fit " style={{ x }}>
//         {videos.map((video, i) => (
//           <motion.div
//             className="shadow-lg w-screen flex-shrink-0 rounded-lg object-fit  "
//             key={i}
//           >
//             <a href="https://ynlevi.github.io/sayag-studio/">
//               <ReactPlayer
//                 url={video}
//                 playing={true}
//                 loop={true}
//                 muted={true}
//                 width={"100%"}
//                 height={"100%"}
//                 playsinline
//               />
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   </div>
// );
