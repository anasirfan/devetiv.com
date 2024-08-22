import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import transformImg1 from '../../../public/assets/images/about/transform/transform1.png';
import transformImg2 from '../../../public/assets/images/about/transform/transform2.png';
import transformImg3 from '../../../public/assets/images/about/transform/transform3.png';

const data = [
  {
    img: transformImg1,
    title: "Diverse team. One goal:",
    strongTitle: "Deliver excellence.",
    description:
      "Devetiv was founded as a place where digital development professionals obsessed with service quality and value-rich delivery build lasting software solutions for our clients. And that’s what we have been doing.",
  },
  {
    img: transformImg2,
    title: "Innovative Solutions for:",
    strongTitle: "Modern Challenges.",
    description:
      "Our innovative solutions are designed to meet the modern challenges of today's digital world. We aim to deliver high-quality services that exceed our clients' expectations.",
  },
  {
    img: transformImg3,
    title: "Creative Minds. Dedicated to:",
    strongTitle: "Quality Service.",
    description:
      "Our team consists of creative minds dedicated to providing quality service and building robust software solutions that cater to the unique needs of our clients.",
  },
];

const fadeVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 1, ease: "easeInOut" } }
};

const Transform = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div data-aos="zoom-in" className="flex space-x-12 justify-center py-12 sm:flex-col sm:justify-start sm:w-[90%] sm:mx-auto sm:py-4 sm:space-x-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="basis-1/3 flex justify-center sm:my-4 sm:basis-1/2"
        >
          <Image
            src={data[index].img}
            alt="transform-Image"
            className="h-[570px] w-[420px] sm:h-[300px] sm:w-[250px] md:h-[350px] md:w-[300px] md:self-center"
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="basis-2/3 flex flex-col justify-center align-middle sm:py-4 sm:basis-1/2"
        >
          <h4 className="text-[79px] leading-[84px] pb-6 font-normal sm:text-[25px] sm:leading-[36px] md:text-[60px] md:leading-[60px]">
            <span className="text-black">{data[index].title}</span>{" "}
            <strong className="leading-[84px] font-normal sm:leading-[36px] sm:text-[20px] md:text-[50px] md:leading-[60px]">
              {data[index].strongTitle}
            </strong>
          </h4>
          <p className="text-[#4B4B4B] text-[20px] sm:text-[16px] md:text-[18px]">
            {data[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transform;
