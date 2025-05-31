'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BiographyProps {
  block?: {
    clause?: string
    photo?: {
      url: string
    }
  }
}

export default function Biography({ block }: BiographyProps) {
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
                  src={block?.photo?.url || '/speech.png'}
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
              {block?.clause?.split(/\n{2,}/).map((para, index) => <p key={index}>{para}</p>)}{' '}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
