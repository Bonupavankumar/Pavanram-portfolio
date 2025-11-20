import React from 'react'

const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-900 px-6 py-20">
    <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-lg p-8">
      <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center border-b-4 border-purple-500 inline-block">Contact</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="bg-gray-900 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          className="bg-gray-900 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          className="bg-gray-900 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-gray-400 text-center">
        <p>Email: <a href="mailto:your.email@example.com" className="underline">pavankumarbonu1@gmail.com</a></p>
        <p>Phone: <a href="tel:+911234567890" className="underline">+91 7032555487</a></p>
      </div>
    </div>
  </section>
)

export default Contact
