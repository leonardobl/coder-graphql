const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: Int
    name: String
    username: String
    email: String
  }

  type Postagem {
    postId: Int
    id: Int
    name: String
    email: String
    body: String
  }

  type Query {
    getUsers: [User]!
    getUser(id: ID): User
    geradorNumerosMega: [Int!]!
    getPostagens: [Postagem]
    getPostagem(postId: Int): [Postagem]
  }
`;

const resolvers = {
  Query: {
    geradorNumerosMega() {
      const values = Array(6).fill(0);

      for (let i = 0; i < values.length; i++) {
        let newValue = 0;
        while (values.includes(newValue)) {
          newValue = parseInt(Math.random() * 61);
        }
        values[i] = newValue;
      }

      return values.sort((a, b) => a - b);
    },

    async getUsers() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
      return data;
    },

    async getUser(_, args) {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${args.id}`
      ).then((response) => response.json());
      return data;
    },

    async getPostagens() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((response) => response.json());

      return data;
    },

    async getPostagem(_, { postId }) {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((response) => response.json());

      return data.filter((i) => i.postId == postId);
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
