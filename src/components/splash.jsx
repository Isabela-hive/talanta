import './styles/splash.css';
import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Splash extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ easing: 'ease-in-out' }}
        exit={{ opacity: 0 }}
        className="splash"
      >
        <div className="scroll-effect">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </motion.div>
    );
  }
}
