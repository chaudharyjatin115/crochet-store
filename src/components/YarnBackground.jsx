export default function YarnBackground() {
  const rolls = Array.from({ length: 40 });

  return (
    <div className="wool-layer">
      {rolls.map((_, i) => (
        <div
          key={i}
          className={`wool ${
            i % 3 === 0 ? "pink" : i % 3 === 1 ? "purple" : "mint"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
