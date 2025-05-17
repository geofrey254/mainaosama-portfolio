'use client'
import React from 'react'
import { FaChevronRight, FaBullseye } from 'react-icons/fa'

interface VisionProps {
  id: number
  title: string
  description: string
  keyPoints: Array<{
    id: number
    point: string
  }>
}

interface VisionBlockProps {
  block: {
    heading: string
    subheading: string
    quote: string
    visions: VisionProps[]
  }
}

export default function Vision({ block }: VisionBlockProps) {
  const heading = block?.heading
  const subheading = block?.subheading
  const quote = block?.quote
  const visions = block?.visions

  return (
    <section className="py-16 bg-gradient-to-br from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{heading}</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">{subheading}</p>
        </div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {visions.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow border-2 border-emerald-700"
            >
              <div className="p-5">
                {/* Icon */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaBullseye size={25} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase text-nowrap">
                    {card.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{card.description}</p>

                {/* Key points */}
                <ul className="space-y-2 mb-4">
                  {card.keyPoints.map((point) => (
                    <li key={point.id} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">{point.point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">{quote}</p>

          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-800 hover:to-emerald-700 transition-colors">
            Read Full Agenda
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
