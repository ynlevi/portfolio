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
    <Section
      className={"max-w-xl my-[10vh] "}
      header={t("header.links.3")}
      data={data}
      ref={ref}
      dir={"auto"}
    />
  );
});
export default Contact;

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/602f7b20-4252-11ee-b711-0fdc810d0d65";

const ContactForm = () => {
  const { t } = useTranslation();
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
    <div>
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
            className="active:scale-75 focus:outline-none outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-dk-primary-bg bg-dk-secondary uppercase transition-all duration-150 ease-linear rounded-lg border-dk-primary border-2 hover:bg-dk-primary hover:text-dk-secondary hover:border-dk-secondary"
            type="submit"
          >
            {t("contact.send")}
          </button>
        </div>
      </form>
      <div className=" flex gap-8 justify-center mt-20">
        {contactIcons.map((comp, i) => (
          <BtnIcon key={i} {...comp} />
        ))}
      </div>
    </div>
  );
};

function BtnIcon({ name, href }) {
  return (
    <motion.button
      className="h-10 w-10 bg-dk-primary-bg text-dk-primary  hover:scale-105 hover:text-dk-secondary duration-200 "
      whileTap={{ zoom: 0.9 }}
    >
      <a href={href}>{name}</a>
    </motion.button>
  );
}

const castumIcon =
  "h-10 w-10 bg-dk-primary-bg text-dk-primary  hover:scale-105 hover:text-dk-secondary duration-200 ";

const contactIcons = [
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
