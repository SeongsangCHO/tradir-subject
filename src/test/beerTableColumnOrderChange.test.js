import React from "react";
import BeerImage from "Components/Beer/BeerImage";
import { beerTableColumnOrderChange } from "Utils/beerTableColumnOrderChange";

const columns = [0, 1, 2, 3, 4, 5];
test("beerTableColumnsOrderChange", () => {
  expect(beerTableColumnOrderChange(0, 0, [...columns])).toEqual(columns);
  expect(beerTableColumnOrderChange(0, 1, [...columns])).toEqual([1, 0, 2, 3, 4, 5]);
  expect(beerTableColumnOrderChange(0, 5, [...columns])).toEqual([1, 2, 3, 4, 5, 0]);
  expect(beerTableColumnOrderChange(2, 3, columns)).toEqual([0, 1, 3, 2, 4, 5]);
});
