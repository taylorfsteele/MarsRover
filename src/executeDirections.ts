import type { Rover } from "./Types";
import cardinals from "./cardinalDictionary";
import { checkCollisions } from "./checkFailures";

const executeDirections = (directions: string, rover: Rover, movedRoversArray: Rover[]) => {
  const movedRover = rover;

  for (const letter of directions) {
    if (letter === "M") {
      movedRover.position = cardinals[movedRover.orientation]["move"](
        movedRover.position.x,
        movedRover.position.y,
      );
      checkCollisions(movedRover.position.x, movedRover.position.y, movedRoversArray);
    } else {
      //any changes to orientation made in cardinalDictionary
      //Strategy design pattern
      movedRover.orientation = cardinals[movedRover.orientation][letter];
    }
  }

  return movedRover;
};

export default executeDirections;
