import * as parseInputs from "./parseInput";
import { checkBounds } from "./checkFailures";
import executeDirections from "./executeDirections";
import { Grid, Rover } from "./Types";

export const main = (input: string) => {
  const gridBounds = parseInputs.bounds(input) as Grid;
  const rovers = parseInputs.createRovers(input) as Rover[];
  const directions = parseInputs.directions(input) as string[];
  const movedRoversArray = [] as Rover[];

  for (let i = 0; i < directions.length; i++) {
    movedRoversArray.push(executeDirections(directions[i], rovers[i], movedRoversArray));
  }

  for (let j = 0; j < movedRoversArray.length; j++) {
    checkBounds(movedRoversArray[j], gridBounds, j);
  }

  const result = parseInputs.parseOutput(movedRoversArray);
  return result;
};

//Comment everything below before running npm test

let input = ``; //Paste input here for in-line input

//Uncomment below & paste input above to use input in-line. Comment out lines 30-44 to disable read from file. Need to use in-line for testing
//console.log(main(input))

const fs = require("fs");
const readline = require("readline").createInterface({
  input: fs.createReadStream("./PutInputsHere.txt"),
  output: process.stdout,
  console: false,
  terminal: false,
});
readline.on("line", (line) => {
  input = input.concat(line, "\n");
});
readline.on("close", () => {
  console.log(`Rover inputs: \n${input}`);
  console.log(main(input));
  process.exit(0);
});
