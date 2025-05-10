import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  // Animation configuration
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.5,
          duration: 1.5,
          ease: "easeInOut",
          onComplete: () => {
            if (i === 2) onComplete(); // Last path completed
          },
        },
        opacity: {
          delay: i * 0.5,
          duration: 0.1,
        },
      },
    }),
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.svg
        viewBox="0 0 292.6 237.6"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "240px", height: "auto" }}
        initial="hidden"
        animate="visible"
      >
        {/* First Path */}
        <motion.path
          custom={0}
          variants={pathVariants}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M64.7,168c-1.6,0-2.9,0-3.9-0.1c-1,0-2.1-0.7-3.5-1.8L8.6,126.7c-1.4-1.2-2.2-2-2.5-2.5c-0.3-0.5-0.4-1.5-0.4-2.9v-4.5c0-1.6,0.1-2.6,0.4-3.1c0.3-0.5,1.1-1.3,2.5-2.4l48.6-39.6c1.4-1.1,2.5-1.7,3.5-1.7c1,0,2.3-0.1,3.9-0.1h10.7c3.2,0,4.8,1.1,4.8,3.4v24.4c0,0.8-0.1,1.6-0.3,2.5c-0.2,0.8-0.9,1.5-2.1,1.9l-31,12.1v9.6l31,12.2c1.2,0.4,1.9,1,2.1,1.8c0.2,0.9,0.3,1.7,0.3,2.4v24.5c0,2.3-1.6,3.4-4.8,3.4H64.7z"
        />

        {/* Second Path */}
        <motion.path
          custom={1}
          variants={pathVariants}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M101.6,233.1c-2.6,0-3.7-1.2-3-3.7L152.3,7.9c0.5-2.1,1.7-3.2,3.7-3.2H191c2.6,0,3.5,1.2,2.9,3.7l-53.6,221.4c-0.5,2.2-1.8,3.3-3.7,3.3H101.6z"
        />

        {/* Third Path */}
        <motion.path
          custom={2}
          variants={pathVariants}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M228,168h-10.7c-3.2,0-4.8-1.1-4.8-3.4v-24.5c0-0.7,0.1-1.5,0.3-2.4c0.2-0.9,0.9-1.5,2.1-1.8l31-12.2v-9.6l-31-12.1c-1.2-0.5-1.9-1.1-2.1-1.9c-0.2-0.8-0.3-1.6-0.3-2.5V73.2c0-2.3,1.6-3.4,4.8-3.4H228c1.6,0,2.9,0,3.9,0.1c1,0,2.1,0.6,3.5,1.7l48.6,39.6c1.4,1.1,2.2,1.9,2.5,2.4c0.3,0.5,0.4,1.5,0.4,3.1v4.5c0,1.5-0.1,2.4-0.4,2.9c-0.3,0.5-1.1,1.3-2.5,2.5l-48.6,39.5c-1.4,1.2-2.5,1.8-3.5,1.8C230.9,168,229.6,168,228,168z"
        />
      </motion.svg>
    </div>
  );
};

export default Loader;
