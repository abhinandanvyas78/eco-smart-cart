import { ProductCard } from './ProductCard'

export function Products() {
  const products = [
    {
      id: 1,
      name: 'Bamboo Water Bottle',
      price: 24.99,
      image: '🍶',
      rating: 4.8,
      eco: 'Eco'
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      price: 39.99,
      image: '👕',
      rating: 4.6,
      eco: 'Organic'
    },
    {
      id: 3,
      name: 'Natural Soap Set',
      price: 19.99,
      image: '🧼',
      rating: 4.9,
      eco: 'Natural'
    },
    {
      id: 4,
      name: 'Reusable Grocery Bag',
      price: 14.99,
      image: '🛍️',
      rating: 4.7,
      eco: 'Reusable'
    },
    {
      id: 5,
      name: 'Solar Power Bank',
      price: 49.99,
      image: '🔋',
      rating: 4.5,
      eco: 'Solar'
    },
    {
      id: 6,
      name: 'Bamboo Cutting Board',
      price: 29.99,
      image: '🪵',
      rating: 4.8,
      eco: 'Eco'
    },
    {
      id: 7,
      name: 'Stainless Steel Lunch Box',
      price: 34.99,
      image: '🍱',
      rating: 4.7,
      eco: 'Durable'
    },
    {
      id: 8,
      name: 'Bamboo Toothbrush Pack',
      price: 12.99,
      image: '🪥',
      rating: 4.9,
      eco: 'Eco'
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-green-600">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked eco-friendly products that make a real difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
