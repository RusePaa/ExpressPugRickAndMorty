var express = require('express');
var router = express.Router();
var Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', async(req, res) => {
  try{
      const personajes = await Personaje.find({}, 'id name gender created image');
      res.render('personaje', {personajes});
  } catch(error){
      console.log(error);
      res.status(500).send(error);
  }
});

module.exports = router;