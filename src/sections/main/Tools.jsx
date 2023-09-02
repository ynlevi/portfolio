import Section from "../../componets/Section";
// icons
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { LuFramer } from "react-icons/lu";
import { BsGit } from "react-icons/bs";
import { forwardRef } from "react";

const Tools = forwardRef((_, ref) => {
  const data = (
    <div className="flex gap-0 sm:gap-8 justify-center overflow-hidden my-32">
      {iconsObj.map((obj, i) => (
        <ul
          key={i}
          className="h-24 w-24 bg-dk-primary scale-75 sm:scale-100 rounded-lg flex flex-col items-center justify-between py-1 flex-shrink-0 "
          //   style={{ zoom: 0.75 }}
        >
          <li className="text-dk-secondary-bg ">{obj.icon}</li>
          <li className="text-dk-secondary-bg capitalize font-semibold text-xs">
            {obj.discription}
          </li>
        </ul>
      ))}
    </div>
  );
  return (
    <Section header={"My Tools"} data={data} className={"my-12"} ref={ref} />
  );
});
export default Tools;
const iconsObj = [
  { icon: <FaHtml5 size={65} />, discription: "html" },
  { icon: <FaCss3Alt size={65} />, discription: "css" },
  { icon: <FaJsSquare size={65} />, discription: "java script" },
  { icon: <FaReact size={65} />, discription: "react" },
  { icon: <SiTailwindcss size={65} />, discription: "tailwind css" },
  { icon: <LuFramer size={65} />, discription: "framer motion" },
  { icon: <BsGit size={65} />, discription: "git" },
  { icon: <FaGithub size={65} />, discription: "git hub" },
];
