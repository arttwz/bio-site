import React from 'react';
import { motion } from 'framer-motion';

export const GlitchText = ({ children }) => {
  return (
    <motion.h1
      className="text-4xl font-black text-white tracking-tighter"
      whileHover={{
        x: [-2, 2, -2, 0],
        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.h1>
  );
};
