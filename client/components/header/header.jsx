"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ y: -2000, opacity: 0 }} // Starting position (lower y value means it's off-screen)
      animate={{ y: 0, opacity: 1 }} // Ending position (y: 0 means it's at its final position)
      transition={{ delay: 0.4 }} // Delay before animation starts
    >
      <div className="title">AWS Certified Cloud practitioner</div>
    </motion.div>
  );
};

export default Header;