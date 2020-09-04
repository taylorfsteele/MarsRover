import { CardinalDirections, GridCoordinates } from "./Types";

const cardinals: Record<
  CardinalDirections,
  {
    L: CardinalDirections;
    R: CardinalDirections;
    move: (x: number, y: number) => GridCoordinates;
  }
> = {
  N: {
    L: "W",
    R: "E",
    move: (x, y) => ({ x: x, y: y + 1 }),
  },
  E: {
    L: "N",
    R: "S",
    move: (x, y) => ({ x: x + 1, y: y }),
  },
  S: {
    L: "E",
    R: "W",
    move: (x, y) => ({ x: x, y: y - 1 }),
  },
  W: {
    L: "S",
    R: "N",
    move: (x, y) => ({ x: x - 1, y: y }),
  },
};

export default cardinals;
