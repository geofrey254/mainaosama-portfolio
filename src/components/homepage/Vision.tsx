'use client'
import React from 'react'
import { FaGraduationCap, FaHeartbeat, FaUsers, FaChevronRight } from 'react-icons/fa'

export default function Vision() {
  // Vision cards data
  const visionCards = [
    {
      id: 1,
      title: 'Education Reform',
      description:
        'Modernizing our education system with digital learning, teacher training, and infrastructure improvements for all schools.',
      icon: <FaGraduationCap className="w-6 h-6 text-white" />,
      iconBg: 'bg-emerald-600',
      keyPoints: [
        'Free school supplies for all primary students',
        'Technology integration in every classroom',
        'Scholarship fund for deserving students',
      ],
    },
    {
      id: 2,
      title: 'Healthcare Access',
      description:
        'Expanding healthcare facilities, increasing medical personnel, and implementing affordable healthcare programs for all.',
      icon: <FaHeartbeat className="w-6 h-6 text-white" />,
      iconBg: 'bg-amber-600',
      keyPoints: [
        'New health centers in underserved areas',
        'Mobile clinic program for remote communities',
        'Subsidized medicine for chronic conditions',
      ],
    },
    {
      id: 3,
      title: 'Women & Youth Inclusion',
      description:
        'Creating opportunities for women and youth through skills training, entrepreneurship programs, and community representation.',
      icon: <FaUsers className="w-6 h-6 text-white" />,
      iconBg: 'bg-emerald-600',
      keyPoints: [
        'Youth entrepreneurship fund with mentorship',
        "Women's leadership development program",
        'Community youth centers in every ward',
      ],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">My Vision for the Future</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Moving forward with bold initiatives that will transform our community and create
            sustainable growth for generations to come.
          </p>
        </div>

        {/* Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {visionCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md h-full hover:shadow-lg transition-shadow border-2 border-emerald-700"
            >
              <div className="p-5">
                {/* Icon */}
                <div
                  className={`${card.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4`}
                >
                  {card.icon}
                </div>

                {/* Title and description */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-700 mb-4">{card.description}</p>

                {/* Key points */}
                <ul className="space-y-2 mb-4">
                  {card.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn more link */}
              <div className="px-5 pb-5">
                <a
                  href="#"
                  className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800"
                >
                  Learn more <FaChevronRight className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            These priorities are just the beginning. My plan addresses community development,
            infrastructure, economic growth, and social welfare.
          </p>

          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-lg font-medium hover:from-emerald-800 hover:to-emerald-700 transition-colors">
            Read Full Agenda
            <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}
