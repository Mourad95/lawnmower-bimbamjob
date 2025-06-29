import parseInstructions from "./parseInstructions";
import simulateMower, { cardinal } from "./simulateMowner";

type MowerOutput = { x: number; y: number; dir: cardinal };

export default function runSimulation(lines: string[]): MowerOutput[] {
  const { lawn, mowers } = parseInstructions(lines);
  return mowers.map((mower) =>
    simulateMower(
      lawn,
      { x: mower.x, y: mower.y, dir: mower.dir as cardinal },
      mower.instructions
    )
  );
}
