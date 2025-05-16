'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaUsers } from 'react-icons/fa'

const HeroSection = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Animation variants
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1,
        duration: 0.7,
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Background shapes */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-50 rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-50 rounded-tr-full opacity-60" />
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-emerald-300 rounded-full opacity-20" />
        <div className="absolute top-2/3 right-1/4 w-10 h-10 bg-amber-300 rounded-full opacity-20" />
      </motion.div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 md:px-10 lg:px-16 2xl:px-0 py-28 md:py-20 lg:py-32 2xl:py-28 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 xl:gap-24 items-center">
          {/* Text content - Takes 7 columns on desktop */}
          <motion.div
            className="col-span-1 lg:col-span-7 space-y-8 lg:space-y-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-5 py-2 bg-emerald-700 text-white text-sm font-medium tracking-wide rounded-full mb-6">
                Servant Leader
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Hon. Peter Maina
              <span className="block text-emerald-800 mt-3">
                Leadership with Vision and Integrity
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-2xl text-justify"
              variants={fadeInUp}
            >
              <span className="font-medium italic">Maina Osama</span> — Committed to transforming
              our community through transparent governance, sustainable development, and inclusive
              policies. Together, we can build a brighter future for everyone.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 pt-4"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link href="/achievements" passHref>
                  <button className="flex items-center justify-center px-8 py-4 bg-emerald-700 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-emerald-800 transition-all duration-300 w-full sm:w-auto">
                    See Achievements
                    <FaArrowRight className="ml-3" />
                  </button>
                </Link>
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover">
                <Link href="/join" passHref>
                  <button className="flex items-center justify-center px-8 py-4 bg-white border-2 border-amber-600 text-amber-700 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all duration-300 w-full sm:w-auto">
                    Join the Movement
                    <FaUsers className="ml-3" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image container - Takes 5 columns on desktop */}
          <motion.div
            className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[550px] w-full max-w-[400px] lg:max-w-[500px]">
              {/* Main image with frame */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-xl border-8 border-white z-20 transition-all duration-300 hover:shadow-2xl">
                <Image
                  src="/port.png"
                  alt="Hon. Peter Maina (Maina Osama)"
                  fill
                  priority
                  className="rounded-lg object-center object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-600 rounded-2xl opacity-80 -z-10" />
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-4 border-emerald-700 border-dashed rounded-2xl opacity-30 -z-10" />

              {/* Vision badge */}
              <motion.div className="absolute -bottom-10 -left-10 z-30" variants={badgeVariants}>
                <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center text-emerald-800">
                    <div className="text-center">
                      <div className="font-bold text-2xl">2025</div>
                      <div className="text-xs font-medium uppercase tracking-wider">Vision</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
