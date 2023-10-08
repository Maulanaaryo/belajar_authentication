const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "free";

const tokenGenerator = (data) => {
  const { id, username, email, age } = data;
  return jwt.sign(
    {
      id,
      username,
      email,
      age,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = { tokenGenerator, tokenVerifier };
