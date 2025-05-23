'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X, Eye, Download, Share2, Heart } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GalleryCard({ item }: { item: any }) {
  const [showModal, setShowModal] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <>
      {/* Gallery Card */}
      <div className="group relative bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          {item.image && (
            <Image
              src={item.image.url}
              alt={item.title || 'Gallery image'}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-slate-900/20"></div>

          {/* Center View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Eye size={20} />
              View Full
            </button>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-950/95 to-transparent">
            <h3 className="text-xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
              <div className="h-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full flex-1 max-w-16"></div>
              <span className="text-emerald-200 text-sm">Click to explore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-5xl w-full max-h-[95vh] bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl overflow-hidden shadow-2xl border border-emerald-400/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/50 to-slate-900/50 backdrop-blur-sm border-b border-emerald-400/20">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-emerald-200 text-sm mt-1">High Resolution View</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={closeModal}
                  className="p-3 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative" style={{ height: 'calc(95vh - 140px)' }}>
              {item.image && (
                <Image
                  src={item.image.url}
                  alt={item.title || 'Gallery image'}
                  fill
                  className="object-contain p-4"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-2 px-8 bg-gradient-to-r from-slate-900/50 to-emerald-900/50 backdrop-blur-sm border-t border-emerald-400/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-32 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 rounded-full"></div>
                  <span className="text-emerald-200 text-sm">Gallery Collection</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 text-sm">
                  <Eye size={16} />
                  <span>Full Resolution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Backdrop Click to Close */}
          <div className="absolute inset-0 z-[-1]" onClick={closeModal} />
        </div>
      )}
    </>
  )
}
