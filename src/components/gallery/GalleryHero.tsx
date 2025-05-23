'use client'
import React from 'react'

export default function GalleryHero() {
  return (
    <section className="relative text-white pt-32 md:pt-36 md:pb-8 overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100 rounded-bl-full opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-tr-full opacity-40" />
      </div>

      {/* Additional floating elements for depth */}
      <div
        className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-amber-300 opacity-10 blur-2xl animate-pulse"
        style={{ animationDuration: '6s' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/2 w-40 h-40 rounded-full bg-emerald-300 opacity-10 blur-2xl animate-pulse"
        style={{ animationDuration: '10s' }}
      ></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-800/10 to-transparent opacity-50"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <span className="inline-block px-5 py-2 bg-emerald-700 text-white text-sm font-bold tracking-wide rounded-full mb-2">
            Gallery
          </span>
          {/* Enhanced heading with better typography */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-emerald-700">
            Gallery & Media
          </h1>

          {/* Stylized decorative element */}
          <div className="flex items-center justify-center mb-8 space-x-2">
            <div className="w-8 h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-amber-400/5 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
