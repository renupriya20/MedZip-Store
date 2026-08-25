export default function CategoryCard({ category }) {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${category.color} flex items-center justify-center text-3xl group-hover:scale-105 transition`}>
                {category.icon}
            </div>
            <span className="text-xs md:text-sm font-medium text-gray-700 text-center">
                {category.name}
            </span>
        </div>
    );
}