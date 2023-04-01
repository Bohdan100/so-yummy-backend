const { UserFavorite } = require('../../models');

const getFavorites = async (req, res) => {
  const { _id: userId } = req.user;
  const favoriteRecipesByUserId = await UserFavorite.find({ userId });

  // Я возвращаю на фронт вот такой ответ пока что:
  // {
  //     "status": "succes",
  //     "code": 200,
  //     "data": {
  //         "result": [
  //             {
  //                 "_id": "642822a415c1741a777980ad",
  //                 "recipeId": "640cd5ac2d9fecf12e8897fc",
  //                 "userId": "6428209efafa1b26fbbf8cdd",
  //                 "createdAt": "2023-04-01T12:25:08.731Z",
  //                 "updatedAt": "2023-04-01T12:25:08.731Z"
  //             },
  //             {
  //                 "_id": "642822c615c1741a777980b2",
  //                 "recipeId": "640cd5ac2d9fecf12e8897ee",
  //                 "userId": "6428209efafa1b26fbbf8cdd",
  //                 "createdAt": "2023-04-01T12:25:42.965Z",
  //                 "updatedAt": "2023-04-01T12:25:42.965Z"
  //             }
  //         ]
  //     }
  // }

  // TODO: добавить логику, чтобы на фронт опралялись не просто id рецептов, а вся иформация по рецептам,
  // чтобы можно было отрендерить страницу Favorites
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result: favoriteRecipesByUserId,
    },
  });
};

module.exports = getFavorites;
