import Section from "../../componets/Section";
import { forwardRef } from "react";
import { color, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const WhyMe = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const containerVariant = {
    shown: {
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };
  const data = (
    <motion.div
      className=" text-dk-secondary-bg text-sm pt-8 mb-6 flex flex-col gap-5 md:gap-8  "
      variants={containerVariant}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true }}
    >
      {whyMeData.map((_, i) => (
        <WhyMeCard key={i} i={i} />
      ))}
    </motion.div>
  );
  return <Section data={data} header={t("header.links.0")} ref={ref} />;
});
export default WhyMe;

const WhyMeCard = ({ i }) => {
  const { t } = useTranslation();
  const progress = i / (whyMeData.length - 1);
  const leftValue = `calc(${progress * 100}% - ${progress * 32}rem)`;
  const cardVariant = {
    hidden: { opacity: 0, y: -200, scale: 0.4 },
    shown: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <motion.ul
      key={i}
      className={`flex  rounded-lg bg-dk-primary py-3 divide-x max-w-lg md:relative mx-auto md:mx-0 divide-dk-secondary border border-dk-secondary hover:shadow-castum hover:text-dk-primary-bg duration-200 ${
        !(i % 2 === 0) &&
        "flex-row-reverse divide-x-reverse md:flex-row md:divide-x"
      }`}
      style={{
        left: leftValue,
        minHeight: "80px",
      }}
      variants={cardVariant}
    >
      <li className="my-auto border-black px-3">
        <Icon i={i} />
      </li>
      <li className="px-3 my-auto">
        <p>
          <span className="font-bold capitalize">{t(`whyMe.${i}.span`)}</span>
          {t(`whyMe.${i}.p`)}
        </p>
      </li>
    </motion.ul>
  );
};

const Icon = ({ i }) => (
  <motion.svg
    viewBox={whyMeData[i].path.viewBox}
    fill="currentColor"
    height={46}
    width={46}
  >
    {whyMeData[i].path.ds.map((d) => (
      <motion.path
        key={d}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 4,
            ease: "easeInOut",
            opacity: { duration: 0.1 },
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          },
        }}
        style={{
          stroke: "currentColor",
          strokeWidth: whyMeData[i].path.strokeWidth,
          strokeLinecap: "round",
          fill: "transparent",
        }}
        d={d}
      />
    ))}
  </motion.svg>
);

const whyMeData = [
  {
    path: {
      viewBox: "0 0 24 24",
      ds: [
        "M17.66 11.2c-.23-.3-.51-.56-.77-.82-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32-2.59 2.08-3.61 5.75-2.39 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.23.1-.47.04-.66-.12a.58.58 0 01-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5.14.6.41 1.2.71 1.73 1.08 1.73 2.95 2.97 4.96 3.22 2.14.27 4.43-.12 6.07-1.6 1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6-1.12.4-2.24-.16-2.9-.82 1.19-.28 1.9-1.16 2.11-2.05.17-.8-.15-1.46-.28-2.23-.12-.74-.1-1.37.17-2.06.19.38.39.76.63 1.06.77 1 1.98 1.44 2.24 2.8.04.14.06.28.06.43.03.82-.33 1.72-.93 2.27z",
      ],
      strokeWidth: 0.8,
    },
  },
  {
    path: {
      viewBox: "0 0 16 18",
      ds: [
        "M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 001.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 00-1.828 1.829l-.645 1.936a.361.361 0 01-.686 0l-.645-1.937a2.89 2.89 0 00-1.828-1.828l-1.937-.645a.361.361 0 010-.686l1.937-.645a2.89 2.89 0 001.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387A1.734 1.734 0 004.593 5.69l-.387 1.162a.217.217 0 01-.412 0L3.407 5.69A1.734 1.734 0 002.31 4.593l-1.162-.387a.217.217 0 010-.412l1.162-.387A1.734 1.734 0 003.407 2.31l.387-1.162zM10.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.156 1.156 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.156 1.156 0 00-.732-.732L9.1 2.137a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z",
      ],
      strokeWidth: 0.5,
    },
  },
  {
    path: {
      viewBox: "0 0 24 24",
      ds: [
        "M19 15 A4 4 0 0 1 15 19 A4 4 0 0 1 11 15 A4 4 0 0 1 19 15 z",
        "M18.5 18.5L21 21M4 6h16M4 12h4M4 18h4",
      ],
      strokeWidth: 0.8,
    },
  },
  {
    path: {
      viewBox: "0 0 24 24",
      ds: [
        "M6 13H3v-3h3v3m4-3H7v3h3v-3M8 6H5v3h3V6m10 6c-3.75 0-5.72 1.25-7 2H2c0 2.21 1.79 4 4 4h1c1 0 1.92-.37 2.62-1 1.44-1.22 3.06-2.26 4.93-2.64 1.06-.21 2.23-.36 3.45-.36h4v-2h-4z",
      ],
      strokeWidth: 0.7,
    },
  },
  {
    path: {
      viewBox: "0 0 24 24",
      ds: [
        "M13 1l.001 3.062A8.004 8.004 0 0119.938 11H23v2l-3.062.001a8.004 8.004 0 01-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 01-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0111 4.062V1h2zm-1 5a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 110 4 2 2 0 010-4z",
      ],
      strokeWidth: 0.8,
    },
  },
];
