import Section from "./Section";
// icons
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStrapi } from "react-icons/si";
import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import { LuFramer } from "react-icons/lu";
import { BsGit } from "react-icons/bs";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Tools = forwardRef((_, ref) => {
  const { t } = useTranslation();
  return (
    <div className="relative flex sm:gap-8 md:gap-12 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-50 before:w-2/6 before:bg-gradient-to-r before:from-dk-primary-bg  before:to-transparent before:scale-110 after:absolute after:inset-y-0 after:-right-4 z-10 after:bg-gradient-to-l after:from-dk-primary-bg after:to-transparent after:w-2/6 after:scale-110 max-w-xl ">
      <Icons obj={iconsObj} />
    </div>
  );
});
export default Tools;

const Icons = ({ obj }) => {
  return (
    <div
      className="flex gap-0 sm:gap-8 md:gap-12 justify-center"
      style={{ animation: "40s move-right infinite linear" }}
    >
      {obj.map((obj, i) => (
        <ul
          key={i}
          className="h-24 w-24 bg-dk-primary scale-75 sm:scale-100 rounded-lg flex flex-col items-center justify-between py-1 flex-shrink-0"
        >
          <li className="text-dk-secondary-bg ">{obj.icon}</li>
          <li className="text-dk-secondary-bg capitalize font-semibold text-xs">
            {obj.discription}
          </li>
        </ul>
      ))}
    </div>
  );
};

const iconsObj = [
  { icon: <FaHtml5 size={65} />, discription: "html" },
  { icon: <FaCss3Alt size={65} />, discription: "css" },
  { icon: <FaJsSquare size={65} />, discription: "java script" },
  { icon: <FaReact size={65} />, discription: "react" },
  { icon: <TbBrandNextjs size={70} />, discription: "next.js" },
  { icon: <SiStrapi size={60} />, discription: "strapi" },
  { icon: <SiTailwindcss size={65} />, discription: "tailwind css" },
  { icon: <LuFramer size={65} />, discription: "framer motion" },
  { icon: <BsGit size={65} />, discription: "git" },
  { icon: <FaGithub size={65} />, discription: "git hub" },
  { icon: <FaHtml5 size={65} />, discription: "html" },
  { icon: <FaCss3Alt size={65} />, discription: "css" },
  { icon: <FaJsSquare size={65} />, discription: "java script" },
  { icon: <FaReact size={65} />, discription: "react" },
  { icon: <SiTailwindcss size={65} />, discription: "tailwind css" },
  { icon: <LuFramer size={65} />, discription: "framer motion" },
  { icon: <BsGit size={65} />, discription: "git" },
  { icon: <FaGithub size={65} />, discription: "git hub" },
  { icon: <TbBrandNextjs size={65} />, discription: "next.js" },
  { icon: <SiStrapi size={65} />, discription: "strapi" },
];
