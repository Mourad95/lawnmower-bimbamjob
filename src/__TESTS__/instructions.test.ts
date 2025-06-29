import { promises as fs } from "fs";
import path from "path";

describe("parseFile", () => {
  it("doit lire et splitter le fichier instructions.txt en lignes", async () => {
    const filePath = path.resolve(__dirname, "../instructions.txt");
    const text = await fs.readFile(filePath, "utf-8");
    const lines = text.trim().split("\n");
    expect(lines).toEqual(["55", "44 S", "LFRRFFLFRFF", "22 N", "FFRLLRFRLF"]);
  });
});
