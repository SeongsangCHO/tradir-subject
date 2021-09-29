import { BEER_TABLE_COLUMN_HEADER_TYPES as T } from "Modules/actions/types";

export const setBeerTableColumnHeader = (columnHeader) => {
  return {
    type: T.SET_COLUMN_HEADER,
    payload: columnHeader,
  };
};
