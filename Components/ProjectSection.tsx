'use client'

import React, { useState } from 'react'

const ProjectSection = () => {
  const [activeItem, setActiveItem] = useState('AI Automation')
  const menuItems = ['AI Automation', 'Frontend Dev', 'Dev Arsenal']

  const panelContent: Record<string, { title: string; description: string; image: string }> = {
    'AI Automation': {
      title: 'AI Chatbot Customer Service',
      description:
        'An AI-Powered WhatsApp chatbot integrated with automation workflow to improve customer service efficiency.',
      image: '/chatbotworkflow1.png',
    },
    'Frontend Dev': {
      title: 'Frontend Development Showcase',
      description: '',
      image: '',
    },
    'Dev Arsenal': {
      title: 'Developer Arsenal Tools',
      description: '',
      image: '',
    },
  }

  const toolsUsed = [
    { label: 'LLM Integration (OpenAI API)', icon: '/toolsicons/OpenAI.png' },
    { label: 'Workflow Automation (n8n)', icon: '/toolsicons/n8n.png' },
    { label: 'WhatsApp API (WAHA)', icon: '/toolsicons/WhatsApp.png' },
    { label: 'Database (Supabase + Postgres)', icon: '/toolsicons/supabase.png' },
  ]

  const activePanel = panelContent[activeItem]

  return (
    <section className="bg-gradient-to-b from-sky-100 via-sky-50 to-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">My Portofolio</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
          A presentation about how I go through the process of creating creative designs.
        </h2>

        <div className="mt-8 inline-flex rounded-xl gap-1 bg-black p-1 shadow-lg">
          {menuItems.map((item) => {
            const isActive = item === activeItem
            return (
              <button
                key={item}
                onClick={() => setActiveItem(item)}
                className={`px-5 py-2 text-sm md:text-base font-semibold rounded-lg transition ${isActive
                    ? 'bg-white text-black shadow-inner'
                    : 'text-gray-200 hover:text-white hover:bg-gray-700'
                  }`}
              >
                {item}
              </button>
            )
          })}
        </div>

      </div>

      <div className="mt-14 max-w-6xl mx-auto ">
        {activeItem === 'AI Automation' ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-b pb-10 border-gray-200">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">{activePanel.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-600">Project done : PT Havenwell Property & Chatbot SMKN 1 Sumedang</p>
                <p className="mt-4 text-base md:text-[24px] text-gray-700 leading-relaxed">{activePanel.description}</p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src={activePanel.image}
                  alt={`${activeItem} Illustration`}
                  className="w-full max-w-xl rounded-2xl border border-gray-200 shadow-md"
                />
              </div>
            </div>

            <section className="mt-10 pt-6">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 ">Tools Used</h4>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {toolsUsed.map((tool) => (
                  <div
                    key={tool.label}
                    className="rounded-lg p-4 text-left flex items-center justify-between gap-3 bg-sky-100 text-gray-900 shadow-md border border-white/20"
                  >
                    <img src={tool.icon} alt={`${tool.label} Icon`} className="w-6 h-6 md:w-8 md:h-8" />
                    <span className="text-sm md:text-base font-semibold">{tool.label}</span>
                  </div>
                )
                )
                }
              </div>

              <h4 className="mt-8 text-xl md:text-2xl font-bold text-gray-900">Key Features</h4>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl bg-sky-100 p-5 text-gray-900 shadow-lg">
                  <h5 className="font-bold text-lg">Auto Responses</h5>
                  <p className="mt-2 text-sm text-gray-800">Memberikan respon otomatis menggunakan LLM berdasar pertanyaan pengguna secara kontekstual.</p>
                </div>
                <div className="rounded-xl bg-sky-100 p-5 text-gray-900 shadow-lg">
                  <h5 className="font-bold text-lg">Property Detail Information</h5>
                  <p className="mt-2 text-sm text-gray-800">Menyediakan informasi lengkap terkait properti seperti harga, lokasi, spesifikasi, dan ketersediaan.</p>
                </div>
                <div className="rounded-xl bg-sky-100 p-5 text-gray-900 shadow-lg">
                  <h5 className="font-bold text-lg">Company Information Service</h5>
                  <p className="mt-2 text-sm text-gray-800">Menyediakan informasi terkait properti dan layanan perusahaan untuk pengguna secara dinamis.</p>
                </div>
              </div>
              <section className=" max-w-6xl mx-auto overflow-hidden">
                <div className="py-10 lg:py-16">
                  <h3 className="text-3xl md:text-3xl font-bold text-gray-800">Workflow</h3>
                  <p className="mt-4 text-base md:text-lg text-gray-700 max-w-3xl">
                    Visualisasi alur kerja automation AI yang mendukung chat dan database realtime.
                  </p>
                </div>
                <div className="">
                  <img src="/workflow.png" alt="Workflow" className="w-full h-auto object-cover" />
                </div>
              </section>
            </section>
          </>
        ) : activeItem === 'Frontend Dev' ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Sistem Pengelolaan - Desa Hegarmanah', image: '/hegarmanah.png' },
                { title: 'Strata Academy', image: '/StrataAcademy.png' },
                { title: 'Citowrite.id', image: '/citowrite.png' },
                { title: 'Web Biography - Alvian Yapanto', image: '/alvian.png' },
                { title: 'Growskill.id', image: '/growskill.png' },
                { title: 'Prodigscale', image: '/prodigscale.png' },
              ].map((project) => (
                <div key={project.title} className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-xl font-medium text-white">{project.title}</h4>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="h-72 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50">
            <h3 className="text-2xl font-semibold text-gray-600">{activePanel.title}</h3>
            <p className="mt-2 text-sm text-gray-500">Konten sedang dikosongkan untuk pengembangan.</p>
            <p className="mt-2 text-gray-400">Kembali ke AI Automation untuk melihat demo saat ini.</p>
          </div>
        )}
      </div>


    </section>
  )
}

export default ProjectSection