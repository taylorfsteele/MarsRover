import { Rover, Grid } from "./Types";

export const checkBounds = ({ position }, gridBounds: Grid, j: number): void => {
  if (position.x > gridBounds.x || position.x < 0 || position.y > gridBounds.y || position.y < 0) {
    throw Error(`Cannot run, Rover #${j + 1} goes out of bounds`);
  }
};

export const checkCollisions = (x: number, y: number, movedRoversArray: Rover[]): void => {
  if (movedRoversArray.length) {
    for (let i = 0; i < movedRoversArray.length; i++) {
      if (movedRoversArray[i].position.x === x && movedRoversArray[i].position.y === y) {
        throw Error(`Cannot run due to rover collision at ${x}, ${y}`);
      }
    }
  }
};
