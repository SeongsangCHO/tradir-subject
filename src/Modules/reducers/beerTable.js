import React from "react";
import { BEER_TABLE_COLUMN_HEADER_ACTION_TYPES as T } from "Modules/actions/types";
import { STATUS } from "Utils/constant";
import BeerImage from "Components/Beer/BeerImage";
import BeerName from "Components/Beer/BeerName";

const initState = {
  columnHeader: [
    {
      title: "Name",
      field: "name",
      render: (item) => <BeerName item={item} />,
    },
    {
      title: "Product Image",
      field: "image_url",
      render: (item) => (
        <BeerImage name={item.name} src={item.image_url}></BeerImage>
      ),
    },
    {
      title: "ABV",
      field: "abv",
    },
    {
      title: "IBU",
      field: "ibu",
    },
    {
      title: "SRM",
      field: "srm",
    },
  ],
};

const beerTableReducer = (state = initState, action) => {
  switch (action.type) {
    case T.SET_COLUMN_HEADER:
      return {
        ...state,
        columnHeader: [...action.payload],
      };
    default:
      return {
        ...state,
        columnHeader: state.columnHeader.map((el) => {
          if (el.tableData) {
            el.tableData.width = "";
          }
          return el;
        }),
      };
  }
};

export default beerTableReducer;
