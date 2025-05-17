'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaHandsHelping,
  FaDonate,
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from 'react-icons/fa'

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const ctaButtons = [
    {
      id: 1,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers making a difference in the community.',
      icon: <FaHandsHelping className="w-6 h-6" />,
      color: 'from-emerald-600 to-emerald-700',
      hoverColor: 'from-emerald-700 to-emerald-800',
    },
    {
      id: 2,
      title: 'Donate',
      description: 'Support our initiatives with a contribution of any size.',
      icon: <FaDonate className="w-6 h-6" />,
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'from-amber-600 to-amber-700',
    },
    {
      id: 3,
      title: 'Join Mailing List',
      description: 'Stay updated with our latest news and community events.',
      icon: <FaEnvelopeOpenText className="w-6 h-6" />,
      color: 'from-emerald-600 to-emerald-700',
      hoverColor: 'from-emerald-700 to-emerald-800',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-40 bg-emerald-50 -skew-y-6 -translate-y-20 transform origin-top-right"></div>
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Get Involved Today</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Together we can make a difference. Join our movement and help shape the future of our
            community.
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-8 text-emerald-50">
                  Have questions? Want to learn more about how you can get involved? Reach out to us
                  directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Call Us</p>
                      <p className="text-lg">(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaEnvelope className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Email Us</p>
                      <p className="text-lg">contact@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Visit Us</p>
                      <p className="text-lg">123 Community Avenue</p>
                      <p className="text-emerald-100">District Office, Building 4</p>
                      <p className="text-emerald-100">Constituency Area, CO 12345</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

                {submitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Thank You!</h4>
                    <p>Your message has been received. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="volunteer">Volunteering</option>
                        <option value="donate">Making a Donation</option>
                        <option value="question">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none transition-colors"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg shadow-md transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
