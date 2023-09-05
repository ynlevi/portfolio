import { forwardRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import TypingEffect from "./TypingEffect";
const Section = forwardRef(({ data, header, className }, ref) => {
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.6, 1],
    [0.75, 1, 1, 0.75]
  );
  return (
    <motion.section
      className={`py-16 md:14 w-11/12 mx-auto md:w-10/12  ${className}`}
      ref={ref}
      style={{ scale }}
    >
      {header && (
        <motion.div
          whileInView={() => setTimeout(() => setIsInView(true), 200)}
          viewport={{ once: true }}
        >
          {isInView ? (
            <motion.div variants={variant} initial="hidden" animate="visible">
              <TypingEffect
                txt={[header]}
                className="text-dk-primary text-3xl mb-8 md:text-5xl capitalize font-extralight"
                cursorStyle={"transparent"}
                speed={25}
              />
            </motion.div>
          ) : (
            <h1 className="opacity-0 mb-8 text-3xl md:text-5xl">.</h1>
          )}
        </motion.div>
      )}
      {data}
    </motion.section>
  );
});
export default Section;

const variant = {
  hidden: {
    zoom: 0.9,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    zoom: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 1.75,
    },
  },
};
