import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function ProductCard({ product, isAdmin }) {
  const toggleAvailability = async () => {
    await updateDoc(doc(db, "products", product.id), {
      isAvailable: !product.isAvailable,
    });
  };

  const remove = async () => {
    if (!confirm("Delete this product?")) return;
    await deleteDoc(doc(db, "products", product.id));
  };

  return (
    <div className="glass p-3 relative">
      {!product.isAvailable && (
        <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur flex items-center justify-center text-white rounded text-sm">
          Sold Out
        </div>
      )}

      {product.imageUrl && (
        <img
          src={product.imageUrl}
          className="rounded mb-2 aspect-square object-cover"
        />
      )}

      <div className="text-sm font-medium">{product.name}</div>
      <div className="text-xs opacity-70">₹{product.price}</div>

      {/* ACTIONS */}
      <div className="card-actions mt-2">
        {isAdmin ? (
          <>
            <button
              onClick={toggleAvailability}
              className="card-btn btn-edit micro-bounce"
            >
              {product.isAvailable ? "Mark Sold" : "Mark Available"}
            </button>

            <button
              onClick={remove}
              className="card-btn btn-delete micro-bounce"
            >
              Delete
            </button>
          </>
        ) : (
          product.isAvailable && (
            <a
              href={`https://instagram.com/direct/new/?text=Hi! I want to order ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn btn-buy micro-bounce inline-flex items-center gap-2"
            >
              <span className="yarn-icon">🧶</span>
              Buy
            </a>
          )
        )}
      </div>
    </div>
  );
}
