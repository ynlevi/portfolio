import { motion } from "framer-motion";
const BtnXMotion = ({ icon, handleClick, className }) => {
  const castomHamburger = {
    isOpen: { x: 0, transition: { duration: 0.5, type: "tween" } },
    isClose: { x: "200%" },
  };
  return (
    <motion.button
      className={`text-3xl h-full my-auto ${className}`}
      whileTap={{ scale: 1.1 }}
      onClick={handleClick}
      variants={castomHamburger}
      initial="isClose"
      animate="isOpen"
      exit="isClose"
      whileHover={{ color: "var(--dk-secondary)" }}
    >
      {icon}
    </motion.button>
  );
};
export default BtnXMotion;
