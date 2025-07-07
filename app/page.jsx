'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50 to-blue-50 overflow-hidden pt-24">
      
      {/* Glowing Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Nizam</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-xl mx-auto mb-8"
        >
          I'm a Frontend Developer focused on building clean and performant web apps using modern tools like React, Next.js, and Tailwind CSS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/projects">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition">
              View Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-full border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
