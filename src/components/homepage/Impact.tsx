'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FaRoad,
  FaHandsHelping,
  FaGraduationCap,
  FaChartLine,
  FaUsers,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaHashtag,
} from 'react-icons/fa'

export default function Impact() {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('infrastructure')

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3 },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  // Project categories data
  const categories = [
    {
      id: 'infrastructure',
      name: 'Roads & Infrastructure',
      icon: <FaRoad className="w-6 h-6" />,
      description:
        'Modern roads, water systems, and energy infrastructure projects that improve daily life.',
    },
    {
      id: 'community',
      name: 'Community Development',
      icon: <FaHandsHelping className="w-6 h-6" />,
      description:
        'Healthcare facilities, community centers, and social programs that strengthen communities.',
    },
    {
      id: 'youth',
      name: 'Youth Empowerment',
      icon: <FaGraduationCap className="w-6 h-6" />,
      description:
        'Education initiatives, skills training, and entrepreneurship programs for young people.',
    },
  ]

  // Projects data
  const projects = {
    infrastructure: [
      {
        id: 1,
        title: 'Makadara Road Network',
        description:
          'Complete overhaul of 35km of roads, including drainage systems, pedestrian walkways, and street lighting.',
        impact: '150,000 residents now enjoy safer travel and reduced commute times',
        date: 'Completed Jan 2023',
        location: 'Westlands District',
        metrics: '35km of roads',
        image: '/project-road.png',
        beforeAfter: true,
      },
      {
        id: 2,
        title: 'Kibera Water Supply Project',
        description:
          'Installation of modern water distribution network with 20 community water points across Kibera.',
        impact: '75,000 residents gained reliable access to clean water',
        date: 'Completed Aug 2022',
        location: 'Kibera Area',
        metrics: '20 water points',
        image: '/project-water.png',
        beforeAfter: false,
      },
      {
        id: 3,
        title: 'Rural Electrification Initiative',
        description:
          'Extension of electricity grid to 12 previously unserved rural communities with solar backup systems.',
        impact: '8,000 households connected to electricity for the first time',
        date: 'Completed Mar 2024',
        location: 'Outer Westlands',
        metrics: '12 communities',
        image: '/project-electricity.png',
        beforeAfter: true,
      },
    ],
    community: [
      {
        id: 1,
        title: 'Westlands Health Center',
        description:
          'Construction of a modern health facility offering primary care, maternal services, and specialized clinics.',
        impact: '12,000 patients served monthly with improved healthcare access',
        date: 'Completed Dec 2022',
        location: 'Central Westlands',
        metrics: '12,000 patients/month',
        image: '/project-health.png',
        beforeAfter: true,
      },
      {
        id: 2,
        title: 'Community Resource Centers',
        description:
          'Network of 5 community centers providing social services, learning spaces, and community gathering areas.',
        impact: 'Over 45,000 community members accessing services annually',
        date: 'Completed Oct 2023',
        location: 'Various Locations',
        metrics: '5 centers built',
        image: '/project-community.png',
        beforeAfter: false,
      },
      {
        id: 3,
        title: 'Food Security Program',
        description:
          'Implementation of sustainable farming practices and food distribution systems for vulnerable populations.',
        impact: '5,000 families benefiting from improved nutrition and food security',
        date: 'Ongoing since 2021',
        location: 'Region-wide',
        metrics: '5,000 families',
        image: '/project-food.png',
        beforeAfter: false,
      },
    ],
    youth: [
      {
        id: 1,
        title: 'Westlands Digital Skills Center',
        description:
          'State-of-the-art training facility offering courses in programming, digital marketing, and creative design.',
        impact: '2,500 young people trained with 75% job placement rate',
        date: 'Completed Jun 2023',
        location: 'Westlands Tech Hub',
        metrics: '2,500 graduates',
        image: '/project-digital.png',
        beforeAfter: false,
      },
      {
        id: 2,
        title: 'Youth Entrepreneurship Fund',
        description:
          'Revolving fund providing business grants, mentorship, and market access for young entrepreneurs.',
        impact: '300 youth-owned businesses launched with 85% survival rate',
        date: 'Ongoing since 2022',
        location: 'Region-wide',
        metrics: '300 businesses',
        image: '/project-entrepreneur.png',
        beforeAfter: false,
      },
      {
        id: 3,
        title: 'School Renovation Program',
        description:
          'Comprehensive renovation of 15 schools including classrooms, libraries, labs, and sports facilities.',
        impact: 'Improved learning environment for 18,000 students',
        date: 'Completed Apr 2024',
        location: 'Various Locations',
        metrics: '15 schools renovated',
        image: '/project-school.png',
        beforeAfter: true,
      },
    ],
  }

  // Impact statistics
  const impactStats = [
    {
      value: '50+',
      label: 'Projects Completed',
      icon: <FaCheckCircle className="text-emerald-600 w-6 h-6" />,
    },
    {
      value: '300,000+',
      label: 'Lives Impacted',
      icon: <FaUsers className="text-amber-600 w-6 h-6" />,
    },
    {
      value: '$15M',
      label: 'Development Funds',
      icon: <FaChartLine className="text-emerald-600 w-6 h-6" />,
    },
  ]

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
  }

  // Get active projects based on selected category
  const activeProjects = projects[activeCategory] || []

  return (
    <section className="py-20 bg-gradient-to-tr from-emerald-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-40 bg-emerald-50 -skew-y-6 -translate-y-20 transform origin-top-right"></div>
      <div className="absolute top-1/2 right-0 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-0 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What I've Done for My People
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Real projects with measurable impacts that have transformed our community. These
            accomplishments reflect our collective commitment to sustainable development.
          </p>
        </motion.div>

        {/* Impact statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
              variants={statVariants}
            >
              <div className="inline-flex items-center justify-center p-3 bg-emerald-50 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-emerald-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-emerald-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-emerald-50/50 rounded-xl p-6 mb-10">
            <p className="text-center text-gray-700">
              {categories.find((c) => c.id === activeCategory)?.description}
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory} // Force re-render animation when category changes
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {activeProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />

                {/* Before/After badge */}
                {project.beforeAfter && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Before & After
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Project metadata */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <FaRegCalendarAlt className="text-emerald-600 mr-2" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaMapMarkerAlt className="text-emerald-600 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaHashtag className="text-emerald-600 mr-2" />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                {/* Impact highlight */}
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-600">
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-emerald-700 font-bold">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall impact statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
            "Each project represents not just infrastructure built, but lives changed. My greatest
            achievement is seeing our community thrive through collective effort."
          </blockquote>
          <div className="mt-4 font-bold text-emerald-800">— Hon. Peter Maina</div>

          <div className="mt-10">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-bold shadow-lg hover:from-amber-700 hover:to-amber-600 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
