export function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="background-grid" />
      <div className="ambient-ribbon ribbon-one" />
      <div className="ambient-ribbon ribbon-two" />
      <div className="ambient-orbit">
        <span />
        <span />
        <span />
      </div>
      <div className="signal-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="particle-field">
        {Array.from({ length: 16 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}
