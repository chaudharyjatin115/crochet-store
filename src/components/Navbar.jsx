import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="mt-6 mb-6">
      <div className="glass header-glass px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/70 dark:bg-white/10">
            🧶
          </div>

          <h1 className="text-[15px] font-semibold tracking-tight">
            Quackie Crochet Store
          </h1>

          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/60 dark:bg-white/10 active:scale-95"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
