import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { uploadToCloudinary } from "../utils/uploadImage";

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const submit = async () => {
    if (!form.name || !form.image) {
      alert("Product name and image are required");
      return;
    }

    setLoading(true);

    try {
      const imageUrl = await uploadToCloudinary(form.image);

      await addDoc(collection(db, "products"), {
        name: form.name,
        price: form.price || "",
        description: form.description || "",
        imageUrl,
        isAvailable: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setForm({
        name: "",
        price: "",
        description: "",
        image: null,
      });
    } catch (err) {
      console.error("ADD PRODUCT ERROR:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <input
        className="input"
        placeholder="Product name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />

      <input
        className="input"
        placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />

      <textarea
        className="input"
        placeholder="Description"
        value={form.description}
        onChange={e =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        type="file"
        accept="image/*"
        onChange={e =>
          setForm({ ...form, image: e.target.files[0] })
        }
      />

      <button
        onClick={submit}
        disabled={loading}
        className="btn btn-primary w-full"
      >
        {loading ? "Adding…" : "Add Product"}
      </button>
    </div>
  );
}
