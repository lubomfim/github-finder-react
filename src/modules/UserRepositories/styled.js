import styled from 'styled-components';

import * as C from 'styles/colors';
import * as T from 'styles/typography';

export const UserRepositories = styled.div`
  width: calc(100% - 300px);
  padding: 20px;
  overflow: auto;
  position: relative;

  /* Track */
  &::-webkit-scrollbar {
    background: #f1f1f1;
    width: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${C.PRIMARY_COLOR};
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${C.BLACK};
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const UserRepositoriesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  gap: 20px 15px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    max-height: 200px;
  }
`;

export const UserRepositoriesItem = styled.li`
  border: 1px solid ${C.SECONDARY_COLOR};
  padding: 12px 15px;
`;

export const UserRepositoriesTitle = styled.h3`
  ${T.TITLE_MEDIUM}
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const UserRepositoriesLanguage = styled.p`
  ${T.BODY_TEXT_SMALL}
  margin-bottom: 12px;
  text-transform: lowercase;
  display: inline-block;
  padding-bottom: 3px;
  border-bottom: 3px solid ${({ color }) => color || C.PRIMARY_COLOR};
`;

export const UserRepositoriesSeeMoreWrapper = styled.div`
  text-align: right;
`;

export const UserRepositoriesSeeMore = styled.a`
  color: ${C.TEXT_SECONDARY_COLOR};
  text-decoration: underline;
  ${T.BODY_TEXT_SMALL};
  font-style: italic;
`;
