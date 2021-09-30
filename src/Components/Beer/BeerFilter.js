import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const BeerFilter = ({ beerList }) => {
  const [abvFilterGroup, setAbvFilterGroup] = useState({});

  const sortAbvOrder = (list) => {
    const sorted = list.sort((a, b) => a.abv - b.abv);
    return sorted;
  };
  const createAbvFilterGroup = () => {
    const abvGroup = {};
    sortAbvOrder(beerList).forEach((beer) => {
      const abvStandard = Math.floor(beer.abv / 5);
      if (!abvGroup.hasOwnProperty(abvStandard)) {
        abvGroup[abvStandard] = [];
      }
      abvGroup[abvStandard].push(beer.id);
    });
    setAbvFilterGroup({ ...abvGroup });
  };
  useEffect(() => {
    createAbvFilterGroup();
  }, []);

  const filterButtonText = (standard, idx) => {
    if (idx === 0) {
      return `${(standard + 1) * 5}미만`;
    }
    return `${standard * 5}이상, ${(standard + 1) * 5}미만`;
  };
  const handleFilter = (standard) => {
    console.log(abvFilterGroup[standard]);
  };
  return (
    <Container>
      <button>All</button>
      {Object.keys(abvFilterGroup).map((standard, idx) => (
        <button onClick={() => handleFilter(standard)} key={standard}>
          {filterButtonText(parseInt(standard), idx)}
        </button>
      ))}
    </Container>
  );
};

BeerFilter.propTypes = {
  beerList: PropTypes.array.isRequired,
};

export default BeerFilter;

const Container = styled.div`
  padding: 24px;
`;
