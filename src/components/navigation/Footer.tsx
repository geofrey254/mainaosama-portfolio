'use client'
import React, { useState } from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would add your newsletter subscription logic
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-600 pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-400" />
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-amber-300 transition-colors"
                >
                  contact@example.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-400" />
                <a href="tel:+1234567890" className="hover:text-amber-300 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-amber-400" />
                <address className="not-italic">
                  123 Community Avenue
                  <br />
                  District Office, Building 4<br />
                  Constituency Area, CO 12345
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Achievements', 'Vision', 'News', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-amber-300 transition-colors flex items-center"
                  >
                    <span className="text-amber-400 mr-2">•</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-600 pb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#facebook"
                className="bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="#twitter"
                className="bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#whatsapp"
                className="bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p className="text-sm">
              Connect with us on social media for regular updates and community initiatives.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-600 pb-2">Newsletter</h3>
            <p className="mb-4">
              Subscribe to receive updates about our latest initiatives and community events.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-emerald-700 border border-emerald-600 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                Subscribe
              </button>
              {subscribed && (
                <div className="absolute top-full left-0 mt-2 w-full bg-emerald-600 text-white py-2 px-4 rounded-md text-sm">
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-emerald-900 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Peter Maina Mwangi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-amber-300 transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="hover:text-amber-300 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
