import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm";

export default function ProductGrid({ isAdmin }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    return onSnapshot(collection(db, "products"), snap => {
      setProducts(
        snap.docs.map(d => ({ id: d.id, ...d.data() }))
      );
    });
  }, []);

  return (
    <div className="space-y-6">
      {isAdmin && (
        <div className="glass p-4">
          <AddProductForm />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
}
