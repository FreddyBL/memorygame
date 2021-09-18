import styled from "styled-components";

import { navBarHeight } from "../../GameConstants";

const heightStr = `${navBarHeight}px`;
export const Bar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: ${heightStr};
  background: radial-gradient(circle, rgb(45 64 90) 10%, rgb(60 45 89) 100%);

  box-shadow: 0px 4px 10px 6px #47566d;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  left: 0; /* new */
  top: 0; /* new */
  position: absolute; /* new */
  padding: 0px 20px;
  color: white;
  justify-content: space-around;
`;
