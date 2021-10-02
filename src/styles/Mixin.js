import { css } from "styled-components";
// Shadow 스타일 재사용하기 위해 정의

export const ShadowAllDirection = () => css`
  -webkit-box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.94);
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.94);
`;

export const ShadowBottomLine = () => css`
  -webkit-box-shadow: 0px 6px 10px -4px #c2c2c2;
  box-shadow: 0px 6px 10px -4px #c2c2c2;
`;
