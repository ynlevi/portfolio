import React, { forwardRef, useState } from "react";
import Section from "../../componets/Section.jsx";
const Contact = forwardRef((_, ref) => {
  const data = <ContactForm />;
  return (
    <Section
      className={"max-w-xl my-[20vh] "}
      header={"Let's have a chat:)"}
      data={data}
      ref={ref}
    />
  );
});
export default Contact;

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/602f7b20-4252-11ee-b711-0fdc810d0d65";

const ContactForm = () => {
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
      <div className="border border-dk-secondary text-dk-secondary p-4 rounded-lg-lg mx-auto max-w-xl">
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I'll be in touch soon.</div>
      </div>
    );
  }
  const castumInput =
    "focus:outline-none focus:ring ring-dk-primary relative w-full px-3 py-3 text-sm text-dk-secondary-bg placeholder:text-dk-primary bg-white border-0 rounded-lg shadow outline-none font-mono ";

  return (
    <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className={castumInput}
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className={castumInput}
          required
        />
      </div>

      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          className={castumInput}
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:scale-75 focus:outline-none focus:ring focus:ring-dk-secondary-bg px-6 py-3 mb-1 mr-1 text-sm font-bold text-dk-secondary-bg bg-dk-secondary uppercase transition-all duration-150 ease-linear rounded-lg shadow hover:shadow-dk-primary "
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};
