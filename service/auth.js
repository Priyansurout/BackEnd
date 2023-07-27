const jwt = require("jsonwebtoken")
const secret = "Priyansu@200@#"



function SetUser(user){

    return jwt.sign({
        email : user.email
    }, secret);
}

function getUser(token){
    if (!token) return null;
    return jwt.verify(token, secret)
}


module.exports = {
    SetUser,
    getUser,
}
