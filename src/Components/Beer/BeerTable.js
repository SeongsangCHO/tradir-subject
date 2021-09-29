import React, { useCallback, useEffect, forwardRef, useState } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import styled from "styled-components";
import { tableIcons } from "Utils/tableIcons";
import { useSelector } from "react-redux";
import { beerTableColumnOrderChange } from "Utils/beerTableColumnOrderChange";
import { useDispatch } from "react-redux";
import { setBeerTableColumnHeader } from "Modules/actions/beerTable";
import { ShoppingCartOutlined } from "@material-ui/icons";

const BeerTable = () => {
  const dispatch = useDispatch();
  const { columnHeader, options } = useSelector((state) => state.beerTableReducer);
  const { beerList } = useSelector((state) => state.beerReducer);
  console.log("rerender");

  const handleDragged = useCallback(
    (sourceIndex, destinationIndex) => {
      const changedColumns = beerTableColumnOrderChange(
        sourceIndex,
        destinationIndex,
        columnHeader
      );
      console.log(columnHeader, changedColumns, "handleDragged");

      dispatch(setBeerTableColumnHeader(changedColumns));
    },
    [columnHeader]
  );

  return (
    <Wrapper>
      <MaterialTable
        icons={tableIcons}
        onColumnDragged={handleDragged}
        columns={columnHeader}
        data={beerList}
        title="Beer List"
        style={{
          padding: "0px 30px",
        }}
        options={{
          sorting: false,
          cellStyle: {
            width: "100px",
            textAlign: "center",
            wordWrap: "break-word",
          },
          headerStyle: {
            position: "unset",
            minWidth: "100px",
            textAlign: "center",
          },
        }}
        actions={[
          {
            icon: () => <ShoppingCartOutlined align="center" />,
            tooltip: "Add your cart",
            onClick: (event, data) => {
              console.log(data);
              // Do save operation
            },
          },
        ]}
      />
    </Wrapper>
  );
};

BeerTable.propTypes = {
  // beerList: PropTypes.array,
  // status: PropTypes.bool,
};

export default React.memo(BeerTable);

const Wrapper = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  & td > div {
    justify-content: center;
  }
`;
