import { ShoppingCart, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  rating: number
  eco: string
}

export function ProductCard({ id, name, price, image, rating, eco }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, eco })
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group">
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300">
          {image}
        </div>
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {eco}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          {'⭐'.repeat(Math.floor(rating))}
          <span className="text-sm text-gray-500">({rating})</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">${price}</span>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
            </button>
            <button 
              onClick={handleAddToCart}
              className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
