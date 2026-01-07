'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document?.getElementById('contact');
    contactSection?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 mb-20 lg:mb-32">
        {mounted && (
          <>
            {/* Eye of the Pyramid */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-purple-600/30 blur-2xl rounded-full animate-pulse" />
                <Eye className="w-32 h-32 text-purple-400 relative z-10 animate-float" />
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="gradient-text">PYRAMID</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-purple-400" />
                <p className="text-2xl md:text-3xl text-purple-300 font-light">
                  Master AI Without Actually Trying
                </p>
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              The revolutionary AI course designed for people who think they're too smart to be fooled.
              <br />
              <span className="text-purple-400 font-semibold">(Spoiler: They're not.)</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 glow-purple hover:scale-105"
              >
                Get Enlightened Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#pricing"
                className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                See Pricing
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 text-sm text-gray-400"
            >
              <p className="mb-4">Trusted by 0 Fortune 500 companies*</p>
              <p className="text-xs italic">*We're working on it</p>
            </motion.div>
          </>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
