import navLinks from "../data/links/navLinks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function ComputerHeader() {
  const castumLinkList = {};
  const castumLinkItem = {};
  return (
    <div className="hidden md:block">
      <ul>
        <motion.nav
          className="flex gap-2 text-sm"
          variants={castumLinkList}
          initial="closed"
          animate="open"
        >
          {navLinks.map((obj, i) => (
            <NavLink key={i} exact={"true"} to={obj.path}>
              <motion.li
                variants={castumLinkItem}
                className="my-5 ml-4 hover:text-sky-300  text-primary list-none font-light"
                whileHover={{ y: -3 }}
                whileTap={{ fontSize: "bold" }}
              >
                {obj.name}
              </motion.li>
            </NavLink>
          ))}
        </motion.nav>
      </ul>
    </div>
  );
}
