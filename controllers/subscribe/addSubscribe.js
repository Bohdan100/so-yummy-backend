const { Subscribe } = require("../../models");

const addSubscribe = async (req, res, next) => {
  //   const { _id: owner } = req.user;
  const owner = "642984fffafa1b26fbbf8d48";

  const result = await Subscribe.create({
    ...req.body,
    owner,
  });

  res.status(201).json(result);
};

module.exports = addSubscribe;
