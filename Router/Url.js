const { getUrlShortnerController, getOriginalUrlController } = require('../Controller/UrlController');

const router= require('express').Router();
router.post('/',getUrlShortnerController);

module.exports=router