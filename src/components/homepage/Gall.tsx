'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  FaPlay,
  FaPause,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaImages,
} from 'react-icons/fa'

export default function MediaGallery() {
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Meeting with community leaders',
      caption: 'Strategic discussion with community leaders on development priorities',
    },
    {
      id: 2,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Speaking in parliament',
      caption: 'Advocating for educational reform in parliament',
    },
    {
      id: 3,
      type: 'video',
      thumbnail: '/api/placeholder/600/400',
      caption: 'Campaign video: "Our Journey Together"',
      videoId: 'campaign-video',
    },
    {
      id: 4,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Launching water project',
      caption: 'Inaugurating the Kibera water access initiative',
    },
    {
      id: 5,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Youth engagement',
      caption: 'Mentoring youth entrepreneurs at the Digital Skills Center',
    },
    {
      id: 6,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Healthcare initiative',
      caption: 'Visiting patients at the newly constructed Westlands Health Center',
    },
    {
      id: 7,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Community event',
      caption: 'Annual community celebration with local performers',
    },
    {
      id: 8,
      type: 'image',
      src: '/api/placeholder/600/400',
      alt: 'Road project inspection',
      caption: 'Reviewing progress on the Makadara Road Network expansion',
    },
  ]

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Functions for lightbox
  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
    if (isPlaying && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const nextImage = () => {
    if (isPlaying && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
    setCurrentImage((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    if (isPlaying && videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
    setCurrentImage((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return

      switch (e.key) {
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          closeLightbox()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, isPlaying])

  return (
    <section className="py-20 bg-gradient-to-bl from-white to-emerald-50/70 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-amber-100 rounded-full opacity-20 -translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-200 rounded-full opacity-30 translate-x-10 translate-y-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Media Highlights</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Moments from our journey together — serving the community, delivering on promises, and
            building relationships that matter.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group border-2 border-emerald-600"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(index)}
            >
              {/* Image or video thumbnail */}
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.type === 'image' ? item.src : item.thumbnail}
                  alt={item.alt || item.caption}
                  fill
                  className="object-cover"
                />

                {/* Play button for videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/80 flex items-center justify-center text-white">
                      <FaPlay className="w-5 h-5 ml-1" />
                    </div>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {item.type === 'image' ? (
                    <FaExpand className="w-8 h-8 text-white" />
                  ) : (
                    <FaPlay className="w-8 h-8 text-white" />
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-700">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg font-medium shadow-md hover:bg-amber-700 transition-all duration-300">
            <FaImages className="mr-2" />
            View Complete Gallery
          </button>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-amber-400 z-10"
                onClick={closeLightbox}
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Media container */}
              <div className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center">
                {galleryItems[currentImage].type === 'image' ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryItems[currentImage].src}
                      alt={galleryItems[currentImage].alt || galleryItems[currentImage].caption}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-contain"
                      controls={false}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    >
                      {/* Video source would be provided here */}
                      <source src="/campaign-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Video controls */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-black/60 rounded-full px-4 py-2">
                      <button onClick={togglePlay} className="text-white mr-4">
                        {isPlaying ? (
                          <FaPause className="w-4 h-4" />
                        ) : (
                          <FaPlay className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="mt-4 text-white text-center max-w-2xl">
                <p>{galleryItems[currentImage].caption}</p>
              </div>

              {/* Navigation */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 bg-black/30 rounded-full p-3"
                onClick={prevImage}
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 bg-black/30 rounded-full p-3"
                onClick={nextImage}
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
