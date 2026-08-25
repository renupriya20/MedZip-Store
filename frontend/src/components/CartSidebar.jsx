import { X, Plus, Minus } from "lucide-react";

export default function CartSidebar({ isOpen, onClose, cart, onUpdateQty }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
            <div className="relative bg-white w-full max-w-md h-full shadow-xl flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="font-bold text-lg">Your Cart</h2>
                    <button onClick={onClose}><X size={22} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cart.length === 0 ? (
                        <p className="text-center text-gray-500 mt-10">Cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="flex gap-3 items-center">
                                <div className="text-3xl">{item.image}</div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">{item.name}</p>
                                    <p className="text-sm font-semibold">₹{item.price}</p>
                                </div>
                                <div className="flex items-center gap-2 border rounded-lg">
                                    <button onClick={() => onUpdateQty(item.id, -1)} className="p-1"><Minus size={14} /></button>
                                    <span className="text-sm w-6 text-center">{item.qty}</span>
                                    <button onClick={() => onUpdateQty(item.id, 1)} className="p-1"><Plus size={14} /></button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-4 border-t space-y-3">
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>
                        <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700">
                            Proceed to Checkout • 10 min delivery
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}