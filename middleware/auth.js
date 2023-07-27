const { getUser} = require('../service/auth')

async function forLoggedinPersonOnly(req , res, next){

    const userUid = req.cookies?.uid;
   
    if (!userUid){
        return res.redirect('user/login')
    }
    
    const User = getUser(userUid);
    if (!User) return res.redirect('user/login');

    req.user = User;
  
    next();

}

module.exports = {forLoggedinPersonOnly};