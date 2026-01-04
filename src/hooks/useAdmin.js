import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useState } from "react";

export function useAdmin(user) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    const run = async () => {
      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);

        setIsAdmin(
          snap.exists() && snap.data()?.role === "admin"
        );
      } catch {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [user]);

  return { isAdmin, loading };
}
