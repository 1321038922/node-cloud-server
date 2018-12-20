const { Router } = require("express");
const router = Router();
const user = require('../database/model/user')

router.post('/user', async (req, res) => {
    try {
        const { username, password, email } = req.body
        const avatarNumber = Math.ceil(Math.random()*9)
        const avatar = `http://pbl.yaojunrong.com/avatar${avatarNumber}.jpg`
        const data = await user.create({ username, password, email, avatar })
        console.log(data)
        res.json({
            code: 200,
            msg: '注册成功'
        })
    } catch (err) {
        res.json({
            code:400,
            msg:'缺少参数'
        })
    }

})
router.post('/login',(req,res) =>{
        let {email, password} = req.body;
        user.findOne({email}).then((data)=>{
            if(!data) {
                res.json({
                    code:401,
                    msg:'该用户不存在'
                })
            }
            else if (data.password != password) {
                res.json({
                    code:401,
                    msg:'密码不正确'
                })
            }
            else if (data.password == password) {
                req.session.user = data;
                let userMsg = {
                    username: data.username,
                    email: data.email,
                    avatar: data.avatar   
                };
                res.json({
                    code:200,
                    data: userMsg,
                    msg:'登陆成功'
                })
            }
        })
    })
router.delete('/logOut',(req,res)=> {
    if(req.session.user){
        req.session.user = null
        res.json({
            code:200,
            msg:'退出登录成功'
        })
    }else {
        res.json ({
            code: 403,
            msg:'用户未登录'
        })
    }
})
    
module.exports = router;