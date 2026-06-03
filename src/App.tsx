import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Features } from './components/Features'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
