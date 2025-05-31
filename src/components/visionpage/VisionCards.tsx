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

  return (
    <section
      id="priorities"
      className="py-8 md:py-12 relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {visions.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow border-2 border-emerald-700"
            >
              <div className="p-6">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaBullseye size={28} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Description Section */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-base">{card.description}</p>
                </div>

                {/* Key Points Section */}
                <div>
                  <h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                    Key Points
                  </h4>
                  <ul className="space-y-3">
                    {card.keyPoints.map((point) => (
                      <li key={point.id} className="flex items-start gap-3">
                        <span className="text-emerald-600 font-bold text-lg leading-none mt-0.5">
                          •
                        </span>
                        <span className="text-gray-700 leading-relaxed flex-1">{point.point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
