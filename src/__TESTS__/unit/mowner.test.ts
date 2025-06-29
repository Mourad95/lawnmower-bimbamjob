import simulateMower, { cardinal } from "../../utils/simulateMowner";

describe("simulateMower", () => {
  const lawn = { maxX: 5, maxY: 5 };

  it("mowner 1 → [1,3] W", () => {
    //localisation and orientation
    const start = { x: 4, y: 4, dir: "S" as cardinal };

    const instructions = "LFRRFFLFRFF";
    const result = simulateMower(lawn, start, instructions);
    expect(result).toEqual({ x: 1, y: 3, dir: "W" });
  });

  it("mowner 2 → [2,5] N", () => {
    //localisation and orientation

    const start = { x: 2, y: 2, dir: "N" as cardinal };

    const instructions = "FFRLLRFRLF";
    const result = simulateMower(lawn, start, instructions);
    expect(result).toEqual({ x: 2, y: 5, dir: "N" });
  });
});
