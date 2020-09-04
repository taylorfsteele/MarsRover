export interface Grid {
  x: number;
  y: number;
}

export interface RoverStartingPosition {
  x: number;
  y: number;
  orientation: "N" | "S" | "E" | "W";
}

export interface Rover {
  position: {
    x: number;
    y: number;
  };
  orientation: "N" | "S" | "E" | "W";
}
