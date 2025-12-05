'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah C.',
    role: 'Former Skeptic',
    content: 'I thought this was a joke, but then I paid anyway. Still not sure what happened.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Mike T.',
    role: 'Professional Fool',
    content: 'As someone who\'s easily fooled, I can confirm this course is perfect for me!',
    rating: 5,
    avatar: 'MT',
  },
  {
    name: 'Emily R.',
    role: 'AI Expert (Self-Proclaimed)',
    content: 'After this course, I still don\'t understand AI, but I sound smarter at parties.',
    rating: 5,
    avatar: 'ER',
  },
  {
    name: 'David L.',
    role: 'Guy Who Clicked the Ad',
    content: 'I came for the memes, stayed for the questionable life choices. 10/10 would click again.',
    rating: 5,
    avatar: 'DL',
  },
  {
    name: 'Jessica M.',
    role: 'Proud Pyramid Graduate',
    content: 'My mom thinks I\'m a data scientist now. Worth every penny.',
    rating: 5,
    avatar: 'JM',
  },
  {
    name: 'Tom B.',
    role: 'Serial Course Buyer',
    content: 'I\'ve bought 47 online courses. This is definitely one of them.',
    rating: 5,
    avatar: 'TB',
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-950/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Real People, Real Confusion</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Take theirs! (They signed waivers.)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map?.((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-500/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold">
                  {testimonial?.avatar ?? ''}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial?.name ?? ''}</h4>
                  <p className="text-sm text-purple-300">{testimonial?.role ?? ''}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array?.from?.({ length: testimonial?.rating ?? 0 })?.map?.((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-purple-400 text-purple-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial?.content ?? ''}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
