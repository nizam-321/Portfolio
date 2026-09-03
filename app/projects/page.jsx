'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'Gigflow',
    description: 'Gigflow is a freelance marketplace platform where clients can post jobs and freelancers can apply. It features job management, user profiles, and a streamlined workflow.',
    image: '/projects/gigflow.png',
    tech: ['React', 'Tailwind CSS', 'Redux', 'Node/Express', 'MongoDB', 'JWT'],
    demo: 'https://gigflow-sage.vercel.app',
    code: 'https://github.com/nizam-321/gigflow'
  },
  {
    title: 'Finance Manager',
    description: 'A comprehensive finance tracking application that helps users manage their income, expenses, and budgets with intuitive charts and reports.',
    image: '/projects/findash.png',
    tech: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'Lucide React'],
    demo: 'https://finance-manager-chi-three.vercel.app/',
    code: 'https://github.com/nizam-321/finance-manager'
  },
  {
    title: 'AI Movie Insight Builder',
    description: 'An AI-powered application that provides deep insights, summaries, and recommendations for movies using advanced language models.',
    image: '/projects/movie-insight.png',
    tech: ['Next.js', 'React', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://ai-movie-insight-builder-xi.vercel.app/',
    code: 'https://github.com/nizam-321/AI-Movie-Insight-Builder'
  },
  {
    title: 'Brigade Sevilla',
    description: 'A luxury real estate project showcase website featuring high-quality imagery, amenities details, and interactive floor plans.',
    image: '/projects/grigade-sevilla.png',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    demo: 'https://brigade-sevilla.vercel.app/',
    code: 'https://github.com/nizam-321/Brigade-Sevilla'
  },
  {
    title: 'Task Manager',
    description: 'An advanced task management system with category filtering, priority levels, and persistent storage for better productivity.',
    image: '/projects/task-manager.png',
    tech: ['Next.js', 'Tailwind CSS', 'Context API','Node/Express', 'MongoDB', 'JWT' ],
    demo: 'https://task-manager-5jqj.vercel.app/',
    code: 'https://github.com/nizam-321/task-manager'
  },
  {
    title: 'Vichar - Blog (Full Stack)',
    description: 'Vichar is a full-stack blogging platform with user authentication, CRUD posts, comments, and rich text editing. Built as a full-stack app with Next.js and a Node/Mongo backend.',
    image: '/projects/vichar.png', 
    tech: ['Next.js', 'Node/Express', 'MongoDB', 'Tailwind CSS', 'Authentication'],
    demo: 'https://vichar-blog.vercel.app', 
    code: 'https://github.com/nizam-321/Vichar-blog-fullStack-webApplication'
  },
  {
    title: 'FlipKart Clone',
    description: 'A clean and responsive Flipkart-like e-commerce website built with Next.js 14 and Tailwind CSS. It features modern UI components and works well on all devices.',
    image: '/projects/project2.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'React Icons'],
    demo: 'https://flipkart-clone-gilt-two.vercel.app',
    code: 'https://github.com/nizam-321/FlipKart-Clone'
  },
  {
  title: 'Financial Dashboard (Next.js)',
  description: 'A responsive financial dashboard built with Next.js 15 and Tailwind CSS. It features stat cards (AUM, SIP), filterable time ranges, charts (bubble, bar-line composites, multi-line MIS), PDF export, and can be packaged as a mobile app via Capacitor.',
  image: '/projects/project-financial-dashboard.png', // please replace with your screenshot file path
  tech: ['Next.js (App Router)', 'Tailwind CSS', 'react-chartjs-2', 'html‑to‑image', 'jsPDF', 'Capacitor (Android/iOS)'],
  demo: 'https://fininacial-dashboard-assignment.vercel.app',
  code: 'https://github.com/nizam-321/fininacial-dashboard-assignment'
},
  {
  title: 'QuickArt',
  description: 'QuickArt is a modern art e-commerce platform that allows users to browse and purchase digital art. Built with Next.js 14, Tailwind CSS, and App Router.',
  image: '/projects/project4.png', 
  tech: ['Next.js', 'React', 'Tailwind CSS', 'App Router'],
  demo: 'https://quickart-coral.vercel.app/', 
  code: 'https://github.com/nizam-321/quickart'
 }, 
 {
  title: 'Weather Now',
  description: 'A simple weather app built with React, Tailwind CSS, and Vite. It uses the Open-Meteo API to fetch real-time weather data for any city, with responsive design and error handling.',
  image: '/projects/project6.png', 
  tech: ['React', 'Tailwind CSS', 'Vite', 'Open-Meteo API'],
  demo: 'https://weather-now-assignment-by-aganitha.vercel.app/',
  code: 'https://github.com/nizam-321/weather-now-assignment-by-Aganitha'
 },
   {
    title: 'QR Code Generator',
    description: 'A minimal and fast QR Code Generator built with HTML, CSS, JavaScript and QR Code API / Library. It allows users to enter text and instantly generate a scannable QR code.',
    image: '/projects/project5.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'QR Code API'],
    demo: 'https://qr-code-generator-beta-tawny.vercel.app/',
    code: 'https://github.com/nizam-321/QR-Code-Generator'
  }
  
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
          Here are some of the web applications and tools I&apos;ve built recently.
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
