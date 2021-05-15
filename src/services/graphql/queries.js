import { gql } from '@apollo/client';

export const REPOSITORY = gql`
  query REPOSITORY($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      nameWithOwner
      description
      url
    }
  }
`;

export const USER_PROFILE = gql`
  query USER($login: String!) {
    user(login: $login) {
      name
      login
      bio
      avatarUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      url
    }
  }
`;

export const USER = gql`
  query USER($login: String!) {
    user(login: $login) {
      id
    }
  }
`;
