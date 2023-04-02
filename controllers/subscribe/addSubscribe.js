const { Subscribe } = require("../../models");

const addSubscribe = async (req, res, next) => {
  //   const { _id: owner } = req.user;
  const owner = "6428209efafa1b26fbbf8cdd";

  const result = await Subscribe.create({
    ...req.body,
    owner,
  });

  res.status(201).json(result);
};

module.exports = addSubscribe;
