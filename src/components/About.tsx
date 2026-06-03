import { Heart, Globe, Users } from 'lucide-react'

export function About() {
  const values = [
    {
      id: 1,
      icon: Heart,
      title: 'Passion for Planet',
      description: 'We deeply care about protecting our environment for future generations'
    },
    {
      id: 2,
      icon: Globe,
      title: 'Global Impact',
      description: 'Supporting sustainable businesses worldwide and reducing carbon footprint'
    },
    {
      id: 3,
      icon: Users,
      title: 'Community First',
      description: 'Building a community of conscious consumers committed to eco-living'
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">EcoMart</span>
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              EcoMart is your one-stop destination for sustainable, eco-friendly products that don't compromise on quality or style. We believe that living sustainably shouldn't be difficult or expensive.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to make eco-friendly living accessible to everyone by offering carefully curated products from ethical and sustainable brands around the world.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
              Learn More
            </button>
          </div>
          <div className="bg-green-100 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold text-gray-900">Sustainable Shopping</h3>
            <p className="text-gray-600 mt-2">Every purchase helps protect our planet</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map(value => {
            const Icon = value.icon
            return (
              <div key={value.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
