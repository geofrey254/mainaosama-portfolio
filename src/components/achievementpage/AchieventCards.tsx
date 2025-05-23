'use client'
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
  slug: string
  title: string
  description: string
  impact: string
  date: string
  location: string
  image: ProjImage[]
}

export default function AchievementsPage({ post }: { post: ProjectCont }) {
  return (
    <div
      key={post.id}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-emerald-600"
    >
      {/* Project image */}
      <div className="relative h-40 overflow-hidden">
        {post.image?.length > 0 && (
          <Image
            src={post.image[0].photo.url}
            alt={post.image[0].photo.alt || post.title}
            fill
            className="object-cover"
          />
        )}

        {/* Before/After badge */}
        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          <Link href={`/achievements/${post.slug}`}>More Details</Link>
        </div>
      </div>

      {/* post content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-sm text-gray-700 mb-4">{post.description}</p>

        {/* post metadata */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-xs text-gray-600">
            <FaRegCalendarAlt className="text-emerald-600 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600">
            <FaMapMarkerAlt className="text-emerald-600 mr-2" />
            <span>{post.location}</span>
          </div>
        </div>

        {/* Impact highlight */}
        <div className="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-600">
          <p className="text-xs text-gray-800">
            <span className="text-emerald-700 font-bold">Impact:</span> {post.impact}
          </p>
        </div>
      </div>
    </div>
  )
}
