'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AchievementHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100 rounded-bl-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-tr-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div className="text-center" initial="hidden" animate="visible" variants={fadeInUp}>
          <span className="inline-block px-5 py-2 bg-emerald-700 text-white text-sm font-bold tracking-wide rounded-full mb-6">
            Track Record
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Proven <span className="text-emerald-800">Achievements</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of impactful projects and initiatives that have transformed
            communities and improved lives across our constituency.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
