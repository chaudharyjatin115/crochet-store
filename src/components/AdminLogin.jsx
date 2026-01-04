import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="glass p-6 mt-6">
      <input className="w-full mb-3 p-2 rounded" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input className="w-full mb-3 p-2 rounded" type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button className="btn btn-primary w-full" onClick={login}>
        Admin Login
      </button>
    </div>
  );
}
