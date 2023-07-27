const express = require('express')
const router = express.Router()

const {handelUserSignup,
        handelLogin } = require('../controllers/users')
const {handelSignup,
        handelLoginpage} =  require('../controllers/staticpage')

router.route("/")
.post(handelUserSignup)
.get(handelSignup);

router.route("/login")
.post(handelLogin)
.get(handelLoginpage);



module.exports = router;