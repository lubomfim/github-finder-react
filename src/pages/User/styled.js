import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    display: block;
    overflow: scroll;
    padding-bottom: 30px;
  }
`;
