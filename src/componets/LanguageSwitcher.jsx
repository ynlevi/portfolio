import React from "react";
import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="my-auto md:my-0">
      <select
        className="bg-transparent cursor-pointer text-dk-secondary ring-0 outline-none font-extralight tracking-wide hover:text-dk-primary "
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        style={{ WebkitAppearance: "none" }}
      >
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
