'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Biography() {
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

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="biography" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image container - 5 columns on desktop */}
          <motion.div
            className="col-span-1 lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInLeft}
          >
            <div className="relative">
              <div className="aspect-[3/3] relative rounded-2xl overflow-hidden bg-white shadow-xl border-8 border-white">
                <Image
                  src="/maish.png"
                  alt="Hon. Peter Maina - Official Portrait"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-600 rounded-2xl opacity-80 -z-10" />
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 border-4 border-emerald-700 border-dashed rounded-2xl opacity-30 -z-10" />
            </div>
          </motion.div>

          {/* Text content - 7 columns on desktop */}
          <motion.div
            className="col-span-1 lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who is <span className="text-emerald-800">Hon. Peter Maina</span>?
            </h2>

            <div className="prose prose-lg text-gray-700 max-w-none space-y-5 text-justify">
              <p>
                Hon. Peter Maina (popularly known as Maina Osama) is a visionary leader with a
                profound commitment to community development and sustainable governance. Born and
                raised in the heart of our region, he understands firsthand the challenges and
                aspirations of our people.
              </p>

              <p>
                With a background in Public Administration and a Master's degree in Governance and
                Leadership, Peter has built his career on the foundation of ethical leadership and
                result-oriented public service. Before assuming his current role, he worked
                extensively in community development programs that transformed livelihoods across
                the region.
              </p>

              <p>
                As an elected representative since 2015, Hon. Maina has championed policies focused
                on education reform, healthcare accessibility, and economic empowerment. His
                collaborative leadership style brings together diverse stakeholders to create
                holistic solutions that address both immediate needs and long-term development
                goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
