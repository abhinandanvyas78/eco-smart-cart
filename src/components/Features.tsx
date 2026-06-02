import { Leaf, Droplet, Zap, Award } from 'lucide-react'

export function Features() {
  const features = [
    {
      id: 1,
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'All products are sourced from sustainable and ethical manufacturers'
    },
    {
      id: 2,
      icon: Droplet,
      title: 'Zero Waste',
      description: 'Plastic-free packaging and sustainable delivery options'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Fast Shipping',
      description: 'Quick and reliable delivery to your doorstep'
    },
    {
      id: 4,
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality products with certified eco standards'
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-green-600">EcoMart?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to sustainable living and environmental protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => {
            const Icon = feature.icon
            return (
              <div key={feature.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
