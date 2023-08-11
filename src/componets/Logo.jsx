import { motion } from "framer-motion";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Logo({ className }) {
  return (
    <Link to={""}>
      <motion.div
        className={`text-primary ${className}`}
        whileHover={{ color: "var(--primary-hover)" }}
      >
        <GiFullPizza />
      </motion.div>
    </Link>
  );
}
