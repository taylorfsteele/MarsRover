import { main } from "../index";
import { bounds, createRovers } from "../parseInput";
import { createRover } from "../createRover";

test("test input matches expected output", () => {
  expect(main("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")).toBe("1 3 N\n5 1 E\n");
});

describe("functions to correctly parse string input", () => {
  test("establishes grid bounds from keys x, y", () => {
    expect(bounds("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")).toEqual({ x: 5, y: 5 });
  });
  test("outputs an array with the correct number of rovers", () => {
    expect(createRovers("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")).toHaveLength(2);
  });
});

test("creates a rover object with position and orientation", () => {
  expect(createRover("1 2 N")).toEqual({ position: { x: 1, y: 2 }, orientation: "N" });
});
