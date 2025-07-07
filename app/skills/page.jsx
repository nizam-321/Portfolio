'use client'

import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaNodeJs, FaNpm  } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiFigma, SiExpress, SiMongodb } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
   { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'npm', icon: <FaNpm className="text-red-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> }

]

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Clean Code Practices',
  'Communication Skills',
  'Time Management',
  'Adaptability'
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">My Skills</h1>
        <p className="text-gray-600 text-lg mb-10">
          These are the technologies and soft skills I bring to the table to help build high-quality web experiences.
        </p>
      </motion.div>

      {/* Tech Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center transition duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Soft Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Other Professional Skills</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
          {softSkills.map((item, idx) => (
            <li key={idx} className="bg-white rounded-lg py-3 px-5 shadow">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
