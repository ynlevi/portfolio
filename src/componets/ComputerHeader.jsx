import navLinks from "../data/links/navLinks";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
export default function ComputerHeader({ refs }) {
  const { t } = useTranslation();
  const castumLinkList = {};
  const castumLinkItem = {};
  const scrolTo = (sectionRef) =>
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div className="hidden md:block absolute top-0 bottom-0 ">
      <div className="flex flex-col justify-between ml-5 py-4 h-full">
        <LanguageSwitcher />
        <ul>
          <motion.div
            className="flex flex-col gap-8  "
            variants={castumLinkList}
            initial="closed"
            animate="open"
          >
            {navLinks.map((obj, i) => (
              <nav key={i} exact={"true"} to={obj.path}>
                <motion.li
                  variants={castumLinkItem}
                  className="  text-dk-secondary list-none font-extralight tracking-widest cursor-pointer"
                  whileHover={{ color: "var(--dk-primary)" }}
                  whileTap={{ y: -3 }}
                  onClick={() => scrolTo(refs[obj.path])}
                >
                  {t(`header.links.${i}`)}
                </motion.li>
              </nav>
            ))}
          </motion.div>
        </ul>
      </div>
    </div>
  );
}
