//components
import MobileHeader from "./MobileHeader";
import ComputerHeader from "./ComputerHeader";
import Logo from "./Logo";
///npms
import { AnimatePresence, delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// icons

export default function Header() {
  return (
    <>
      <motion.div className="w-full p-4 flex justify-between bg-secondary">
        <Logo className={"text-5xl"} />
        <MobileHeader />
        <ComputerHeader />
      </motion.div>
    </>
  );
}

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
