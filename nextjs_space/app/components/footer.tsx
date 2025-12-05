'use client';

import { Github, Twitter, Linkedin, Youtube, Eye } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const currentYear = new Date()?.getFullYear?.() ?? 2024;

  return (
    <footer className="border-t border-purple-500/20 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold gradient-text">PYRAMID</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Making AI education questionable since 2024.
              <br />
              Because learning should be an adventure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms (That You Won't Read)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy (What Privacy?)
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Our Journey</h3>
            <div className="flex gap-4">
              {socialLinks?.map?.((social, index) => {
                const Icon = social?.icon;
                return (
                  <a
                    key={index}
                    href={social?.href ?? '#'}
                    aria-label={social?.label ?? ''}
                    className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 hover:border-purple-400/60 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    {Icon && <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />}
                  </a>
                );
              })}
            </div>
            <p className="text-gray-500 text-xs mt-4 italic">
              (These links go nowhere, just like your career after taking this course)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Pyramid AI Course. All rights reserved. (But who's checking?)
          </p>
          <p className="text-gray-500 text-xs italic">
            No actual AI was harmed in the making of this website.
          </p>
        </div>
      </div>
    </footer>
  );
}
