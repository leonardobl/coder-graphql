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

  async postUser(_, user) {
    try {
      const data = await fetch(`https://api.escuelajs.co/api/v1/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => res.json());

      return data;
    } catch (error) {
      return error;
    }
  },
};
