import React from 'react'

const questions = [
  {
    q: 'How long does it take to get a website?',
    a: 'Typical delivery time is 1-3 weeks depending on scope and revisions.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes, we offer optional maintenance packages after launch.',
  },
  {
    q: 'Can I update content myself?',
    a: 'Absolutely — we give you access and a short guide to update content.',
  },
]

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-4 text-sm md:text-base text-gray-700 max-w-2xl mx-auto">Answers to the most common questions about working with us.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {questions.map((item, idx) => (
          <details key={idx} className="bg-white border rounded-xl p-5">
            <summary className="font-semibold cursor-pointer">{item.q}</summary>
            <p className="mt-3 text-gray-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
