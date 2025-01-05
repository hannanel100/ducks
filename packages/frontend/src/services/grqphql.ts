import { gql } from "@apollo/client";

const GET_DUCKS = gql`
  query GetDucks {
    ducks {
      color
      age
      _id
    }
  }
`;

const GET_DUCK = gql`
  query GetDuck($id: ID!) {
    duck(_id: $id) {
      location {
        type
        coordinates
      }
    }
  }
`;

export { GET_DUCKS, GET_DUCK };
