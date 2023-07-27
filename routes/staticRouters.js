const express = require('express') 
const router = express.Router()


const {handelStaticPage} = require("../controllers/staticpage")

router.get("/", handelStaticPage)

module.exports = router;