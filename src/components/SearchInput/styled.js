import styled from 'styled-components';

import * as C from 'styles/colors';
import * as T from 'styles/typography';

export const Input = styled.input`
  background: ${C.WHITE};
  border: 1px solid ${C.SECONDARY_COLOR};
  font-size: 1.6rem;
  color: ${C.BLACK};
  padding: 20px 18px;
  outline: none;
  width: 100%;
  font-family: ${T.SECONDARY_FONT};
  box-shadow: 3px 3px 0px ${C.BLACK};
  border-radius: none;

  &::placeholder {
    color: ${C.SECONDARY_COLOR};
    font-size: 1.4rem;
  }

  &:disabled {
    background-color: ${C.DISABLED_COLOR};
    cursor: normal;
    user-select: none;
  }
`;
