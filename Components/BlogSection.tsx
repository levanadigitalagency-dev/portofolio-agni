'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
}

const BlogCard: React.FC<BlogPost & { index: number }> = ({ title, excerpt, date, category, image, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-600 hover:shadow-lg transition-shadow cursor-pointer"
    >
      {image && (
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
        
        <div className="mt-4 flex items-center text-gray-600 font-semibold text-sm hover:gap-2 transition-all">
          Baca Selengkapnya
          <span className="ml-2">→</span>
        </div>
      </div>
    </motion.div>
  )
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Cara Membangun Website yang Profesional untuk Bisnis Anda",
      excerpt: "Panduan lengkap tentang langkah-langkah membangun website berkualitas tinggi yang dapat meningkatkan penjualan dan brand awareness bisnis Anda.",
      date: "Feb 6, 2025",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Tips Mengembangkan Karier di Era Digital",
      excerpt: "Strategi efektif untuk mengembangkan skill dan membangun reputasi digital yang kuat di dunia kerja modern.",
      date: "Feb 4, 2025",
      category: "Career",
    },
    {
      id: 3,
      title: "Pentingnya Branding Digital untuk UMKM",
      excerpt: "Mengapa UMKM perlu memiliki strategi branding digital yang solid dan bagaimana cara memulainya dengan budget terbatas.",
      date: "Jan 30, 2025",
      category: "Digital Marketing",
    },
  ]

  return (
    <section id="blog" className="py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog & <span className="text-gray-600">Artikel Terbaru</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Kumpulan artikel dan tips tentang web development, karier digital, dan strategi bisnis online.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} index={index} {...post} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="bg-gray-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Lihat Semua Artikel
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
