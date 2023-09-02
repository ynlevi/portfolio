import { PiListMagnifyingGlassDuotone } from "react-icons/pi";
import { AiOutlineClear } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri";
import Section from "../../componets/Section";
import { forwardRef } from "react";
const WhyMe = forwardRef((_, ref) => {
  let ml = 0;
  const data = (
    <div className=" text-dk-secondary-bg text-sm">
      {icons.map((icon, i) => {
        const progress = i / (icons.length - 1);
        const leftValue = `calc(${progress * 100}% - ${progress * 32}rem)`;
        return (
          <ul
            key={i}
            className={`flex rounded-lg bg-dk-primary my-4 md:my-10 py-3 divide-x max-w-lg  md:relative mx-auto md:mx-0 ${
              !(i % 2 === 0) &&
              "flex-row-reverse divide-x-reverse divide-dk-secondary md:flex-row md:divide-x"
            }`}
            style={{ left: leftValue, minHeight: "80px" }}
          >
            <li className="my-auto border-black px-3">{icon}</li>
            <li className="px-3 my-auto">
              <p>
                <span className="font-bold">{whyMeData[i].span}</span>
                {whyMeData[i].p}
              </p>
            </li>
          </ul>
        );
      })}
    </div>
  );
  return <Section data={data} header={"why me?"} ref={ref} />;
});
export default WhyMe;
const whyMeData = [
  {
    span: `passion. `,
    p: `I like good and modern design, with beautiful and right color, that makes since on the transport the vibe we are trying to get from the project, and overall makes an amazing and satisfied user experience.`,
  },
  {
    span: `Perfectionism on every pixel. `,
    p: `I eager to understand every behaviour that happening on the screen.`,
  },
  {
    span: `Sugar syntax. `,
    p: `I like clear and organize small component with good naming that would help others to understand my code easily.`,
  },
  {
    span: `Ambitioun. `,
    p: `My life now is dedicate to build my career and my reputation as a good front end development. I would do anything to make sure your are happy with my work.`,
  },
];
const icons = [
  <AiOutlineFire size={33} />,
  <PiListMagnifyingGlassDuotone size={35} />,
  <AiOutlineClear size={33} />,
  <RiFocus3Line size={33} />,
];
