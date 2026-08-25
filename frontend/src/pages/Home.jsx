import { categories, products } from "../data/products";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";

export default function Home({ onAdd }) {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
            {/* Banner */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-6 md:p-8 text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Medicines at your door in 10 minutes</h1>
                <p className="opacity-90">Order now • Genuine medicines • Free delivery above ₹199</p>
            </div>

            {/* Categories */}
            <section>
                <h2 className="font-bold text-lg mb-4">Shop by Category</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} category={cat} />
                    ))}
                </div>
            </section>

            {/* Products */}
            <section>
                <h2 className="font-bold text-lg mb-4">Popular Near You</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} onAdd={onAdd} />
                    ))}
                </div>
            </section>
        </div>
    );
}