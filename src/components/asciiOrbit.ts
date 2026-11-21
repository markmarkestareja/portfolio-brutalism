/**
 * Dithered ASCII "planet with ring" from the design (Fig. 01 — Orbit).
 * Pure and deterministic, so it's computed once at build time.
 */
export function makeAsciiOrbit(W = 76, H = 36): string {
  const ramp = " .:-=+*#%@";
  const bayer = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];
  const tilt = -0.32;
  const ct = Math.cos(tilt);
  const st = Math.sin(tilt);
  const lines: string[] = [];

  for (let y = 0; y < H; y++) {
    let row = "";
    for (let x = 0; x < W; x++) {
      const nx = (x / (W - 1) - 0.5) * 2.6;
      const ny = (y / (H - 1) - 0.5) * 2.6;
      const d = nx * nx + ny * ny;
      const rx = nx * ct - ny * st;
      const ry = nx * st + ny * ct;
      const ringV = (rx * rx) / (1.22 * 1.22) + (ry * ry) / (0.3 * 0.3);
      const onRing = Math.abs(ringV - 1) < 0.16;
      const ringBehind = ry < 0 && d < 0.74;
      const dither = (bayer[y % 4][x % 4] / 16 - 0.5) * 0.18;
      let ch = " ";

      if (d < 0.74) {
        const z = Math.sqrt(1 - d / 0.74);
        let light = 0.15 + 0.85 * Math.max(0, (-nx * 0.55 - ny * 0.45) / 1.1 + z * 0.62);
        light = Math.min(1, Math.max(0, light + dither));
        ch = ramp.charAt(Math.round(light * (ramp.length - 1)));
        if (ch === " ") ch = ".";
      } else if ((x * 7 + y * 13) % 23 === 0) {
        ch = ".";
      }
      if (onRing && !ringBehind) {
        ch = Math.abs(ringV - 1) < 0.06 ? "=" : "-";
      }
      row += ch;
    }
    lines.push(row);
  }
  return lines.join("\n");
}
