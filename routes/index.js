const express = require('express');

const router = express.Router();
 const homeController = require('../controllers/home_controller');


router.get('/',homeController.home);

router.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })


router.use('/users', require('./users'));

// router.get('/user',homeController.home);

module.exports = router;