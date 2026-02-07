'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const RightCard: React.FC<{
  title: string
  subtitle: string
  logo?: string
  index: number
}> = ({ title, subtitle, logo, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center justify-between w-full md:h-22 rounded-xl border-1 border-gray-400 shadow-sm bg-white p-4 md:p-6 hover:bg-gray-300 transition-colors cursor-pointer hover:shadow-lg"
    >
      <div className="flex items-center gap-3 md:gap-4">
        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
          {logo ? (
            <img src={logo} alt="Logo" className="w-full h-full object-contain p-1 md:p-2" />
          ) : null}
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl text-gray-800 leading-tight">{title}</h4>
          <p className="text-sm md:text-base text-gray-800">{subtitle}</p>
        </div>
      </div>

      <div className="flex-shrink-0 ml-2 md:ml-4">
        <Image src="/arrowright.svg" alt="Arrow Right" width={20} height={20} className="md:w-6 md:h-6" />
      </div>
    </motion.div>
  )
}

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Levana Technology',
      subtitle: '10+ Client Satisfied',
      logo: '/lev.svg',
    },
    {
      title: 'Levana Carier Consulting',
      subtitle: '10+ Murid berhasil diterima kerja',
      logo: '/lev.svg',
    },
    {
      title: 'Lynk.id',
      subtitle: '3+ Products Launched',
      logo: '/lynkid.jpg',
    },
  ]

  return (
    <section id="project" className="py-20 px-6 lg:px-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 uppercase tracking-tight">
          MEMBANGUN{' '}
          <span className="text-gray-800">PRODUK</span>,{' '}
          <span className="text-gray-800">KARIER</span>, DAN{' '}
          <span className="text-gray-800">REPUTASI DIGITAL</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
          Satu ekosistem untuk teknologi, pengembangan karier, dan produk digital yang berdampak nyata.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left - provided image card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/CardLeft.svg" alt="Card Left" className="w-full" />
        </motion.div>

        {/* Right - stacked small cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <RightCard
              key={index}
              index={index}
              title={project.title}
              subtitle={project.subtitle}
              logo={project.logo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
