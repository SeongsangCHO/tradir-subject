import React from "react";
import { BEER_TABLE_COLUMN_HEADER_ACTION_TYPES as T } from "Modules/actions/types";
import { STATUS } from "Utils/constant";
import BeerImage from "Components/Beer/BeerImage";

const initState = {
  columnHeader: [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Product Image",
      field: "image_url",
      render: (item) => (
        <BeerImage name={item.name} src={item.image_url}></BeerImage>
      ),
    },
    {
      title: "description",
      field: "tagline",
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
    {
      title: "PH",
      field: "ph",
    },
    {
      title: "EBC",
      field: "ebc",
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
