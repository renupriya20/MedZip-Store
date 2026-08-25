export default function ProductCard({ product, onAdd }) {
    return (
        <div className="bg-white rounded-2xl border p-3 hover:shadow-md transition">
            <div className="bg-gray-50 rounded-xl h-28 flex items-center justify-center text-5xl mb-3">
                {product.image}
            </div>
            <div className="space-y-1">
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    ⚡ {product.delivery}
                </p>
                <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                    ★ {product.rating}
                </div>
                <div className="flex items-center justify-between pt-1">
                    <div>
                        <span className="font-bold">₹{product.price}</span>
                        <span className="text-xs text-gray-400 line-through ml-1">₹{product.originalPrice}</span>
                    </div>
                    <button
                        onClick={() => onAdd(product)}
                        className="bg-emerald-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-700"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}