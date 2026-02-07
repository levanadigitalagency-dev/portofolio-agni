'use client'

import React from 'react'
import { motion } from 'framer-motion'
import InstagramCard from './InstagramCard'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-16 py-20 md:py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Hero Title */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >

          {/* Main Heading */}
          <div>
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#6A6A6A] leading-tight">Hello, I Am</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
              Agnia Alatas
            </h1>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Bantu Gen Z keluar dari hidup aman yang bikin stagnan sambil nerima jasa pembuatan website buat bisnis kamu naik kelas.
          </motion.p>

          {/* View My Work Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#project">
              <button className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition w-full md:w-auto">
                View My Work
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side - Instagram Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <InstagramCard
            name="Agnialatas"
            username="agni.webdev"
            bio="Passionate web developer helping Gen Z elevate their businesses with stunning websites. Let's create something amazing together! "
            location='📍West Java, Indonesia.'
            posts={200}
            followers={25000}
            following={160}
            profileImage="/ppig.png"
            instagramLink="https://www.instagram.com/agniialatas/"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection