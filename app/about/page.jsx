'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.div 
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 text-lg mb-10">
          I’m a frontend-focused web developer with a passion for building fast, responsive, and user-friendly applications.
          With a strong foundation in modern JavaScript frameworks and styling libraries, I love turning creative ideas into functional, beautiful websites.
        </p>
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img 
            src="/profile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div 
          className="text-left"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            I'm a self-taught developer who enjoys learning by building. My main focus is on frontend development using tools like React.js, Next.js, and Tailwind CSS.
            I’m also familiar with backend technologies like Node.js, Express, and MongoDB, which helps me understand full-stack application flow.
          </p>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">What I Work With:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React.js, Next.js, JavaScript (ES6+)</li>
            <li>Tailwind CSS, Bootstrap, HTML, CSS</li>
            <li>Node.js, Express.js, MongoDB (basic familiarity)</li>
            <li>Responsive Design, Performance, Clean Code</li>
            <li>Version Control with Git & GitHub</li>
          </ul>
          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Education:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>M.sc Computer Science (2025)</li>
            <li>B.sc Computer Science (2022)</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
