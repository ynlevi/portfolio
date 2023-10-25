import SectionHeadline from "../../componets/SectionHeadline";
import Section from "../../componets/Section";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useRef } from "react";
import { motion } from "framer-motion";
function Offer() {
  const ref = useRef();
  const data = (
    <div className="max-w-3xl mx-auto" ref={ref}>
      <SectionHeadline txt={"Here is what I offer:"} />
      <motion.div
        className="bg-dk-primary text-dk-primary-bg rounded-lg mt-3 px-3  gap-3 flex flex-col border-2 border-dk-secondary hover:shadow-castum shadow-white divide-y font-light divide-dk-secondary pt-4 pb-7"
        initial={{ opacity: 0, y: "25px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        viewport={{ once: true }}
      >
        {details.map((detail) => (
          <Detail {...detail} />
        ))}
      </motion.div>
    </div>
  );
  return <Section data={data} ref={ref} />;
}

export default Offer;

const Detail = ({ span, p }) => {
  return (
    <div className="flex gap-2 text-base pt-2 ">
      <div className="pt-2">
        <IoMdCheckmarkCircleOutline />
      </div>
      <p>
        <span className="font-bold">{span}</span>
        {p}
      </p>
    </div>
  );
};

const details = [
  {
    span: "Custom Website Design: ",
    p: "I craft unique, eye-catching websites tailored specifically to your business needs and industry.",
  },
  {
    span: "Responsive & Modern Design: ",
    p: "Your website will not only be responsive across all devices but also adorned with modern design elements and captivating effects. This gives your business a contemporary and up-to-date image.",
  },
  {
    span: "Great SEO Technology: ",
    p: "I leverage innovative SEO technology to ensure your website performs exceptionally well in search engine rankings. includes lightning-fast server loading times, that greatly enhancing your online visibility and providing an optimal user experience.",
  },
  {
    span: "User-Friendly Content Management: ",
    p: "You have full control over your website's content through an easy-to-use platform.",
  },
  {
    span: "Customer Support: ",
    p: "I believe in exceptional customer service. I'm with you every step of the way, ready to assist with any problem or technical issue you may encounter. Your success is my priority.",
  },
];
