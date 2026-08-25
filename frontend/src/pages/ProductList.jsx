import { useState, useMemo } from "react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductList({ onAdd, selectedCategory = "All" }) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState(selectedCategory);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory =
                activeCategory === "All" || product.category === activeCategory;
            const matchesSearch = product.name
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        {activeCategory === "All" ? "All Products" : activeCategory}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        {filteredProducts.length} items • 10 min delivery
                    </p>
                </div>

                {/* Search */}
                <div className="relative w-full sm:w-72">
                    <input
                        type="text"
                        placeholder="Search medicines..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-4 pr-4 py-2.5 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button
                    onClick={() => setActiveCategory("All")}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${activeCategory === "All"
                        ? "bg-emerald-600 text-white"
                        : "bg-white border text-gray-600 hover:bg-gray-50"
                        }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition ${activeCategory === cat.name
                            ? "bg-emerald-600 text-white"
                            : "bg-white border text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        {cat.icon} {cat.name}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-5xl mb-4">🔍</p>
                    <h3 className="text-lg font-medium text-gray-700">No products found</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Try changing the category or search term
                    </p>
                </div>
            )}
        </div>
    );
}