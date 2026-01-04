export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        Handmade with ❤️ <span className="yarn-icon">🧶</span> by Samrita
      </div>

      <a
        href="instagram://user?username=quackie_crochet"
        onClick={(e) => {
          // fallback to web if app is not installed
          setTimeout(() => {
            window.location.href = "https://instagram.com/quackie_crochet";
          }, 300);
        }}
        className="footer-instagram"
      >
        <span className="ig-icon" />
        <span>@quackie_crochet</span>
      </a>

      <div className="footer-hint">
        DM to order
      </div>
    </footer>
  );
}
