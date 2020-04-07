const router = require('express').Router();
const controller = require('./controller');

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/getprofile', controller.getProfile);

module.exports = router;