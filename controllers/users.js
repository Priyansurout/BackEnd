
const User = require("../model/users")
const {SetUser} = require("../service/auth")
//const  { v4 : uuidv4 } = require('uuid')




async function handelUserSignup(req, res){
    
    const {name , email, password} = req.body;
    await User.create({
        name : name,
        email : email,
        password : password
    })
    return res.redirect("/")
    
}

async function handelLogin(req, res){
    const {email, password} = req.body;
    //console.log("WE ARE IN HANDELLOGIN FUNCTION OF USERS")
    const users = await User.findOne({email, password});
    //console.log(users)
    if (!users) {
        return  res.render("login", {
            mess : "Wrong Name and Password------! "
        })
    }
    
    
    const token = SetUser(users)
    res.cookie("uid",token)

    
    return res.redirect("/")
}

module.exports = {
    handelUserSignup,
    handelLogin
}