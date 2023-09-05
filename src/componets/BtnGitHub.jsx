import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
export default function BtnGitHub({ className, hover }) {
  return (
    <motion.button
      className={`p-3 w-fit ${className}`}
      whileTap={{ zoom: 0.9 }}
      whileHover={hover}
    >
      <a href="https://github.com/ynlevi">
        <BsGithub size={40} />
      </a>
    </motion.button>
  );
}
