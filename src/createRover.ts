import type { RoverStartingPosition, Rover, CardinalDirections } from "./Types";

export const createRover = (startingPosition: string): Rover => {
  const location = parseLocationValues(startingPosition);
  const rover: Rover = {
    position: {
      x: location.x,
      y: location.y,
    },
    orientation: location.orientation,
  };

  return rover;
};

const parseLocationValues = (startingPosition: string): RoverStartingPosition => {
  const locationValues = {
    x: parseInt(startingPosition.split(" ")[0]),
    y: parseInt(startingPosition.split(" ")[1]),
    orientation: startingPosition.split(" ")[2] as CardinalDirections,
  };

  return locationValues;
};
