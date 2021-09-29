import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import styled from "styled-components";
import { tableIcons } from "Utils/tableIcons";
import { useSelector } from "react-redux";
import BeerImage from "./BeerImage";

const BeerTable = (props) => {
  const { beerList, status } = useSelector((state) => state.beerReducer);
  console.log(beerList);

  const handleDragged = (sourceIndex, destinationIndex) => {
    console.log("draged");
  };
  return (
    <Wrapper>
      <MaterialTable
        isLoading={status == "loading" ? true : false}
        icons={tableIcons}
        data={beerList}
        onColumnDragged={handleDragged}
        columns={[
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
        ]}
        style={{
          padding: "5px 5px",
        }}
        options={{
          sorting: false,
          headerStyle: {
            position: "unset",
            textAlign: "center",
            padding: "5px 5px",
            width: "100%",
            overflow: "visible",
          },
          cellStyle: {
            textAlign: "center",
          },
        }}
        title="Demo Title"
      />
    </Wrapper>
  );
};

BeerTable.propTypes = {};

export default BeerTable;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
`;
