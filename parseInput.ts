import type { Grid, Rover } from "./Types";
import { createRover } from "./createRover";

export const bounds = (input: string): object => {
  const gridBounds = {} as Grid;
  const inputArray = input.split("\n")[0].split(" ");
  gridBounds.x = parseInt(inputArray[0]);
  gridBounds.y = parseInt(inputArray[1]);

  return gridBounds;
};

export const createRovers = (input: string) => {
  const rovers = [];
  const inputArray = input.split("\n");
  for (let i = 1; i < inputArray.length; i = i + 2) {
    rovers.push(createRover(inputArray[i]));
  }

  return rovers;
};

export const directions = (input: string): string[] => {
  const directions = [];
  const inputArray = input.split("\n");
  for (let i = 1; i < inputArray.length; i = i + 2) {
    directions.push(inputArray[i + 1]);
  }

  return directions;
};

export const parseOutput = (rovers) => {
  let resultString = "";
  rovers.forEach((rover) => {
    resultString += `${rover.position.x} ${rover.position.y} ${rover.orientation}\n`;
  });
  return resultString;
};
