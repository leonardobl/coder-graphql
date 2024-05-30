const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ola: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Leonardo Lima 123";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Server started on ${url}`))
  .catch((error) => console.log(error));
