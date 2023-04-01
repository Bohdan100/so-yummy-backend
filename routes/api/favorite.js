const express = require('express');
const { favorite: ctrl } = require('../../controllers');
const { auth } = require('../../middlewares');

const router = express.Router();

// Получение всех любимых рецептов авторизированного юзера
router.get('/', auth, ctrl.getFavorites);

// Добавление рецепта в любимые блюда авторизированного юзера
router.post('/:recipeId', auth, ctrl.addFavorite);

// Удаление рецепта из списка любимых
router.delete('/:recipeId', auth, ctrl.deleteFavorite);

module.exports = router;
