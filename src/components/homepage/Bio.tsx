'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaFlag, FaBriefcase, FaArrowRight } from 'react-icons/fa'
import { TiStarburst } from 'react-icons/ti'

interface InfoContent {
  id: number
  label: string
  value: string
}

interface BioProps {
  block: {
    heading: string
    description: string
    info: InfoContent[]
    photo: {
      url: string
    }
    quote: string
  }
}

export default function Bio({ block }: BioProps) {
  const heading = block?.heading
  const description = block?.description
  const info = block?.info || []
  const photo = block.photo
  const quote = block.quote
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

  // Key information
  const keyInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 text-amber-600" />,
      label: 'Ward',
      value: 'Uthiru/Ruthimitu',
    },
    {
      icon: <FaFlag className="w-5 h-5 text-amber-600" />,
      label: 'Party',
      value: 'UDA',
    },
    {
      icon: <FaBriefcase className="w-5 h-5 text-amber-600" />,
      label: 'Role',
      value: 'MCA',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      {/* Light, subtle background element */}
      <div className="absolute top-24 right-0 w-96 h-96 bg-emerald-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-24 left-0 w-64 h-64 bg-amber-50 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Photo */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-md"
              variants={imageVariants}
            >
              {/* Main photo */}
              <div className="aspect-[4/5] relative">
                <Image
                  src={photo.url}
                  alt="Hon. Peter Maina"
                  fill
                  className="object-cover object-top"
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent"></div>
              </div>

              {/* Photo caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold">Hon. Peter Maina</h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Simplified Bio content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
              <div className="w-20 h-1.5 bg-emerald-700 rounded-full mb-10"></div>
            </motion.div>

            <motion.div className="prose prose-lg max-w-none" variants={itemVariants}>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">{description}</p>
            </motion.div>

            {/* Key information row */}
            <motion.div className="flex flex-wrap gap-8 mt-10 mb-12" variants={itemVariants}>
              {info.map((info: InfoContent) => (
                <div key={info.id} className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-50 rounded-full">
                    <TiStarburst className="text-amber-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-gray-800 font-bold">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quote - simplified */}
            <motion.blockquote
              className="border-l-4 border-amber-500 pl-6 my-12 italic text-gray-700 text-xl"
              variants={itemVariants}
            >
              &quot;{quote}&quot;
            </motion.blockquote>

            {/* CTA button */}
            <motion.div className="mt-10" variants={buttonVariants}>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-bold hover:from-emerald-800 hover:to-emerald-700 transition-all duration-300"
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
