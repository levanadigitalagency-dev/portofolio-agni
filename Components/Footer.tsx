import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 lg:px-16 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg">Agnia Alatas</h3>
          <p className="text-sm text-gray-700">West Java, Indonesia</p>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="#" className="text-gray-700">Terms</a>
          <a href="#" className="text-gray-700">Privacy</a>
          <a href="#" className="text-gray-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
