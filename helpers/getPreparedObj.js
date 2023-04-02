const getPreparedObj = ({ skip, limit }) => {
  return {
    $facet: {
      data: [
        { $skip: skip },
        { $limit: limit },
        {
          $project: {
            createdAt: 0,
            updatedAt: 0,
            ingredients: 0,
            area: 0,
            tags: 0,
            thumb: 0,
          },
        },
      ],
      count: [{ $count: 'total' }],
    },
  };
};

module.exports = getPreparedObj;
