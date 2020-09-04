import { main } from "../index";
import { bounds, createRovers } from "../parseInput";
import { createRover } from "../createRover";

describe("Test Suite", () => {
  test("test input matches expected output", () => {
    expect(main("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM")).toBe("1 3 N\n5 1 E\n");
  });

  test("test 2 input matches expected output", () => {
    // 10 x 10 is 0 to 9 so going up 10, should bring us to the 10th spot (>9)
    expect(main("10 10\n0 0 N\nMMMMMMMMMM")).toThrowError();
  });

  test("test 3 input matches expected output", () => {
    // Same thing by Easterly
    expect(main("10 10\n0 0 N\nRMMMMMMMMMM")).toThrowError();
  });

  test("test 4 input matches expected output", () => {
    const result = main("10 10\n0 0 N\nRMMMMMMMMM\n9 9 S\nMMMMMMMMM");
    expect(result).toBe("0 9 E\n0 9 S\n");
  });

  test("test 5 input matches expected output", () => {
    const result = main("1 1\n0 0 N\nRRRRRRRRRRRRRRR\n");
    expect(result).toBe("0 0 W\n");
  });

  test("test 6 input matches expected output", () => {
    const result = main("0 0\n0 0 N\nRRRRRRRRRRRRRRR\n");
    expect(result).toBe("0 0 W\n");
  });

  test("test 7 input matches expected output", () => {
    expect(main("0 0\n0 0 N\nRRRRRRRRRRRRRRRM\n")).toThrowError();
  });

  test("test 8 input matches expected output", () => {
    expect(main("10 10\n1 1 N\nRRMRM\n5 6 W\nMMMMRMMM\n8 7 S\nMMMMMMMLLLLLM")).toBe(
      "0 0 W\n1 9 N\n9 0 E\n",
    );
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
});
