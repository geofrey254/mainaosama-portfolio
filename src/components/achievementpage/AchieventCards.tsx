'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'

interface ProjImage {
  photo: {
    url: string
    alt: string
  }
}

interface ProjectCont {
  id: number
  title: string
  description: string
  impact: string
  date: string
  location: string
  image: ProjImage[]
}

interface ImpactProps {
  block: {
    projects: ProjectCont[]
  }
}

export default function AchievementsPage({ block }: ImpactProps) {
  const projects = block?.projects || []

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100 rounded-bl-full opacity-30" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-tr-full opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
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

      {/* Achievements Grid Section */}
      <section className="py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-emerald-600"
            >
              {/* Project image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={project.image[0].photo.url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Before/After badge */}
                <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  <Link href="">More Details</Link>
                </div>
              </div>

              {/* Project content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>

                {/* Project metadata */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <FaRegCalendarAlt className="text-emerald-600 mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <FaMapMarkerAlt className="text-emerald-600 mr-2" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Impact highlight */}
                <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-600">
                  <p className="text-xs text-gray-800">
                    <span className="text-emerald-700 font-bold">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Join the Journey</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Together, we can achieve even more. Be part of the movement that{"'"}s transforming
              our community.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-emerald-700 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
