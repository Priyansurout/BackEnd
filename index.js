const express = require('express') 
const app = express()
const path = require('path')
const Url = require('./model/url')
const {forLoggedinPersonOnly} = require('./middleware/auth')
const {ConnectToMongodb} = require('./connect')


const urlRouter = require("./routes/urls")
const staticRouters = require("./routes/staticRouters")
var cookieParser = require('cookie-parser')

const User = require("./routes/user")

PORT = process.env.PORT || 3000;

//connecting to MongoDB
ConnectToMongodb("mongodb://127.0.0.1:27017/shote-url")

app.set('view engine', 'ejs')
app.set("views", path.resolve('./views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())

app.use("/",staticRouters)
app.use("/url", forLoggedinPersonOnly,urlRouter)
app.use("/user",User)


// app.get("/test", async (req, res) => {
//     const allUrls = await Url.find({});
//     //console.log(allUrls)
//     //const allUrls = [1,2,3,4,5]
//     // allUrls.forEach(element => {
//     //    console.log(element.shortID) 
//     // });
    
    
//     return res.render("home",{
//         urls : allUrls,
//     });
// })


app.listen(PORT, () => {console.log(`IT IS WORKING ON ${PORT}`)})