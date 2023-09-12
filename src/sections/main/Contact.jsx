import React, { forwardRef, useState } from "react";
import Section from "../../componets/Section.jsx";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
//icons
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
const Contact = forwardRef((_, ref) => {
  const { t } = useTranslation();
  const data = <ContactForm />;
  return (
    <div className="mb-40">
      <Section
        className={"max-w-xl  "}
        header={t("header.links.3")}
        data={data}
        ref={ref}
        dir={"auto"}
      />
      <ContactIcons />
    </div>
  );
});
export default Contact;

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/602f7b20-4252-11ee-b711-0fdc810d0d65";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className="border border-dk-secondary text-dk-secondary p-4 rounded-lg-lg mx-auto max-w-xl ">
        <div className="text-2xl">{t("contact.secusses.h1")}</div>
        <div className="text-md">{t("contact.secusses.p")}</div>
      </div>
    );
  }

  const castumInput =
    "focus:outline-none focus:ring ring-dk-primary relative w-full px-3 py-3 text-sm text-dk-secondary-bg placeholder:text-dk-primary bg-white border-0 rounded-lg shadow outline-none font-mono ";
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      dir="auto"
    >
      <div className="mb-3">
        <input
          type="text"
          placeholder={t("contact.name")}
          name="name"
          className={castumInput}
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder={t("contact.email")}
          name="email"
          className={castumInput}
          required
        />
      </div>

      <div className="pt-0 mb-3">
        <textarea
          placeholder={t("contact.message")}
          name="message"
          className={castumInput}
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className={`active:scale-75 focus:outline-none outline-none px-6  font-bold text-dk-primary-bg bg-dk-secondary uppercase transition-all duration-150 ease-linear rounded-lg border-dk-primary border-2 hover:bg-dk-primary hover:text-dk-secondary hover:border-dk-secondary ${
            i18n.language === "en" ? "text-sm py-3" : "text-lg py-1"
          }`}
          type="submit"
        >
          {t("contact.send")}
        </button>
      </div>
    </form>
  );
};

const ContactIcons = () => {
  const castumConatiner = {
    hidden: { scaleX: 0 },
    shown: {
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        delay: 0.3,
        duration: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden  flex gap-8 justify-center w-fit mx-auto py-2 px-8 bg-[#1d0126] rounded-2xl drop-shadow-2xl shadow-md shadow-[#500269] duration-200 "
      variants={castumConatiner}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true }}
    >
      {icons.map((comp, i) => (
        <BtnIcon key={i} i={i} {...comp} />
      ))}
    </motion.div>
  );
};

const BtnIcon = ({ name, href, i }) => {
  const icon = {
    hidden: { opacity: 0, x: 100 + (1 + i) * 50 },
    shown: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 250, duration: 0.2 },
    },
  };
  return (
    <motion.div variants={icon} whileTap={{ scale: 0.9 }}>
      <a href={href}>{name}</a>
    </motion.div>
  );
};

const castumIcon =
  "scale-105 hover:text-dk-primary hover:scale-110 md:text-4xl text-3xl bg-[#1d0126] text-dk-secondary  duration-200 ";

const icons = [
  {
    name: <BsGithub className={castumIcon} />,
    href: "https://github.com/ynlevi",
  },
  {
    name: <SiLinkedin className={castumIcon} />,
    href: "www.linkedin.com/in/yonathan-levi",
  },
  {
    name: <SiWhatsapp className={castumIcon} />,
    href: "https://wa.me/+972507170051",
  },
];
