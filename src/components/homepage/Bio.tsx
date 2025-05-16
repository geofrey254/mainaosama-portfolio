'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFlag,
  FaBriefcase,
  FaArrowRight,
  FaMedal,
  FaHandshake,
  FaUsers,
} from 'react-icons/fa'

export default function Bio() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
      transition: { duration: 0.3 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: '0 10px 25px -5px rgba(4, 120, 87, 0.3)',
      transition: { duration: 0.3 },
    },
  }

  // Credentials data
  const credentials = [
    {
      icon: <FaCalendarAlt className="w-5 h-5 text-amber-600" />,
      label: 'Years of Service',
      value: '10+ Years',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-amber-600" />,
      label: 'Constituency',
      value: 'Westlands',
    },
    {
      icon: <FaFlag className="w-5 h-5 text-amber-600" />,
      label: 'Party',
      value: 'Democratic Alliance',
    },
    {
      icon: <FaBriefcase className="w-5 h-5 text-amber-600" />,
      label: 'Role',
      value: 'Member of Parliament',
    },
  ]

  // Core values data
  const coreValues = [
    {
      icon: <FaHandshake />,
      title: 'Integrity',
      description: 'Ethical leadership built on honesty and accountability',
    },
    {
      icon: <FaUsers />,
      title: 'Community',
      description: 'Serving people through inclusive, participatory governance',
    },
    {
      icon: <FaMedal />,
      title: 'Excellence',
      description: 'Committed to the highest standards in public service',
    },
  ]

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white to-emerald-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-emerald-50 opacity-50 transform -skew-y-2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 rounded-tl-full bg-amber-50 opacity-30"></div>
      <div className="absolute top-1/4 right-10 w-8 h-8 rounded-full bg-emerald-200 opacity-20"></div>
      <div className="absolute bottom-1/4 left-10 w-12 h-12 rounded-full bg-amber-200 opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Hon. Peter Maina
          </h2>
          <div className="w-24 h-1.5 bg-emerald-700 mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column - Photo and credentials */}
          <motion.div
            className="col-span-1 lg:col-span-5 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl mx-auto max-w-md lg:max-w-full"
              variants={imageVariants}
            >
              {/* Main photo */}
              <div className="aspect-[4/5] relative">
                <Image
                  src="/speech.png"
                  alt="Hon. Peter Maina"
                  fill
                  className="object-cover object-top"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
              </div>

              {/* Photo caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">Hon. Peter Maina</h3>
                <p className="text-emerald-100 font-medium">Servant Leader</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-500 opacity-80 rounded-bl-3xl"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-4 border-emerald-600 rounded-tr-2xl"></div>
            </motion.div>

            {/* Credentials badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-emerald-50 rounded-full">{credential.icon}</div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                        {credential.label}
                      </p>
                      <p className="text-gray-800 font-bold">{credential.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Bio content and CTA */}
          <motion.div
            className="col-span-1 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="prose prose-lg max-w-none" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                A Journey of Public Service
              </h3>

              <p className="text-gray-700 mb-6">
                Hon. Peter Maina has dedicated his career to improving the lives of his constituents
                through thoughtful policy-making and grassroots community development. With a
                background in both public administration and economic development, he brings a
                unique perspective to governance focused on sustainable growth and social equity.
              </p>

              <p className="text-gray-700 mb-8">
                Despite his accomplishments, Hon. Maina remains firmly connected to the community
                that raised him. He regularly visits local neighborhoods, listens to concerns of
                residents, and implements practical solutions to pressing challenges. His leadership
                style combines strategic vision with humility and a genuine desire to serve others.
              </p>
            </motion.div>

            {/* Core values section */}
            <motion.div className="mt-10" variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Core Values & Philosophy</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-5 shadow-sm border-l-4 border-emerald-600"
                    variants={badgeVariants}
                    whileHover="hover"
                  >
                    <div className="text-emerald-700 mb-3">{value.icon}</div>
                    <h5 className="font-bold text-gray-900 mb-2">{value.title}</h5>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="border-l-4 border-amber-500 pl-6 my-10 italic text-gray-700"
              variants={itemVariants}
            >
              &quot;True leadership is not about power or position, but about the ability to
              translate vision into reality through service to others.&quot;
              <footer className="text-gray-600 font-medium not-italic mt-2">
                — Hon. Peter Maina
              </footer>
            </motion.blockquote>

            {/* CTA button */}
            <motion.div className="mt-8" variants={buttonVariants}>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-bold hover:from-emerald-800 hover:to-emerald-700 transition-all duration-300"
              >
                Learn More About My Journey
                <FaArrowRight className="ml-3" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
