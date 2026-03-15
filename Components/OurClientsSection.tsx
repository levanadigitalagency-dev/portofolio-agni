'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const OurClientsSection = () => {
  const clients = [
    {
      name: 'Klein Company 1',
      logo: '/klein.svg', // Placeholder, replace with actual logo
    },
    {
      name: 'Klein Company 2',
      logo: '/klein.svg', // Placeholder, replace with actual logo
    },
    {
      name: 'Klein Company 3',
      logo: '/klein.svg', // Placeholder, replace with actual logo
    },
    {
      name: 'Klein Company 4',
      logo: '/klein.svg', // Placeholder, replace with actual logo
    },
    // Add more clients as needed
  ]

  return (
    <section id="our-clients" className="py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
            <span className="bg-blue-500 text-white px-4 py-2 font-bold text-2xl md:text-4xl">
              OUR
            </span>
            <span className="text-gray-800 font-bold text-2xl md:text-4xl">
              CLIENTS
            </span>
          </div>
          <p className="text-gray-600 text-lg md:text-xl">
            Trusted by leading companies
          </p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={120}
                className="object-contain p-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default OurClientsSection