import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//N으로 나누는 값 상수처리

const BeerFilter = ({ abvFilterGroup, filterClickedId, handleFilter }) => {
  const filterButtonText = (standard, idx) => {
    if (idx === 0) {
      return `${(standard + 1) * 5}미만`;
    }
    return `${standard * 5}이상, ${(standard + 1) * 5}미만`;
  };

  return (
    <Container>
      <FilterButton>All</FilterButton>
      {Object.keys(abvFilterGroup).map((standard, idx) => (
        <FilterButton
          isClicked={filterClickedId[standard]}
          onClick={() => handleFilter(parseInt(standard))}
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
  handleFilter: PropTypes.func,
};

export default BeerFilter;

const Container = styled.div`
  padding: 24px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => (props.isClicked ? "tomato" : "white")};
`;
