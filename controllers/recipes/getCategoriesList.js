const path = require('path');
const categoriesList = require(path.join(
  __dirname,
  '..',
  '..',
  'data',
  'categoriesList'
));

const getCategoriesList = async (req, res) => {
  return res.json({
    status: 'success',
    code: 200,
    data: {
      result: categoriesList.sort(),
    },
  });
};

module.exports = getCategoriesList;
