const jwt = require("jsonwebtoken");

const path = require("path");
const { User } = require(path.join(__dirname, "..", "models"));
const { HttpError } = require(path.join("..", "helpers"));

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || token === "") {
    next(HttpError(401, "Not authorized"));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }

    req.user = user;
    next();
  } catch (err) {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = auth;
