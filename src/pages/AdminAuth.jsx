import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      console.log("LOGIN SUCCESS");
      navigate("/"); // 🔴 THIS WAS MISSING
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert(err.code);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-wool min-h-screen flex items-center justify-center">
      <div className="glass p-5 w-full max-w-sm space-y-3">
        <input
          type="email"
          placeholder="Admin email"
          className="w-full rounded px-3 py-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded px-3 py-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button
          type="button"            // 🔴 prevents form submit
          onClick={login}
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {loading ? "Logging in…" : "Login"}
        </button>
      </div>
    </div>
  );
}
