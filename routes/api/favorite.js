const express = require('express');
const router = express.Router();
const { favorite: ctrl } = require('../../controllers');

// Мне нужна миделвара auth! Которая должна быть перед каждым контролером

// Получение всех любимых рецептов авторизированного юзера
router.get('/', ctrl.getFaforites);

// Добавление рецепта в любимые блюда авторизированного юзера
router.post('/:recipeId', ctrl.addFavorite);

// Удаление рецепта из списка любимых
router.delete('/:recipeId', ctrl.deleteFavorite);

module.exports = router;
