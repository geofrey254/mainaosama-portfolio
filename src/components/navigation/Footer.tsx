'use client'
import { AlertCircle } from 'lucide-react'
import React, { useState } from 'react'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    // Reset notification states
    setSubscribed(false)
    setAlreadySubscribed(false)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.status === 409) {
        // Show already subscribed notification instead of alert
        setAlreadySubscribed(true)
        setTimeout(() => setAlreadySubscribed(false), 5000)
      } else if (res.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        alert(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again later.')
      console.error(error)
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
                  className="hover:text-amber-300 transition-colors text-sm"
                >
                  mainaosama@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-amber-400" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-amber-300 transition-colors text-sm"
                >
                  +254 701 234567
                </a>
              </li>
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="mr-3 mt-1 text-amber-400" />
                <address className="not-italic">
                  Village Park, Opposite Githima Church
                  <br />
                  Dagoretti Centre
                </address>
              </li>
              <li className="flex items-start text-sm">
                <FaMapMarkerAlt className="mr-3 mt-1 text-amber-400" />
                <address className="not-italic">
                  Chief{"'"}s Camp, Muthua
                  <br />
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b border-emerald-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Achievements', 'Vision', 'Contact'].map((item) => (
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
                href="https://www.facebook.com/MainahOsama"
                className="bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/HonMainaOsama"
                className="bg-emerald-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
              >
                <FaXTwitter />
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
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-emerald-700 border border-emerald-600 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                Subscribe
              </button>
              {subscribed && (
                <div className="absolute top-full left-0 mt-2 w-full bg-emerald-600 text-white py-2 px-4 rounded-md text-sm">
                  Thank you for subscribing!
                </div>
              )}

              {/* Already subscribed notification */}
              {alreadySubscribed && (
                <div className="mt-4 px-4 py-3 bg-amber-500 bg-opacity-20 rounded-md border-l-4 border-amber-500 animate-fade-in flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-medium">Already Subscribed</p>
                    <p className="text-white/80 text-sm">
                      This email is already in our subscriber list. Thank you for your continued
                      interest!
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-emerald-900 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Peter Maina Mwangi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
