import { useState } from 'react'
import { Menu, X, Leaf, ShoppingCart, User, Search } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { CartModal } from './CartModal'
import { SearchModal } from './SearchModal'
import { UserMenu } from './UserMenu'
import { LoginModal } from './LoginModal'
import { SignUpModal } from './SignUpModal'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <>
      <nav className="sticky top-0 z-40 bg-white shadow-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">EcoMart</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-600 hover:text-green-600 transition">
                Products
              </a>
              <a href="#features" className="text-gray-600 hover:text-green-600 transition">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition">
                Contact
              </a>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition relative"
              >
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition hidden md:block"
              >
                <User className="w-5 h-5 text-gray-600" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <a href="#products" className="block py-2 text-gray-600 hover:text-green-600">
                Products
              </a>
              <a href="#features" className="block py-2 text-gray-600 hover:text-green-600">
                Features
              </a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-green-600">
                About
              </a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-green-600">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* User Menu */}
      <UserMenu 
        isOpen={isUserMenuOpen} 
        onClose={() => setIsUserMenuOpen(false)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
      />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSwitchToSignUp={() => {
          setIsLoginOpen(false)
          setIsSignUpOpen(true)
        }}
      />

      {/* Sign Up Modal */}
      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)}
        onSwitchToLogin={() => {
          setIsSignUpOpen(false)
          setIsLoginOpen(true)
        }}
      />
    </>
  )
}
