'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Sparkles, Crown, Rocket } from 'lucide-react';
import { useState } from 'react';

const pricingTiers = [
  {
    name: 'Gullible',
    icon: Sparkles,
    price: '$29',
    period: '/month',
    description: 'Perfect for beginners who believe everything',
    features: [
      { text: 'Access to 3 modules', included: true },
      { text: 'Email support (we might reply)', included: true },
      { text: 'Certificate of Participation', included: true },
      { text: 'Bragging rights', included: true },
      { text: 'Actual AI knowledge', included: false },
      { text: 'Money back guarantee', included: false },
    ],
    cta: 'Start Believing',
    popular: false,
  },
  {
    name: 'Foolish',
    icon: Crown,
    price: '$79',
    period: '/month',
    description: 'For those ready to be completely fooled',
    features: [
      { text: 'Access to ALL modules', included: true },
      { text: 'Priority email support (still might not reply)', included: true },
      { text: 'Certificate of Excellence', included: true },
      { text: 'Exclusive Discord channel', included: true },
      { text: 'Weekly "motivational" memes', included: true },
      { text: 'Understanding of how we fooled you', included: false },
    ],
    cta: 'Embrace the Foolishness',
    popular: true,
  },
  {
    name: 'Absolutely Hopeless',
    icon: Rocket,
    price: '$199',
    period: '/month',
    description: 'For people with more money than sense',
    features: [
      { text: 'Everything in Foolish', included: true },
      { text: '1-on-1 coaching (via Zoom, camera optional)', included: true },
      { text: 'Personalized certificate with YOUR name', included: true },
      { text: 'Lifetime access*', included: true },
      { text: 'Your name on our "Hall of Fame"', included: true },
      { text: 'Guaranteed enlightenment', included: true },
    ],
    cta: 'Take My Money',
    popular: false,
    disclaimer: '*Lifetime = Until we shut down',
  },
];

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCTAClick = (tierName: string) => {
    alert(`Congratulations! You just proved you're exactly who we're looking for. 🎉\n\nTier: ${tierName}\n\n(This is a joke course. No actual payment required!)`);
  };

  return (
    <section id="pricing" className="py-24 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Choose Your Level of Gullibility</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            All plans include our signature blend of education and deception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers?.map?.((tier, index) => {
            const Icon = tier?.icon;
            const isPopular = tier?.popular;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  isPopular
                    ? 'border-purple-400 scale-105 shadow-2xl shadow-purple-500/30'
                    : 'border-purple-500/30 hover:border-purple-400/60 hover:scale-105'
                } ${hoveredIndex === index ? 'shadow-xl shadow-purple-500/20' : ''}`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-block mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600/30 blur-xl rounded-full" />
                      {Icon && <Icon className="w-12 h-12 text-purple-400 relative z-10" />}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier?.name ?? ''}</h3>
                  <p className="text-sm text-gray-400 mb-4">{tier?.description ?? ''}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold gradient-text">{tier?.price ?? ''}</span>
                    <span className="text-gray-400 ml-2">{tier?.period ?? ''}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier?.features?.map?.((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature?.included ? (
                        <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature?.included ? 'text-gray-300' : 'text-gray-600 line-through'}>
                        {feature?.text ?? ''}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCTAClick(tier?.name ?? '')}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isPopular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white glow-purple'
                      : 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/50'
                  } hover:scale-105`}
                >
                  {tier?.cta ?? ''}
                </button>

                {tier?.disclaimer && (
                  <p className="text-xs text-gray-500 text-center mt-4 italic">
                    {tier?.disclaimer}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-400 mt-12 text-sm"
        >
          All prices are in imaginary currency. No actual purchase required (or possible).
        </motion.p>
      </div>
    </section>
  );
}
