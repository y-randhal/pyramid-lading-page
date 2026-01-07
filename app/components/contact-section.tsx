'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e?.preventDefault?.();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: any) => {
    const target = e?.target;
    const name = target?.name;
    const value = target?.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Still Have Questions?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Contact us! We promise to read at least the first sentence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/40 to-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center">
                  <Mail className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message Received! (Probably)
              </h3>
              <p className="text-gray-300">
                We'll get back to you faster than you can say "artificial intelligence."<br />
                (That's not a promise, just a fun saying.)
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-purple-300 mb-2">
                  Your Name (or alias)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData?.name ?? ''}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="John Doe (definitely not a bot)"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-purple-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email ?? ''}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="definitely.real@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-purple-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData?.message ?? ''}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  placeholder="Tell us why you're here (bonus points for honesty)"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 glow-purple hover:scale-105 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Into The Void
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Average response time: Somewhere between immediately and never
          </p>
        </motion.div>
      </div>
    </section>
  );
}
