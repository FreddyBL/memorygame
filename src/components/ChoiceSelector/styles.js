import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: transparent;
  height: 90px;
  width: 400px;
`;

export const Choice = styled.div`
  border-radius: 9%;
  padding: 10px 20px;
  cursor: pointer;
  background: #00000052;
  box-shadow: 0px 0px 12px 2px #677370c9;
  transition: all 0.5s;
  &.hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
  ${({ selected }) =>
    selected &&
    `
    box-shadow: 0px 0px 12px 2px #ffdf85;
    background: #b1911be6;
  `};
`;
