import styled from "styled-components";
export const PageWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;
  height: 100vh;
  background: radial-gradient(circle, #24566e, #3a1c39);
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
`;

export const Text = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-family: "Roboto", sans-serif;
  background-color: transparent;
`;

export const Button = styled.button`
  border-radius: 9%;
  padding: 10px 20px;
  cursor: pointer;
  background: #00000052;
  color: white;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 12px 2px #677370c9;
  &.hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

export const Card = styled.div`
  border-radius: 9%;
  box-shadow: 0px 0px 12px 2px #677370c9;
  transition: all 0.5s;
  cursor: pointer;
  background-color: #171d427a;
  display: flex;
  justify-content: center;
  align-items: center;
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
