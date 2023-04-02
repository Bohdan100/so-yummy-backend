const express = require('express');
const { popularRecipes: ctrl } = require('../../controllers');
const { auth } = require('../../middlewares');

const router = express.Router();

router.get('/', auth, ctrl.getPopularRecipes);

module.exports = router;
