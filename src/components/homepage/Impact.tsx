'use client'
import React from 'react'
import Image from 'next/image'
import {
  FaCheckCircle,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaHashtag,
  FaUsers,
  FaChartLine,
} from 'react-icons/fa'
import Link from 'next/link'

export default function Impact() {
  // Projects data
  const projects = [
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
      id: 4,
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
      id: 5,
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
    {
      id: 6,
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
  ]

  // Impact statistics
  const impactStats = [
    {
      value: '50+',
      label: 'Projects Completed',
      icon: <FaCheckCircle className="text-emerald-600 w-5 h-5" />,
    },
    {
      value: '300,000+',
      label: 'Lives Impacted',
      icon: <FaUsers className="text-amber-600 w-5 h-5" />,
    },
    {
      value: '$15M',
      label: 'Development Funds',
      icon: <FaChartLine className="text-emerald-600 w-5 h-5" />,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-tr from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">What I've Done for My People</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Real projects with measurable impacts that have transformed our community.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-3 justify-center gap-2 md:gap-8 mb-12">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-emerald-600"
            >
              {/* Project image */}
              <div className="relative h-40 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />

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

        {/* Call to action */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            "Each project represents not just infrastructure built, but lives changed. My greatest
            achievement is seeing our community thrive through collective effort."
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-medium hover:from-amber-700 hover:to-amber-600 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
