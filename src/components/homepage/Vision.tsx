'use client'
import Link from 'next/link'
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
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">{quote}</p>

          <Link
            href="/vision"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-800 hover:to-emerald-700 transition-colors"
          >
            View All
            <FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
