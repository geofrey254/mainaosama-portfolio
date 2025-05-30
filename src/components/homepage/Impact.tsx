'use client'
import React from 'react'
import Image from 'next/image'
import { FaRegCalendarAlt, FaMapMarkerAlt, FaAngleDoubleDown } from 'react-icons/fa'
import Link from 'next/link'

interface InfoContent {
  id: number
  label: string
  value: string
}

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
    heading: string
    subheading: string
    info: InfoContent[]
    projects: ProjectCont[]
  }
}
export default function Impact({ block }: ImpactProps) {
  const heading = block?.heading
  const subheading = block?.subheading
  const info = block?.info || []
  const projects = block?.projects || []

  return (
    <section className="py-16 bg-gradient-to-tr from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{heading}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">{subheading}</p>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-3 justify-center gap-2 md:gap-8 mb-12">
          {info.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="flex justify-center mb-2">
                <FaAngleDoubleDown className="text-amber-700 animate-bounce" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects grid */}
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
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{project.description}</p>

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
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-medium hover:from-amber-700 hover:to-amber-600 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
