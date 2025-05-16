'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaHeartbeat, FaUsers, FaChevronRight } from 'react-icons/fa'

export default function Vision() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 },
    },
  }

  // Vision cards data
  const visionCards = [
    {
      id: 1,
      title: 'Education Reform',
      description:
        'Modernizing our education system with digital learning, teacher training, and infrastructure improvements for all schools to ensure every child has access to quality education.',
      icon: <FaGraduationCap className="w-8 h-8 text-white" />,
      iconBg: 'bg-emerald-600',
      keyPoints: [
        'Free school supplies for all primary students',
        'Technology integration in every classroom',
        'Scholarship fund for 1,000 deserving students annually',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Access',
      description:
        'Expanding healthcare facilities, increasing medical personnel, and implementing affordable healthcare programs to ensure every community member has access to quality medical care.',
      icon: <FaHeartbeat className="w-8 h-8 text-white" />,
      iconBg: 'bg-amber-600',
      keyPoints: [
        'New health centers in underserved areas',
        'Mobile clinic program for remote communities',
        'Subsidized medicine for chronic conditions',
      ],
    },
    {
      id: 3,
      title: 'Women & Youth Inclusion',
      description:
        'Creating opportunities for women and youth through skills training, entrepreneurship programs, and representation in decision-making bodies to drive community development.',
      icon: <FaUsers className="w-8 h-8 text-white" />,
      iconBg: 'bg-emerald-600',
      keyPoints: [
        'Youth entrepreneurship fund with mentorship',
        "Women's leadership development program",
        'Community youth centers in every ward',
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-full h-40 bg-emerald-50 -skew-y-6 translate-y-20 transform origin-bottom-left"></div>
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            My Vision for the Future
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Moving forward with bold initiatives that will transform our community and create
            sustainable growth for generations to come.
          </p>
        </motion.div>

        {/* Vision cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {visionCards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-6">
                {/* Icon */}
                <div
                  className={`${card.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  {card.icon}
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-700 mb-6">{card.description}</p>

                {/* Key points */}
                <ul className="space-y-3 mb-6">
                  {card.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn more link */}
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
                >
                  Learn more <FaChevronRight className="ml-2 w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            These priorities are just the beginning. My comprehensive plan addresses all aspects of
            community development, infrastructure, economic growth, and social welfare.
          </p>

          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-bold shadow-lg hover:from-emerald-800 hover:to-emerald-700 transition-all duration-300">
            Read Full Agenda
            <FaChevronRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
