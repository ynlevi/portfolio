import Section from "../../componets/Section";
import { animate, color, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeadline from "../../componets/SectionHeadline";
import { useRef } from "react";
const WhyMe = () => {
  const ref = useRef();
  const { t } = useTranslation();
  const containerVariant = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 1.2 },
    },
  };

  const data = (
    <motion.div
      className=" text-dk-secondary-bg text-sm mb-6 flex flex-col gap-5 md:gap-8  "
      variants={containerVariant}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true }}
      ref={ref}
    >
      <>
        <SectionHeadline txt={t("why.intro")} />
        {whyMeData.map((_, i) => (
          <WhyMeCard key={i} i={i} />
        ))}
      </>
    </motion.div>
  );

  return <Section data={data} ref={ref} />;
};
export default WhyMe;

const WhyMeCard = ({ i }) => {
  const { t } = useTranslation();
  const progress = i / (whyMeData.length - 1);
  const leftValue = `calc(${progress * 100}% - ${progress * 32}rem)`;
  const cardVariant = {
    hidden: { opacity: 0, x: i % 2 === 0 ? "-50vw" : "50vw" },
    shown: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.ul
      key={i}
      className={`flex rounded-lg bg-dk-primary py-3 divide-x max-w-xl text-base md:relative mx-auto md:mx-0 divide-dk-secondary border border-dk-secondary hover:shadow-castum  hover:text-dk-primary-bg ${
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
          <span className="font-bold capitalize">{t(`why.${i}.span`)}</span>
          {t(`why.${i}.p`)}
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
            repeatDelay: 0.5,
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
        "M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3",
        "M2 11v5a2 2 0 002 2h16a2 2 0 002-2v-5a2 2 0 00-4 0v2H6v-2a2 2 0 00-4 0zM4 18v2M20 18v2M12 4v9",
      ],
      strokeWidth: 0.8,
    },
  },
  {
    path: {
      viewBox: "0 0 1024 1024",
      ds: [
        "M945 412H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h256c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM811 548H689c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h122c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM477.3 322.5H434c-6.2 0-11.2 5-11.2 11.2v248c0 3.6 1.7 6.9 4.6 9l148.9 108.6c5 3.6 12 2.6 15.6-2.4l25.7-35.1v-.1c3.6-5 2.5-12-2.5-15.6l-126.7-91.6V333.7c.1-6.2-5-11.2-11.1-11.2z",
        "M804.8 673.9H747c-5.6 0-10.9 2.9-13.9 7.7-12.7 20.1-27.5 38.7-44.5 55.7-29.3 29.3-63.4 52.3-101.3 68.3-39.3 16.6-81 25-124 25-43.1 0-84.8-8.4-124-25-37.9-16-72-39-101.3-68.3s-52.3-63.4-68.3-101.3c-16.6-39.2-25-80.9-25-124 0-43.1 8.4-84.7 25-124 16-37.9 39-72 68.3-101.3 29.3-29.3 63.4-52.3 101.3-68.3 39.2-16.6 81-25 124-25 43.1 0 84.8 8.4 124 25 37.9 16 72 39 101.3 68.3 17 17 31.8 35.6 44.5 55.7 3 4.8 8.3 7.7 13.9 7.7h57.8c6.9 0 11.3-7.2 8.2-13.3-65.2-129.7-197.4-214-345-215.7-216.1-2.7-395.6 174.2-396 390.1C71.6 727.5 246.9 903 463.2 903c149.5 0 283.9-84.6 349.8-215.8 3.1-6.1-1.4-13.3-8.2-13.3z",
      ],
      strokeWidth: "1.5rem",
    },
  },

  {
    path: {
      viewBox: "0 0 16 15",
      ds: [
        "M5 3a3 3 0 116 0 3 3 0 01-6 0zm7.001 4h-.553l-3.111 6.316L9.5 7.5 8 6 6.5 7.5l1.163 5.816L4.552 7h-.554c-1.999 0-1.999 1.344-1.999 3v5h12v-5c0-1.656 0-3-1.999-3z",
      ],
      strokeWidth: 0.5,
    },
  },
];
