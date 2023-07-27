const express = require('express') 

const {handelGenerateNewShortURL,
    handelRedirectUrl} = require("../controllers/urls")
const router = express.Router()

router.route("/")
.post(handelGenerateNewShortURL)

router.route("/:shortID")
.get(handelRedirectUrl)



module.exports = router;