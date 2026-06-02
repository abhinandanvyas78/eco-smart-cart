
# 🌱 EcoMart - Sustainable Shopping Platform

A modern, professional e-commerce frontend for eco-friendly products built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful, responsive interface with green eco-theme
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🌍 **Eco-Friendly Focus** - Dedicated to sustainable products and practices
- 🔧 **TypeScript** - Type-safe development for better code quality
- 💚 **Tailwind CSS** - Utility-first styling for rapid development
- 🎯 **Component-Based** - Reusable, modular React components

## 📦 Tech Stack

- **Frontend Framework**: React 19+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Package Manager**: npm / bun
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or bun
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/abhinandanvyas78/eco-smart-cart.git

# Navigate to project directory
cd ecomart--main

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080/` (or next available port)

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Hero.tsx          # Landing hero section
│   ├── Products.tsx      # Product showcase
│   ├── ProductCard.tsx   # Individual product component
│   ├── Features.tsx      # Why choose EcoMart section
│   └── Footer.tsx        # Footer with contact info
├── App.tsx               # Main app component
├── main.tsx              # React entry point
└── index.css            # Global styles

public/
└── assets               # Static assets

index.html              # HTML entry point
```

## 🎨 Component Overview

### **Navbar**
- Sticky navigation with logo
- Mobile-responsive menu
- Search, cart, and user account icons

### **Hero Section**
- Eye-catching banner
- Call-to-action buttons
- Gradient backgrounds

### **Products**
- 8 featured eco-friendly products
- Product cards with ratings
- Add to cart & wishlist functionality

### **Features**
- Eco-friendly benefits showcase
- Key selling points with icons
- Trust indicators

### **Footer**
- Quick links
- Support resources
- Contact information
- Social media links

## � Live Demo

Visit the live application: [EcoMart Demo](http://localhost:8082/)

## 🔧 Troubleshooting

### Port Already in Use
If port 8080 is already in use, Vite will automatically try the next available port (8081, 8082, etc.)

### Cache Issues
Clear browser cache (Ctrl + Shift + Delete) or use incognito mode if changes don't appear

### Module Not Found
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
```

### Build Errors
```bash
# Clear Vite cache
rm -r node_modules/.vite
npm run dev
```

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Environment Variables

No environment variables required for basic setup. All configuration is in `vite.config.ts` and `tailwind.config.ts`.

## 🚧 Future Enhancements

- [ ] Shopping cart functionality
- [ ] User authentication (login/signup)
- [ ] Product filtering & search
- [ ] Wishlist persistence
- [ ] Order management
- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] User reviews & ratings
- [ ] Email notifications
- [ ] Multi-language support

## 📖 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [shadcn/ui](https://ui.shadcn.com/)

## �🌐 Contact Information

📧 **Email**: abhinandanvyas@ecomart.com  
📱 **Phone**: +91 8600000000  
📍 **Location**: Palampur, Himachal Pradesh, India

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 💚 Made with love for the planet 🌍

Let's build a sustainable future together!
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/633c11ad-72a3-4d61-93e6-3118a84b724d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
