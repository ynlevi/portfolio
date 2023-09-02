import { forwardRef } from "react";
import {
  motion,
  useAnimate,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { SlArrowUp } from "react-icons/sl";
const BtnScrollToStart = forwardRef((_, ref) => {
  // const y = useMotionValue(100);
  const scrollToStart = () => {
    animate(scope.current, { y: 200 });
    return ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll({
    ref: ref,
    offset: ["100vh start", "end end"],
  });
  const [scope, animate] = useAnimate();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(scope, "scope");
    animate(scope.current, { y: latest > 0 ? 0 : 100 });
  });
  return (
    <motion.div
      className="text-dk-secondary primar fixed z-40 right-10 bottom-10 cursor-pointer "
      onClick={scrollToStart}
      whileHover={{ color: "var(--dk-primary)" }}
      ref={scope}
    >
      <SlArrowUp size={35} />
    </motion.div>
  );
});
export default BtnScrollToStart;
