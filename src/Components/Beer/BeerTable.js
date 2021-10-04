import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable, { MTableToolbar } from "material-table";
import { ShoppingCartOutlined } from "@material-ui/icons";

import { BeerFilter } from "Components/Beer";
import { setBeerTableColumnHeader } from "Modules/actions/beerTable";
import { requestAddCartItem } from "Modules/actions/cart";
import { setBeerListFilter } from "Modules/actions/beer";
import { beerTableColumnOrderChange } from "Utils/beerTableColumnOrderChange";
import { ABV_STANDARD } from "Utils/constant";
import { tableIcons } from "Utils/tableIcons";

const BEER_TABLE_OPTIONS = {
  tableLayout: "fixed",
  sorting: false,
  cellStyle: {
    textAlign: "center",
  },
  headerStyle: {
    position: "unset",
    textAlign: "center",
    backgroundColor: "#20836A",
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

  const handleDragged = useCallback(
    (sourceIndex, destinationIndex) => {
      const changedColumns = beerTableColumnOrderChange(
        sourceIndex,
        destinationIndex,
        columnHeader
      );
      dispatch(setBeerTableColumnHeader(changedColumns));
    },
    [columnHeader]
  );

  const handleFilterClick = (standard) => {
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
      const abvStandard = Math.floor(beer.abv / ABV_STANDARD);
      if (!abvGroup.hasOwnProperty(abvStandard)) {
        abvGroup[abvStandard] = [];
        filterId[abvStandard] = false;
      }
      abvGroup[abvStandard].push(beer);
    });
    setAbvFilterGroup({ ...abvGroup });
    setFilterClickedId({ ...filterId });
  }, [beerList]);

  const beerPriceGenerator = () => {
    return Math.ceil((Math.random() * 5000 + 5000) / 100) * 100;
  };
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
        title="🍺 Beer List"
        options={BEER_TABLE_OPTIONS}
        components={{
          Toolbar: (props) => (
            <div>
              <MTableToolbar {...props} />
              <BeerFilter
                beerList={beerList}
                abvFilterGroup={abvFilterGroup}
                filterClickedId={filterClickedId}
                handleFilterClick={handleFilterClick}
                itemsCount={filteredBeerList.length}
              />
            </div>
          ),
        }}
        actions={[
          (data) => ({
            icon: () => <ShoppingCartOutlined aria-label="add cart" />,
            tooltip: checkBeerItemInCart(data.id)
              ? "You have already added"
              : "Add your cart",
            onClick: (_, data) => {
              dispatch(
                requestAddCartItem({
                  ...data,
                  price: beerPriceGenerator(),
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
  & > h6 {
    font-size: 2em;
  }
`;
