module.exports = {
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
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    );
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
};
