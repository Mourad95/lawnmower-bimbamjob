import { promises as fs } from "fs";
import path from "path";

describe("parseFile", () => {
  it("doit lire et splitter le fichier instructions.txt en lignes", async () => {
    //get file
    const filePath = path.resolve(__dirname, "../instructions/instructions.txt");
    //parse file to string
    const text = await fs.readFile(filePath, "utf-8");
    //remove space
    const lines = text.trim().split("\n");
    expect(lines).toEqual(["55", "44 S", "LFRRFFLFRFF", "22 N", "FFRLLRFRLF"]);
  });
});
