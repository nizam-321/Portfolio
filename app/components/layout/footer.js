'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-24 bg-white border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Portfolio
          </h3>
          <p className="text-sm text-gray-500 mt-2 leading-relaxed">
            Crafted with ❤️ using Next.js and Tailwind CSS to showcase my work and skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-gray-700 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Skills', href: '/skills' },
              { label: 'Projects', href: '/projects' },
              { label: 'Contact', href: '/contact' },
              { label: 'Resume', href: '/resume.pdf' }
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-purple-600 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-md font-semibold text-gray-700 mb-3">Connect with me</h4>
          <div className="flex space-x-4 text-gray-600 text-xl">
            <a
              href="https://github.com/nizam-321"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nizam-ahmed-833090357/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:nizam.frontend@gmail.com"
              className="hover:text-purple-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 text-center text-sm text-gray-500 py-4">
        © {year} Nizam. All rights reserved.
      </div>
    </motion.footer>
  )
}
