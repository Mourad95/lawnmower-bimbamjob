type Mower = { x: number; y: number; dir: string; instructions: string };
type Parsed = { lawn: { maxX: number; maxY: number }; mowers: Mower[] };

export default function parseInstructions(lines: string[]): Parsed {
  // lawn
  const [maxX, maxY] = lines[0].split(' ').map(Number);
  const mowers: Mower[] = [];
  // mowners
  for (let i = 1; i < lines.length; i += 2) {
    const [x, y, dir] = lines[i].split(' ');
    const instructions = lines[i + 1];
    mowers.push({ x: Number(x), y: Number(y), dir, instructions });
  }
  return { lawn: { maxX, maxY }, mowers };
}
