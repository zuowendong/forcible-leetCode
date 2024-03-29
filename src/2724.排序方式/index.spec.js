import { test, expect } from "vitest";
import { sortBy } from "./index";

test("单值数组", () => {
  const arr = [5, 4, 1, 2, 3];
  const fn = (x) => x;
  expect(sortBy(arr, fn)).toEqual([1, 2, 3, 4, 5]);
});

test("对象数组", () => {
  const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
  const fn = (d) => d.x;
  expect(sortBy(arr, fn)).toEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
});

test("二维数组", () => {
  const arr = [
    [3, 4],
    [5, 2],
    [10, 1],
  ];
  const fn = (x) => x[1];
  expect(sortBy(arr, fn)).toEqual([
    [10, 1],
    [5, 2],
    [3, 4],
  ]);
});
