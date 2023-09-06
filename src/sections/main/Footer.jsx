import { useTranslation } from "react-i18next";
export default function Footer({ className }) {
  const { t } = useTranslation();
  return (
    <div className="mx-auto w-fit mt-16 pb-2 font-extralight">
      <a
        href="https://ynlevi.github.io/CV/"
        className={`w-fit text-xs sm:text-sm  text-primary py-2  hover:text-dk-secondary text-dk-primary ${className}`}
      >
        {t("footer.a") + " " + currentYear}
      </a>
    </div>
  );
}
const currentYear = new Date().getFullYear();
