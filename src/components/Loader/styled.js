import styled from 'styled-components';

import * as C from 'styles/colors';

export const Loader = styled.div`
  cursor: wait;
  width: 30px;
  height: 30px;
  border: solid 3px transparent;
  border-left-color: ${C.PRIMARY_COLOR};
  border-right-color: ${C.PRIMARY_COLOR};
  border-top-color: ${C.PRIMARY_COLOR};
  animation: rotating 0.5s 0.25s linear infinite;
  border-radius: 50%;
  margin: 0 auto;

  @keyframes rotating {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
