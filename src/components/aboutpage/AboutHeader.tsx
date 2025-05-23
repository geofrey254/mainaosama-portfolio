'use client'
import { motion } from 'framer-motion'

export default function AboutHeader() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="relative md:pt-32 md:pb-8 overflow-hidden bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-block"
          >
            <span className="inline-block px-5 py-2 bg-emerald-700 text-white text-sm font-medium tracking-wide rounded-full mb-6">
              About Hon. Peter Maina
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6"
          >
            Dedicated to <span className="text-emerald-800">Public Service</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg text-gray-700 leading-relaxed"
          >
            Committed to transforming communities through servant leadership, innovative solutions,
            and unwavering integrity. Learn more about the journey, vision, and values that drive
            Hon. Peter Maina{"'"}s public service.
          </motion.p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <div className="w-32 h-32 bg-emerald-100 rounded-full opacity-20 blur-xl"></div>
      </div>
      <div className="absolute top-1/3 right-0 transform -translate-y-1/2">
        <div className="w-48 h-48 bg-amber-100 rounded-full opacity-20 blur-xl"></div>
      </div>
    </div>
  )
}
