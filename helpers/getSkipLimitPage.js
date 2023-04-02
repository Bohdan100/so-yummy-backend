const getSkipLimitPage = ({ page, limit }) => {
  const skipPage = page > 0 && page < 1000 ? +page : 1;
  const skipLimit = +limit > 0 && +limit < 1000 ? +limit : 12;
  const skip = (skipPage - 1) * skipLimit;
  return { skip, limit: skipLimit, page: skipPage };
};

module.exports = getSkipLimitPage;
