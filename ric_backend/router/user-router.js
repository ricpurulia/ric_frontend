const express = require('express');
const userControllar = require('./../controllar/usercontrollar')
const router= express.Router()

router.route('/')
.get(userControllar.getalluser)
module.exports = router;
