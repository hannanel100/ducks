export const typeDefs = `#graphql
  type Point {
    type: String!
    coordinates: [Float!]!
  }

  type Duck {
    id: ID!
    color: String!
    age: Int!
    location: Point!
  }

  type Query {
    ducks: [Duck!]!
    duck(id: ID!): Duck
  }

  input PointInput {
    type: String!
    coordinates: [Float!]!
  }

  input CreateDuckInput {
    color: String!
    age: Int!
    location: PointInput!
  }

  type Mutation {
    createDuck(input: CreateDuckInput!): Duck!
    updateDuck(id: ID!, input: CreateDuckInput!): Duck!
    deleteDuck(id: ID!): Boolean!
  }
`;
