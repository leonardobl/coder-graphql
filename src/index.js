const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    ola: String
    horaAtual: String
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Leonardo Lima 123";
    },
    horaAtual() {
      const date = new Date();

      return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
        date.getHours() >= 12 ? "PM" : "AM"
      }`;
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
