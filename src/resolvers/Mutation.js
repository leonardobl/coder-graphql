module.exports = {
  async postUser(_, user) {
    const dataEmail = await fetch(
      `https://api.escuelajs.co/api/v1/users/is-available`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user?.email }),
      }
    ).then((data) => data.json());

    if (!dataEmail?.isAvailable) {
      throw new Error("Email ja cadastrador");
    }

    const data = await fetch(`https://api.escuelajs.co/api/v1/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });

    if (data?.message) {
      throw new Error(data?.message);
    }

    return data;
  },
};
