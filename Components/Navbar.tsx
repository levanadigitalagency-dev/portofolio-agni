'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-8">
      <nav className="bg-sky-100 rounded-full px-4 md:px-8 py-3 md:py-4 shadow-lg">
        <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12">
          {/* Profile Avatar */}
          <div className="flex-shrink-0">
            <img 
              src="/ppnav.png" 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link 
              href="#project" 
              className="text-gray-800 hover:text-black font-medium transition text-sm lg:text-base"
            >
              Portofolio
            </Link>
            <Link 
              href="#testimoni" 
              className="text-gray-800 hover:text-black font-medium transition text-sm lg:text-base"
            >
              Testimoni
            </Link>
            <Link 
              href="#blog" 
              className="text-gray-800 hover:text-black font-medium transition text-sm lg:text-base"
            >
              Blog
            </Link>
          </div>

          {/* Hit Me Up Button */}
          <a 
            href="mailto:agniaalbaitsah@gmail.com"
            className="bg-black md:w-[169px] justify-center text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 whitespace-nowrap text-sm lg:text-base"
          >
            <span>Hit Me Up</span>
            <span>→</span>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar