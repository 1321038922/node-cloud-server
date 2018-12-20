const express = require("express")
const router = express.Router()

// const login = require('../controller/login')
const user = require('../controller/user')
const article = require('../controller/article')
const category = require('../controller/category')



router.use(article);
router.use(user);
router.use(category);

module.exports = router;