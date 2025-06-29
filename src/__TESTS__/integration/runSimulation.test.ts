import path from "path";
import { promises as fs } from "fs";

import runSimulation from "../../utils/runSimulation";

describe('runSimulation', () => {
  it('doit retourner les positions finales des deux tondeuses', async () => {
    //get file
    const filePath = path.resolve(
        __dirname,
        "../../instructions/instructions.txt"
      );
      //read file
      const text = await fs.readFile(filePath, "utf-8");
      //split
      const lines = text.trim().split("\n");
    const result = runSimulation(lines);
    expect(result).toEqual([
      { x: 1, y: 3, dir: 'W' },
      { x: 2, y: 5, dir: 'N' },
    ]);
  });
});
