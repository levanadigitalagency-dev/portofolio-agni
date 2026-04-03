import React from 'react'

interface TestimonialCardProps {
  quote: string
  name: string
  position: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
}) => {
  return (
    <div className="bg-sky-100 rounded-2xl p-6 shadow-md flex flex-col">
      {/* Quote Mark */}
      <div className="text-3xl text-gray-700 mb-3">“</div>

      {/* Quote Text */}
      <p className="text-base text-gray-800 mb-4 leading-relaxed">
        {quote}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-400 my-4 w-full" />

      {/* Author Info */}
      <div className="mt-auto">
        <h4 className="font-bold text-lg text-gray-900">{name}</h4>
        <p className="text-gray-700 text-sm">{position}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
