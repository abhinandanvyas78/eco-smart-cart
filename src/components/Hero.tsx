export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute w-96 h-96 -right-48 -top-48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#22c55e" d="M50,-80C65.3,-72.3,75.5,-56,79.2,-40.5C82.9,-25,80.1,-10.3,78,-4.3C75.9,1.8,74.5,7.5,72.1,13.8C69.7,20.2,66.3,27.1,60.8,32.5C55.3,37.9,47.6,41.9,40,44.1C32.4,46.3,25,45.8,18.5,42.6C12,39.5,6.5,33.7,2.5,26.5C-1.5,19.3,-3.5,10.7,-4,1.5C-4.5,-7.8,-3.5,-17.6,1.2,-25.5C5.9,-33.4,15.9,-39.4,23.5,-42.1C31.1,-44.8,36.3,-44.1,50,-80Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sustainable Shopping for a <span className="text-green-600">Better Future</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover eco-friendly products that make a difference. Shop consciously, live sustainably.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold">
                Shop Now
              </button>
              <button className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl opacity-20"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-green-300 to-emerald-400 rounded-xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-xl font-semibold">Eco-Friendly</p>
                <p className="text-sm opacity-90">100% Sustainable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
