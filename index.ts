const prompt = require("prompt");

import * as parseInputs from "./parseInput";
import { checkBounds } from "./checkFailures";
import executeDirections from "./executeDirections";
import { Grid, Rover } from "./Types";

const main = (input: string) => {
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

const testInput = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

prompt.start();

prompt.get("Rover Input:", function (err, input) {
  if (err) {
    return onErr(err);
  }
  console.log(main(input));
});

function onErr(err) {
  console.log(err);
  return 1;
}
