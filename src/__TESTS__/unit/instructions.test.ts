import { promises as fs } from "fs";
import path from "path";
import parseInstructions from "../../utils/parseInstructions";

describe("parseFile", () => {
  it("should Read and split the instructions.txt file into lines", async () => {
    //get file
    const filePath = path.resolve(
      __dirname,
      "../instructions/instructions.txt"
    );
    //read file
    const text = await fs.readFile(filePath, "utf-8");
    //split
    const lines = text.trim().split("\n");
    expect(lines).toEqual(["55", "44 S", "LFRRFFLFRFF", "22 N", "FFRLLRFRLF"]);
  });
  it("should extract the lawn size and the mowners with their instructions ", () => {
    const lines = ["5 5", "4 4 S", "LFRRFFLFRFF", "2 2 N", "FFRLLRFRLF"];
    const result = parseInstructions(lines);
    expect(result).toEqual({
      lawn: { maxX: 5, maxY: 5 },
      mowers: [
        { x: 4, y: 4, dir: "S", instructions: "LFRRFFLFRFF" },
        { x: 2, y: 2, dir: "N", instructions: "FFRLLRFRLF" },
      ],
    });
  });
});
