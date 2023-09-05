//components

///npms
import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import SideBar from "./SideBar";

// icons

function MobileHeader({ refs, mainRef }) {
  const [isOpen, setOpen] = useState(false);
  const toggleVisible = () => setOpen((prev) => !prev);
  return (
    <motion.div
      className={`md:hidden w-full fixed top-0 z-40 bg-dk-primary-bg h-16  p-2 pr-3 flex justify-between `}
      initial={{ opacity: 0.8 }}
      animate={
        isOpen ? { opacity: 1, transition: { delay: 0.3 } } : { opacity: 0.9 }
      }
    >
      <LanguageSwitcher />
      <SideBar
        refs={refs}
        mainRef={mainRef}
        handleClick={toggleVisible}
        isOpen={isOpen}
      />
    </motion.div>
  );
}
export default MobileHeader;

function ChangeLang() {
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => i18n.changeLanguage(lang);
  return (
    <>
      <nav>
        <button
          className={`${i18n.resolvedLanguage === "en" && "font-bold"}`}
          onClick={() => handleClick("en")}
        >
          English
        </button>
        <button onClick={() => handleClick("he")}>Hebrow</button>
        <button onClick={() => handleClick("fr")}>French</button>
      </nav>
      <div>{t("h1.0")}</div>
      <p>{t("activeBtn.first")}</p>
    </>
  );
}
///mobile code until here
