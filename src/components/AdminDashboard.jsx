import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function AdminDashboard() {
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
      <div className="flex items-center justify-between px-2">
        <h2 className="text-lg font-semibold">
          Admin Panel
        </h2>

        <button
          onClick={() => signOut(auth)}
          className="text-sm opacity-70"
        >
          Logout
        </button>
      </div>

      {/* 🔴 ADD PRODUCT ALWAYS VISIBLE TO ADMIN */}
      <AddProductForm />

      <div className="grid grid-cols-2 gap-4">
        {products.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            isAdmin={true}
          />
        ))}
      </div>
    </div>
  );
}
