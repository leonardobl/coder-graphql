module.exports = {
  async getUsers() {
    const data = await fetch("https://api.escuelajs.co/api/v1/users").then(
      (res) => res.json()
    );

    return data;
  },

  async getUser(_, { id }) {
    const data = await fetch(
      `https://api.escuelajs.co/api/v1/users/${id}`
    ).then((res) => res.json());

    return data;
  },
};
