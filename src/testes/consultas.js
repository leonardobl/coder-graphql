const db = require("../config/db");

db.select("*")
  .from("perfis")
  .limit(2)
  .then((res) => console.log(res));
