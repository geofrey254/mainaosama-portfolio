'use client'
import { motion } from 'framer-motion'
import { FaBullseye } from 'react-icons/fa'

interface Vision {
  id: number
  title: string
  description: string
  keyPoints: Array<{
    id: number
    point: string
  }>
}

interface VisionProps {
  block: {
    visions: Vision[]
  }
}

export default function KeyPriorities({ block }: VisionProps) {
  const visions = block.visions || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section
      id="priorities"
      className="py-24 md:py-32 relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-800 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-emerald-100 rounded-full">
            <div className="bg-emerald-600 p-3 rounded-full">
              <FaBullseye className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Key Areas of{' '}
            <span className="text-emerald-700 relative">
              Focus
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-emerald-200 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our strategic priorities drive meaningful impact across all dimensions of our mission
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {visions.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden backdrop-blur-sm">
                {/* Header with improved design */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-8">
                    <div className="flex items-center justify-center gap-4">
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        className="bg-white/20 p-3 rounded-full backdrop-blur-sm"
                      >
                        <FaBullseye className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight text-justify">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-emerald-600 rotate-45"></div>
                  </div>
                </div>

                {/* Content with improved spacing and typography */}
                <div className="p-8 pt-10">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                    {card.description}
                  </p>

                  {/* Enhanced key points */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Key Initiatives
                    </h4>
                    <ul className="space-y-4">
                      {card.keyPoints.map((point, pointIndex) => (
                        <motion.li
                          key={point.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 * pointIndex,
                          }}
                          className="flex items-start group/item"
                        >
                          <div className="flex-shrink-0 mt-1.5 mr-4">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover/item:bg-emerald-600 transition-colors duration-200"></div>
                          </div>
                          <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200">
                            {point.point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle bottom accent */}
                <div className="h-1 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 group-hover:from-emerald-400 group-hover:via-emerald-500 group-hover:to-emerald-400 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
