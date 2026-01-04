import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useAdmin } from "./hooks/useAdmin";
import { useScrollDepth } from "./hooks/useScrollDepth";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import AdminAuth from "./pages/AdminAuth";

export default function App() {
  const [user, setUser] = useState(null);

  // hook is called here 
  useScrollDepth();

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);

  const { isAdmin, loading } = useAdmin(user);
  if (loading) return null;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-wool min-h-screen">
            <div className="app-shell">
              <Navbar />
              {isAdmin ? <AdminDashboard /> : <ProductGrid isAdmin={false} />}
              <Footer />
            </div>
          </div>
        }
      />

      <Route path="/__admin" element={<AdminAuth />} />
    </Routes>
  );
}
