'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, TrendingUp, Shield, Users, Laugh } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Learn AI using AI. It\'s so meta, even this acronym.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Results',
    description: 'Become an AI expert in just 3 easy payments of $99.99!',
  },
  {
    icon: TrendingUp,
    title: '100% Success Rate',
    description: '60% of the time, it works every time. That\'s just science.',
  },
  {
    icon: Shield,
    title: 'Certified by Ourselves',
    description: 'We created our own certification board. Very official.',
  },
  {
    icon: Users,
    title: 'Join Thousands',
    description: 'Thousands of people have visited this page. Some even stayed!',
  },
  {
    icon: Laugh,
    title: 'Fun Guaranteed',
    description: 'If you don\'t laugh, you probably learned something. Win-win!',
  },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Why Choose Pyramid?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Because making questionable life decisions builds character
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map?.((feature, index) => {
            const Icon = feature?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-purple-900/30 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="mb-4 relative inline-block">
                  <div className="absolute inset-0 bg-purple-600/30 blur-xl rounded-full" />
                  {Icon && <Icon className="w-12 h-12 text-purple-400 relative z-10" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature?.title ?? ''}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature?.description ?? ''}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
