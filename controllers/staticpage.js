const Url = require('../model/url')

async function handelStaticPage(req, res){

    //return res.end("<h1> IT IS HOME PAGE <h1>");
   //const allUrls = await Url.find({});
    return res.render("home");

}

async function handelSignup(req, res){
    return res.render("Signup")
}

async function handelLoginpage(req, res){
    return res.render("login")
}

module.exports = {
    handelStaticPage,
    handelSignup,
    handelLoginpage

}

