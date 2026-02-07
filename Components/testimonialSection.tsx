'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        'Bangga Banget Sama Pelayanan Kamu Agni',
      name: 'Ka Fatimah',
      position: 'CEO PT Havenwell Property',
    },
    {
      quote:
        'ahahaha nanti ku kabarin testi ke temen-temen kedokteran yang lain, jangan kaget yaa kalo tiba-tiba banyak yang chat ke kamu hihi',
      name: 'Ka Shelsya',
      position: 'CEO Strata Academy',
    },
    {
      quote:
        'mantap top banget ini Levana, oke banget 999%',
      name: 'Ka Alvin',
      position: 'Founder Citowrite',
    },
    {
      quote:
        'Mantap Keren banget agni webnya, Banget ngebantu buat ningkatin bisnis Bapa',
      name: 'Pak Rully',
      position: 'Guru SMK',
    },
    
  ]

  return (
    <section id="testimoni" className="py-20 px-6 lg:px-16 overflow-hidden">
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
              WORLD-CLASS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">CUSTOMER SUPPORT</h2>
          </div>
          <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
            Kami hadir bukan hanya untuk menjawab pertanyaan, tapi membantu menyelesaikan masalah secara tuntas.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {testimonials.length > 3 ? (
            // Carousel view untuk lebih dari 3 cards
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 min-w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-96 flex-shrink-0">
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      position={testimonial.position}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Grid view untuk 3 atau kurang cards
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialSection