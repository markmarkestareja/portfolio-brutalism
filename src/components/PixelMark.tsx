/** Pixel "M" monogram (7×7 grid) and the small 5×5 logo mark from the design. */

const glow = "drop-shadow(0 0 12px rgba(60, 200, 238, 0.5))";

export function PixelMonogram({
  size = 72,
  label,
  cutout = "var(--bg)",
}: {
  size?: number;
  label?: string;
  /** Colour of the "M" strokes — match the background it sits on. */
  cutout?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 7"
      style={{ display: "block", flex: "0 0 auto", filter: glow }}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <rect width="7" height="7" fill="var(--accent)" />
      <rect x="1" y="1" width="1" height="5" fill={cutout} />
      <rect x="5" y="1" width="1" height="5" fill={cutout} />
      <rect x="2" y="2" width="1" height="1" fill={cutout} />
      <rect x="3" y="3" width="1" height="1" fill={cutout} />
      <rect x="4" y="2" width="1" height="1" fill={cutout} />
    </svg>
  );
}

export function PixelLogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 5 5" aria-hidden="true" style={{ display: "block" }}>
      <rect width="5" height="5" fill="var(--accent)" />
      <rect x="1" y="1" width="1" height="1" fill="var(--bg)" />
      <rect x="2" y="2" width="1" height="1" fill="var(--bg)" />
      <rect x="3" y="1" width="1" height="1" fill="var(--bg)" />
      <rect x="1" y="3" width="3" height="1" fill="var(--bg)" />
    </svg>
  );
}
