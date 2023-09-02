import React from "react";
import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="my-auto md:my-0">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent cursor-pointer text-dk-secondary  hover:text-dk-primary "
      >
        <option value="en">English</option> <option value="he">עברית</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
