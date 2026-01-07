'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is this course actually real?',
    answer: 'As real as your belief in it. We\'re using cutting-edge quantum education technology - it exists and doesn\'t exist simultaneously until you pay.',
  },
  {
    question: 'What if I\'m NOT easily fooled?',
    answer: 'That\'s exactly what someone who\'s easily fooled would say. Congratulations, you\'re already a perfect fit!',
  },
  {
    question: 'Will I become an AI expert?',
    answer: 'You\'ll become something, that\'s for sure. Whether "expert" is the right word is a philosophical question we\'re not qualified to answer.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer something better than refunds: the gift of learning from your mistakes. You\'re welcome.',
  },
  {
    question: 'How long does the course take?',
    answer: 'Anywhere from 3 minutes to infinity, depending on how long it takes you to realize what\'s happening.',
  },
  {
    question: 'Are the testimonials real?',
    answer: 'As real as the cake in Portal. But hey, you clicked this far, so does it really matter?',
  },
  {
    question: 'What makes Pyramid different from other AI courses?',
    answer: 'Unlike other courses, we\'re honest about being questionable. That\'s basically transparency, which is a virtue.',
  },
  {
    question: 'Can I put this certification on LinkedIn?',
    answer: 'You can put anything on LinkedIn. Whether you *should* is a different conversation with your future employer.',
  },
];

export default function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-purple-950/20 to-transparent" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Frequently Awkward Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            The questions people ask before making questionable decisions
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs?.map?.((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-purple-900/30 to-black/50 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400/60 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq?.question ?? ''}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                    {faq?.answer ?? ''}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
