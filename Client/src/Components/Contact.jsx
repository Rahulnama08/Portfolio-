import { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/send', formData)
      alert('Message sent successfully!')
    } catch (err) {
      alert('Failed to send message')
      console.error(err)
    }
  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-[#171d33]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white">Contact Us</h2>
        <p className="mt-2 text-lg text-white">
          Let's build something amazing together! Fill out the form, and I'll be in touch shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-white">First name</label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-white">Last name</label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-white">Company</label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-white">Phone number</label>
            <div className="mt-2.5">
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                placeholder="123-456-7890"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
