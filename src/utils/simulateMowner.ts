type Lawn = { maxX: number; maxY: number };
export type cardinal = "N" | "E" | "S" | "W";
type Start = { x: number; y: number; dir: cardinal };

const turnLeft = { N: "W", W: "S", S: "E", E: "N" };
const turnRight = { N: "E", E: "S", S: "W", W: "N" };

//moving vectors [x,y]
const moveDelta = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0],
};

export default function simulateMower(
  lawn: Lawn,
  start: Start,
  instructions: string
): Start {
  let { x, y, dir } = start;

  for (const cmd of instructions) {
    if (cmd === "L") {
      dir = turnLeft[dir] as cardinal;
    } else if (cmd === "R") {
      dir = turnRight[dir] as cardinal;
    } else {
      // 'F'
      const [deltaX, deltaY] = moveDelta[dir];
      const newX = x + deltaX;
      const newY = y + deltaY;
      //check if the mowner is on the lawn or not
      if (newX >= 0 && newX <= lawn.maxX && newY >= 0 && newY <= lawn.maxY) {
        x = newX;
        y = newY;
      }
    }
  }

  return { x, y, dir };
}
