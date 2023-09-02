import { forwardRef } from "react";
import { motion } from "framer-motion";
const Section = forwardRef(({ data, header, className }, ref) => (
  <section
    className={`py-16 md:14 w-11/12 mx-auto md:w-10/12 ${className}`}
    ref={ref}
  >
    <motion.h1
      className="text-dk-primary text-3xl mb-8 md:text-5xl capitalize font-extralight"
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {header}
    </motion.h1>
    {data}
  </section>
));
export default Section;

const variant = {
  hidden: {
    y: "200%",
    opacity: 0,
    zoom: 0.8,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    zoom: 1,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};
