'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Nav links data
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Vision', href: '/vision' },
    { title: 'Achievements', href: '/achievements' },

    { title: 'Media', href: '/media' },
  ]

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 border-b-2 border-emerald-700 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-10 md:h-12 md:w-12 mr-3 transition-transform duration-300 group-hover:scale-105 flex justify-center items-center mx-auto rounded-full border-2 border-amber-600 shadow shadow-black">
              <Image src="/maish.png" alt="Hon. Peter Maina Logo" fill className="object-contain" />
            </div>
            <div
              className={`font-bold text-lg md:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-emerald-800' : 'text-emerald-700'
              }`}
            >
              Maina Osama
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-800 hover:bg-emerald-50 hover:text-emerald-700'
                      : 'text-gray-800 hover:bg-white/30 hover:text-emerald-800'
                  }`}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button
                className={`px-5 py-2.5 rounded-md font-medium transition-all duration-300 shadow-sm cursor-pointer ${
                  isScrolled
                    ? 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-md'
                    : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-md'
                }`}
              >
                Contact Us{' '}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <FaTimes
                className={`h-6 w-6 ${isScrolled ? 'text-emerald-800' : 'text-emerald-700'}`}
              />
            ) : (
              <FaBars
                className={`h-6 w-6 ${isScrolled ? 'text-emerald-800' : 'text-emerald-700'}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div
                className={`mt-4 rounded-xl overflow-hidden ${
                  isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-lg'
                }`}
              >
                <div className="py-3 space-y-1">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      <Link
                        href={link.href}
                        className="block px-6 py-3 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                  <Link href="/contact">
                    <button
                      className="w-full px-5 py-3 bg-amber-600 text-white rounded-md font-medium hover:bg-amber-700 transition-colors duration-300 shadow-sm cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us{' '}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Navbar
