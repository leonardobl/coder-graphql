const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type User {
    name: String
    id: ID
    salario: Float
  }

  type Query {
    ola: String
    horaAtual: Date
    getUsuario: User
    produtoEmDestaque: Produto
  }
`;

const resolvers = {
  User: {
    salario(User) {
      return User.salario_real * 2;
    },
  },

  Produto: {
    precoComDesconto(prod) {
      return prod.preco - prod.preco * prod.desconto;
    },
  },

  Query: {
    ola() {
      return "Leonardo Lima";
    },
    horaAtual() {
      return new Date();
    },
    getUsuario() {
      return {
        name: "Leonardo Lima",
        id: 123,
        salario_real: 123.321,
      };
    },
    produtoEmDestaque() {
      return {
        nome: "Leite",
        preco: 10.0,
        desconto: 0.05,
      };
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
