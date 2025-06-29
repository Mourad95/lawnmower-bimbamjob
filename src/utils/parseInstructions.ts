function splitCoords(str: string): string[] {
  // /\d|[NESW]/g
  // matches any single digit (0–9) or one of the letters N, E, S, W;
  // the ‘g’ flag makes it find all occurrences in the string
  const tokens = str.trim().match(/\d|[NESW]/g);
  if (!tokens) throw new Error(`Mauvais format : "${str}"`);
  return tokens;
}

export default function parseInstructions(lines: string[]) {
  // lawn
  const lawnTokens = splitCoords(lines[0]);
  const [maxX, maxY] = lawnTokens.map(Number);
  const mowers = [];
  // mowners
  for (let i = 1; i < lines.length; i += 2) {
    const [xStr, yStr, dir] = splitCoords(lines[i]);
    const instructions = lines[i + 1].trim();
    mowers.push({
      x: Number(xStr),
      y: Number(yStr),
      dir: dir as "N" | "E" | "S" | "W",
      instructions,
    });
  }
  return { lawn: { maxX, maxY }, mowers };
}
