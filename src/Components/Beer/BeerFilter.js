import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { requestGetBeerList } from "Modules/actions/beer";
import { ABV_STANDARD } from "Utils/constant";

const BeerFilter = ({
  abvFilterGroup,
  filterClickedId,
  handleFilterClick,
  itemsCount,
}) => {
  const dispatch = useDispatch();
  const filterButtonText = useCallback((standard, idx) => {
    if (idx === 0) {
      return `${(standard + 1) * ABV_STANDARD}%미만`;
    }
    return `${standard * ABV_STANDARD}%이상, ${(standard + 1) * ABV_STANDARD}%미만`;
  });
  const checkActiveAllFilter = () => {
    return Object.values(filterClickedId).every((isClicked) => isClicked === false);
  };
  const getBeerListData = useCallback(() => {
    dispatch(requestGetBeerList());
  });

  return (
    <Container>
      <div>ABV Filter Result: {itemsCount} items</div>
      <FilterButton onClick={getBeerListData} isClicked={checkActiveAllFilter()}>
        All
      </FilterButton>
      {Object.keys(abvFilterGroup).map((standard, idx) => (
        <FilterButton
          isClicked={filterClickedId[standard]}
          onClick={() => handleFilterClick(parseInt(standard))}
          key={standard}
        >
          {filterButtonText(parseInt(standard), idx)}
        </FilterButton>
      ))}
    </Container>
  );
};

BeerFilter.propTypes = {
  abvFilterGroup: PropTypes.object,
  filterClickedId: PropTypes.object,
  handleFilterClick: PropTypes.func,
  itemsCount: PropTypes.number,
};

export default React.memo(BeerFilter);

const Container = styled.div`
  padding: 8px 24px;
  & button + button {
    margin-left: 8px;
    margin-bottom: 8px;
  }
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.isClicked ? `${props.theme.colors.primaryDark}` : "gray"};
  border-radius: 8px;
  padding: 5px;
  color: white;
  min-width: 30px;
  &:hover {
    transition: 0.2s;
    font-weight: bold;
  }
`;
