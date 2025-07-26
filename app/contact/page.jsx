'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [success, setSuccess] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm('service_71nq7rh', 'template_5kf1825', form.current, {
        publicKey: 'kqH8ZCAJU60T-rONs',
      })
      .then(
        () => {
          setSuccess(true)
          setFormData({ name: '', email: '', message: '' })
          setIsSending(false)
          setTimeout(() => setSuccess(false), 5000)
        },
        (error) => {
          console.error('FAILED...', error.text)
          setIsSending(false)
        }
      )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-10">
          Have a question or want to work together? Fill out the form below.
        </p>
      </motion.div>

      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-md shadow-md transition-all duration-300">
            <h2 className="font-semibold text-lg">Message sent successfully!</h2>
            <p className="text-sm mt-1">
              Thanks for reaching out. I’ll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>
      )}

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-md font-medium transition-opacity duration-300 ${isSending ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
            }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      {/* Social Links */}
      <div className="max-w-2xl mx-auto mt-10 text-center">
        <p className="text-gray-600 mb-4 text-lg">Or connect with me directly:</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://wa.me/917017053793"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 text-4xl transition-colors"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="mailto:nizam.frontend@gmail.com"
            className="text-blue-600 hover:text-blue-800 text-4xl transition-colors"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.linkedin.com/in/nizam-ahmed-833090357/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 text-4xl hover:text-blue-900 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}

