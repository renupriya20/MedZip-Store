import { Search, MapPin, ShoppingCart, Clock } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="bg-emerald-600 text-white font-bold text-xl px-3 py-1 rounded-lg">
                        MedZip
                    </div>
                    <div className="hidden sm:flex items-center gap-1 text-emerald-600 text-sm font-medium">
                        <Clock size={16} />
                        <span>10 min delivery</span>
                    </div>
                </div>

                {/* Location */}
                <div className="hidden md:flex items-center gap-1 text-sm text-gray-600 cursor-pointer hover:text-emerald-600">
                    <MapPin size={18} className="text-emerald-600" />
                    <span className="font-medium">Home • Sector 62</span>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-xl relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search medicines, health products..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                </div>

                {/* Cart */}
                <button
                    onClick={onCartClick}
                    className="relative p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition"
                >
                    <ShoppingCart size={20} />
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}