import React from 'react';
import { motion } from 'framer-motion';

export const SocialLinks = ({ links }) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          whileHover={{ y: -5, scale: 1.1 }}
          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          {/* Ícones seriam renderizados aqui via react-icons */}
          <span className="text-white">{link.title}</span>
        </motion.a>
      ))}
    </div>
  );
};
