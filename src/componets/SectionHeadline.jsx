import { useInView } from "framer-motion";
import { useRef } from "react";
import TypingEffect from "./TypingEffect";
function SectionHeadline({ txt, className }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <div className={` ${className}`}>
      <h3
        className={`max-w-xl mx-0 w-full text-2xl md:text-3xl text-dk-primary font-extralight`}
        ref={ref}
      >
        {isInView ? (
          <TypingEffect txt={[txt]} speed={30} />
        ) : (
          <h1 className="opacity-0 text-2xl md:text-3xl">.</h1>
        )}
      </h3>
    </div>
  );
}

export default SectionHeadline;
