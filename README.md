# MediZap ⚡

**Medicines at your door in 10 minutes**

MediZap is a modern, Blinkit-style frontend React application for a quick-commerce medical store. Users can browse medicines, personal care products, and health essentials with lightning-fast 10-minute delivery branding.

---

## 🚀 Features

- **10-Minute Delivery Branding** – Prominent UI indicators for superfast delivery
- **Category Browsing** – Medicines, Personal Care, Baby Care, Health Devices, Vitamins, First Aid
- **Product Listing** – Clean product cards with price, discount, rating & ADD button
- **Smart Search & Filters** – Search products + filter by category
- **Cart System** – Add/remove items, quantity control, and cart sidebar
- **Login & Signup Pages** – Beautiful authentication UI (frontend only)
- **Fully Responsive** – Works smoothly on mobile, tablet, and desktop
- **Modern UI** – Emerald green medical theme with clean Tailwind design

---

## 🛠️ Tech Stack

- **React 18** (Vite)
- **React Router DOM** – Client-side routing
- **Tailwind CSS** – Utility-first styling
- **Lucide React** – Beautiful icons
- **JavaScript (ES6+)**

---

## 📁 Project Structure
```
medizap/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CategoryCard.jsx
│   │   └── CartSidebar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

1. **Clone the repository** (or create the project manually)
   ```bash
   git clone <your-repo-url>
   cd medizap
   npm install
   npm install react-router-dom lucide-react
   npm install -D tailwindcss @tailwindcss/vite
   ```

## Run the development server
```
npm run dev
```
## Open browser and visit
```
http://localhost:5173
```

## 📦 Available Scripts
| Command          | Description                     |
|------------------|---------------------------------|
| `npm run dev`    | Start development server        |
| `npm run build`  | Build for production            |
| `npm run preview`| Preview production build        |

## 🎨 UI Theme
```
Primary Color: Emerald (#059669)
Accent: Teal gradient
Clean white cards with soft shadows
Rounded corners & modern spacing
Mobile-first responsive design
```



## 🔮 Future Improvements
```
Backend integration (Node.js + MongoDB / Firebase)
Real authentication (JWT / Firebase Auth)
Payment gateway integration
Order tracking page
User profile & address management
Prescription upload feature
Dark mode toggle
PWA support
```



## 👨‍💻 Author

Built with ❤️ as a frontend project inspired by Blinkit-style quick commerce.



## 📄 License

This project is open source and available under the MIT License.
