'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { ArrowRight, LoaderCircle, Mail, Phone, User } from 'lucide-react'

export default function GetInvolved() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<Record<string, any> | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('/api/get-form')
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch(() => console.error('Could not load form data'))
  }, [])

  const validateForm = (elements: HTMLFormControlsCollection) => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    Array.from(elements)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((el: any) => el.name && el.required)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .forEach((el: any) => {
        if (!el.value.trim()) {
          newErrors[el.name] = `${el.name} is required`
          isValid = false
        } else if (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value)) {
          newErrors[el.name] = 'Please enter a valid email address'
          isValid = false
        }
      })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formEl = e.currentTarget

    if (!validateForm(formEl.elements)) return

    if (!formData) {
      setErrors({ form: 'Form data is not loaded. Please try again.' })
      return
    }
    const payload = {
      form: formData.id,
      submissionData: Array.from(formEl.elements)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((el: any) => el.name)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((el: any) => ({ field: el.name, value: el.value })),
    }

    setSubmitting(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/form-submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSuccess(true)
        formEl.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ form: 'There was a problem submitting your form. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (!formData)
    return (
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="bg-emerald-900 border border-amber-600 rounded-lg p-6 sm:p-8 text-center flex flex-col items-center space-y-4 shadow-md max-w-md mx-auto">
          <LoaderCircle className="w-10 h-10 text-white animate-spin" />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Please Wait!</h3>
          <p className="text-gray-50 text-sm sm:text-base">
            We{"'"}re loading the contact form for you.
          </p>
        </div>
      </section>
    )

  if (success)
    return (
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="bg-white border-l-4 border-amber-600 rounded-lg p-8 text-center shadow-lg">
          <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-emerald-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-emerald-900 mb-3">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your message has been received. We{"'"}ll be in touch shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="inline-flex items-center px-4 py-2 bg-emerald-900 text-white rounded-md hover:bg-emerald-950 transition duration-150 cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </section>
    )

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-40 bg-emerald-50 -skew-y-6 -translate-y-20 transform origin-top-right"></div>
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-amber-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Get Involved Today</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Together we can make a difference. Join our movement and help shape the future of our
            community.
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 p-8 md:p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-8 text-emerald-50">
                  Have questions? Want to learn more about how you can get involved? Reach out to us
                  directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaPhoneAlt className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Call Us</p>
                      <p className="text-lg">+254 701 234567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaEnvelope className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Email Us</p>
                      <p className="text-lg">mainaosama@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Visit Us</p>
                      <address className="not-italic">
                        Village Park, Opposite Githima Church
                        <br />
                        Dagoretti Centre
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <p className="text-sm text-emerald-100 font-medium">Visit Us</p>
                      <address className="not-italic">
                        Chief{"'"}s Camp, Muthua
                        <br />
                      </address>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formData?.fields?.map(
                    (field: {
                      id: string
                      blockType: string
                      label: string
                      name: string
                      required: boolean
                    }) => {
                      const fieldId = `field-${field.id}`

                      switch (field.blockType) {
                        case 'text':
                          return (
                            <div key={field.id} className="relative col-span-2 md:col-span-1">
                              <label
                                htmlFor={fieldId}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                {field.label}{' '}
                                {field.required && <span className="text-red-500">*</span>}
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <User size={18} className="text-gray-400" />
                                </div>
                                <input
                                  id={fieldId}
                                  name={field.name}
                                  type="text"
                                  required={field.required}
                                  className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition duration-150"
                                  placeholder={`Your ${field.label}`}
                                />
                              </div>
                              {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                              )}
                            </div>
                          )
                        case 'email':
                          return (
                            <div key={field.id} className="relative col-span-2 md:col-span-1">
                              <label
                                htmlFor={fieldId}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                {field.label}{' '}
                                {field.required && <span className="text-red-500">*</span>}
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Mail size={18} className="text-gray-400" />
                                </div>
                                <input
                                  id={fieldId}
                                  name={field.name}
                                  type="email"
                                  required={field.required}
                                  className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition duration-150"
                                  placeholder="your@email.com"
                                />
                              </div>
                              {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                              )}
                            </div>
                          )
                        case 'textarea':
                          return (
                            <div key={field.id} className="relative col-span-2">
                              <label
                                htmlFor={fieldId}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                {field.label}{' '}
                                {field.required && <span className="text-red-500">*</span>}
                              </label>
                              <textarea
                                id={fieldId}
                                name={field.name}
                                required={field.required}
                                rows={4}
                                className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition duration-150"
                                placeholder="How can we help you?"
                              />
                              {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                              )}
                            </div>
                          )
                        case 'number':
                          return (
                            <div key={field.id} className="relative col-span-2 md:col-span-1">
                              <label
                                htmlFor={fieldId}
                                className="block text-sm font-medium text-gray-700 mb-1"
                              >
                                {field.label}{' '}
                                {field.required && <span className="text-red-500">*</span>}
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Phone size={18} className="text-gray-400" />
                                </div>
                                <input
                                  id={fieldId}
                                  name={field.name}
                                  type="tel"
                                  required={field.required}
                                  className="block w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition duration-150"
                                  placeholder="Your phone number"
                                />
                              </div>
                              {errors[field.name] && (
                                <p className="mt-1 text-sm text-red-600">{errors[field.name]}</p>
                              )}
                            </div>
                          )

                        default:
                          return null
                      }
                    },
                  )}

                  {errors.form && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-4">
                      <p className="text-red-700">{errors.form}</p>
                    </div>
                  )}

                  <div className="pt-2 col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full px-6 py-3 bg-emerald-900 hover:bg-emerald-950 text-white font-medium rounded-md shadow-sm transition duration-150 flex items-center justify-center cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <span className="flex items-center">
                          Submit Message <ArrowRight size={18} className="ml-2" />
                        </span>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Your information is kept confidential and secure
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
