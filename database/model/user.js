const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username:String,
    email: {
        type: String,
        unique: true,
        require:true
    },
    desc:String,
    password:String,
    avatar: String,
       
},{versionKey:false,timestamps: {createdAt:'createTime', updatedAt:'updateTime'}})

module.exports = mongoose.model('user',user)