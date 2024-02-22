var express = require('express');
var router = express.Router();
var Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', async(req, res) => {
  try{
      const personajes = await Personaje.find({}, 'id name status species image');
      res.render('index', {personajes});
  } catch(error){
      console.log(error);
      res.status(500).send(error);
  }
});

router.get('/personaje/:id', async (req, res) => {
  try {
    const personaje = await Personaje.findOne({ id: req.params.id });
    res.render('personaje', { personajes: [personaje] });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
