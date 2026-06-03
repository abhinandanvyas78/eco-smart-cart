import { X, Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const products = [
    { id: 1, name: 'Bamboo Water Bottle', price: 24.99, eco: 'Eco' },
    { id: 2, name: 'Organic Cotton T-Shirt', price: 39.99, eco: 'Organic' },
    { id: 3, name: 'Natural Soap Set', price: 19.99, eco: 'Natural' },
    { id: 4, name: 'Reusable Grocery Bag', price: 14.99, eco: 'Reusable' },
    { id: 5, name: 'Solar Power Bank', price: 49.99, eco: 'Solar' },
    { id: 6, name: 'Bamboo Cutting Board', price: 29.99, eco: 'Eco' },
    { id: 7, name: 'Stainless Steel Lunch Box', price: 34.99, eco: 'Durable' },
    { id: 8, name: 'Bamboo Toothbrush Pack', price: 12.99, eco: 'Eco' },
  ]

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.eco.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mt-6">
              {results.length > 0 ? (
                <div className="grid md:grid-cols-4 gap-4">
                  {results.map(product => (
                    <div
                      key={product.id}
                      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition cursor-pointer"
                    >
                      <div className="text-3xl mb-2">🌿</div>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                      <p className="text-green-600 font-bold mt-2">${product.price}</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mt-2">
                        {product.eco}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}

          {!searchQuery && (
            <div className="mt-6 text-center text-gray-500">
              <p>Type to search our eco-friendly products</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
