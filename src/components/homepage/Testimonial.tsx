'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import { TiStarburst } from 'react-icons/ti'

interface TestimonialProps {
  block: {
    name: string
    title: string
    quote: string
    image: {
      url: string
    }
  }
}

export default function Testimonial({ block }: TestimonialProps) {
  const name = block?.name
  const title = block?.title
  const quote = block?.quote
  const photo = block.image

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-emerald-700 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-12 right-0 w-64 h-64 bg-emerald-500 rounded-full opacity-15 blur-3xl"></div>
      <div className="absolute bottom-12 left-0 w-40 h-40 bg-amber-400 rounded-full opacity-15 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="flex justify-center mb-3" variants={fadeInUp}>
            <div className="p-2 bg-amber-400/20 rounded-full">
              <TiStarburst className="text-lg text-amber-300" />
            </div>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
            variants={fadeInUp}
          >
            Leadership Endorsement
          </motion.h2>

          <motion.div
            className="w-12 h-0.5 bg-amber-400 rounded-full mx-auto"
            variants={fadeInUp}
          ></motion.div>
        </motion.div>

        {/* Main testimonial content */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image section - Left side */}
            <motion.div
              className="md:w-80 lg:w-96 flex-shrink-0 p-6 md:p-8 flex justify-center items-center bg-gradient-to-br from-emerald-600/20 to-emerald-800/20"
              variants={slideInLeft}
            >
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-full lg:h-full rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl bg-white/5">
                  <Image
                    src={photo.url}
                    alt={name}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Decorative star badge */}
                <div className="absolute -top-2 -right-2 p-2.5 bg-amber-400 rounded-full shadow-lg">
                  <TiStarburst className="text-emerald-700 text-sm" />
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-400/10 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Content section - Right side */}
            <motion.div
              className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center"
              variants={slideInRight}
            >
              {/* Quote icon */}
              <motion.div className="mb-4" variants={fadeInUp}>
                <FaQuoteLeft className="text-xl md:text-2xl text-amber-300 opacity-80" />
              </motion.div>

              {/* Quote text */}
              <motion.blockquote
                className="text-sm md:text-base lg:text-lg leading-relaxed text-white font-medium mb-6 md:mb-8 text-justify"
                variants={fadeInUp}
              >
                {quote}
              </motion.blockquote>

              {/* Author details */}
              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-0.5 bg-amber-400 rounded-full"></div>
                  <TiStarburst className="text-amber-400 text-xs flex-shrink-0" />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-emerald-100 text-sm md:text-base font-medium opacity-90">
                  {title}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
