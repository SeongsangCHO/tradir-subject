import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MaterialTable, { MTableToolbar } from "material-table";
import styled from "styled-components";
import { tableIcons } from "Utils/tableIcons";
import { useSelector } from "react-redux";
import { beerTableColumnOrderChange } from "Utils/beerTableColumnOrderChange";
import { useDispatch } from "react-redux";
import { setBeerTableColumnHeader } from "Modules/actions/beerTable";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { requestAddCartItem } from "Modules/actions/cart";
import BeerFilter from "./BeerFilter";
import { setBeerListFilter } from "Modules/actions/beer";

const BEER_TABLE_OPTIONS = {
  tableLayout: "fixed",
  sorting: false,
  cellStyle: {
    textAlign: "center",
    wordWrap: "break-word",
  },
  headerStyle: {
    position: "unset",
    textAlign: "center",
    backgroundColor: "#01579b",
    color: "#FFF",
  },
};

const BeerTable = () => {
  const dispatch = useDispatch();
  const { columnHeader } = useSelector((state) => state.beerTableReducer);
  const { beerList, filteredBeerList } = useSelector((state) => state.beerReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [abvFilterGroup, setAbvFilterGroup] = useState({});
  const [filterClickedId, setFilterClickedId] = useState({});

  const checkBeerItemInCart = useCallback(
    (id) => cartItems.map((item) => item.id).includes(id),
    [cartItems.length]
  );
  const handleDragged = (sourceIndex, destinationIndex) => {
    const changedColumns = beerTableColumnOrderChange(
      sourceIndex,
      destinationIndex,
      columnHeader
    );
    dispatch(setBeerTableColumnHeader(changedColumns));
  };
  const handleFilter = (standard) => {
    setFilterClickedId((prev) => ({
      ...prev,
      [standard]: !filterClickedId[standard],
    }));
    const tmp = { ...filterClickedId, [standard]: !filterClickedId[standard] };
    const clickedFilter = Object.keys(tmp).filter((id) => tmp[id] === true);
    if (clickedFilter.length === 0) {
      dispatch(setBeerListFilter(beerList));
    } else {
      const printData = clickedFilter.map((id) => abvFilterGroup[id]).flat();
      dispatch(setBeerListFilter(printData));
    }
  };
  const sortAbvOrder = (list) => {
    return list.sort((a, b) => a.abv - b.abv);
  };
  const createAbvFilterGroup = useCallback(() => {
    const abvGroup = {};
    const filterId = {};
    sortAbvOrder(beerList).forEach((beer) => {
      const abvStandard = Math.floor(beer.abv / 5);
      if (!abvGroup.hasOwnProperty(abvStandard)) {
        abvGroup[abvStandard] = [];
        filterId[abvStandard] = false;
      }
      abvGroup[abvStandard].push(beer);
    });
    setAbvFilterGroup({ ...abvGroup });
    setFilterClickedId({ ...filterId });
  }, [beerList]);
  useEffect(() => {
    createAbvFilterGroup();
  }, [beerList]);

  return (
    <Wrapper>
      <MaterialTable
        icons={tableIcons}
        onColumnDragged={handleDragged}
        columns={columnHeader}
        data={filteredBeerList}
        title="Beer List"
        options={BEER_TABLE_OPTIONS}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <BeerFilter
                beerList={beerList}
                abvFilterGroup={abvFilterGroup}
                filterClickedId={filterClickedId}
                handleFilter={handleFilter}
              />
            </div>
          ),
        }}
        actions={[
          (data) => ({
            icon: () => <ShoppingCartOutlined />,
            tooltip: checkBeerItemInCart(data.id)
              ? "You alread add"
              : "Add your cart",
            onClick: (_, data) => {
              dispatch(
                requestAddCartItem({
                  ...data,
                  price: Math.ceil((Math.random() * 5000 + 5000) / 100) * 100,
                })
              );
            },
            disabled: checkBeerItemInCart(data.id),
          }),
        ]}
      />
    </Wrapper>
  );
};

BeerTable.propTypes = {};

export default React.memo(BeerTable);

const Wrapper = styled.section`
  & td > div {
    justify-content: center;
  }
`;
