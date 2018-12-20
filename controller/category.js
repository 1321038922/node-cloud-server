const { Router } = require("express");
const router = Router();

const category = require('../database/model/category')

router.get('/category',(req, res) => {
    category.find().then(data => {
        res.json({
            code:200,
            data
        })
    })
})

router.get('/category/:id',(req,res) =>{
    let{id} = req.params
    category.findById(id).then(data =>{
        res.json({
            code: 200,
            data
        })
    })
})

router.post('/category', async (req, res, next) => {
    try {
        const {name} = req.body
        const data = await category.create({name})
        res.json({
            code: 200,
            msg:'分类添加成功',
            data
        })
    }catch(err) {
       next(err)
    }
})

module.exports = router;