const express = require("express")
const router = express.Router()
const path = require('path')
// const login = require('../controller/login')
const user = require('../controller/user')
const article = require('../controller/article')
const category = require('../controller/category')

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

router.use(article);
router.use(user);
router.use(category);

module.exports = router;