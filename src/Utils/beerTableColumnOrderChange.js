export const beerTableColumnOrderChange = (
  sourceIndex,
  destinationIndex,
  columns
) => {
  const grabbedItem = columns.splice(sourceIndex, 1)[0];
  columns.splice(destinationIndex, 0, grabbedItem);
  return columns;
};
