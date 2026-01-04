import { useEffect } from "react";

export function useScrollDepth() {
  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle(
        "scroll-depth",
        window.scrollY > 8
      );
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
