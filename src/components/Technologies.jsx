<<<<<<< HEAD
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiTensorflow, SiGooglebigquery } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
=======
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <FaPython className="text-7xl text-green-400" />
=======
          <RiReactjsLine className="text-7xl text-cyan-400" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <FaAws className="text-7xl text-orange-500" />
=======
          <TbBrandNextjs className="text-7xl text-white" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <FaDocker className="text-7xl text-blue-500" />
=======
          <SiMongodb className="text-7xl text-green-500" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <SiTensorflow className="text-7xl text-orange-500" />
=======
          <DiRedis className="text-7xl text-red-700" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
        <motion.div
          variants={iconVariants(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <FaGithub className="text-7xl text-white" />
=======
          <FaNodeJs className="text-7xl text-green-500" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
        <motion.div
          variants={iconVariants(1.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <SiGooglebigquery className="text-7xl text-sky-700" />
=======
          <BiLogoPostgresql className="text-7xl text-sky-700" />
>>>>>>> b6832e975cce9ac05c3e7ff64af3411b0c71c348
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
