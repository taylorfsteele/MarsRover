export type CardinalDirections = "N" | "S" | "E" | "W";

export interface GridCoordinates {
  x: number;
  y: number;
}

export interface RoverStartingPosition {
  x: number;
  y: number;
  orientation: CardinalDirections;
}

export interface Rover {
  position: {
    x: number;
    y: number;
  };
  orientation: CardinalDirections;
}
