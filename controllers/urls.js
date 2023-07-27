const shortid = require('shortid');
const Url = require('../model/url')


async function handelGenerateNewShortURL(req, res){
    const ShortID = shortid.generate()
    const redirectUrl = req.body.url;
    console.log(req.body.urls)
    if (!redirectUrl) return res.status(404).json({Message : "404 NOT FOUND!"})
    
    await Url.create({
        shortID : ShortID ,
        redirectUrl : redirectUrl,
        totalClick: 0,
        visitHistory: []
})
    
    return res.render("home",{
        id : ShortID,
   });

    //return res.status(200).json({ID : ShortID})
}

async function handelRedirectUrl(req, res){
    const shortID = req.params.shortID
    console.log(shortID)
    const entery = await Url.findOneAndUpdate({
        shortID
    },{
        $push: {
            visitHistory : {
                timestamp : Date.now()
            }
        }
    }
    )
    res.redirect(entery.redirectUrl);

}

module.exports = {
    handelGenerateNewShortURL,
    handelRedirectUrl,
}