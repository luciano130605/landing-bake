export function FlourBurst() {
  const specks = [
    { dx: "-18px", dy: "-22px" },
    { dx: "16px", dy: "-26px" },
    { dx: "-8px", dy: "-34px" },
    { dx: "22px", dy: "-12px" },
    { dx: "-24px", dy: "-8px" },
  ];
  return (
    <>
      {specks.map((s, i) => (
        <span
          key={i}
          className="burst-speck left-1/2 top-1/2"
          style={{
            ["--dx" as string]: s.dx,
            ["--dy" as string]: s.dy,
            animationDelay: `${i * 30}ms`,
          }}
        />
      ))}
    </>
  );
}
