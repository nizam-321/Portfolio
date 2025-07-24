'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
    image: '/projects/project1.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://codernizam.vercel.app',
    code: 'https://github.com/nizam-321/Portfolio'
  },
  {
    title: 'Todo App',
    description: 'A simple and beautiful todo app with React and localStorage.',
    image: '/projects/project2.png',
    tech: ['React', 'CSS Modules'],
    live: 'https://yourtodoapp.com',
    code: 'https://github.com/yourusername/todo-app'
  },
  {
    title: 'Blog Platform',
    description: 'A markdown-based blog platform using Next.js and Tailwind CSS.',
    image: '/projects/project3.png',
    tech: ['Next.js', 'Tailwind CSS', 'Markdown'],
    live: '#',
    code: '#'
  }
  // Add more projects as needed
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">My Projects</h1>
        <p className="text-gray-600 text-lg">
          Here are some of the web applications and tools I've built recently.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-purple-100 px-2 py-1 rounded-md">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.demo !== '#' && (
                  <Link
                    href={project.demo}
                    className="text-sm font-medium text-blue-600 hover:underline"
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                )}
                {project.code !== '#' && (
                  <Link
                    href={project.code}
                    className="text-sm font-medium text-gray-800 hover:underline"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
