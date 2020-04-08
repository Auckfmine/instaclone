const router = require('express').Router();
const controller = require('./controller');

router.post('/newpost', controller.newpost);
router.get('/getposts', controller.getposts);
router.get('/:id', controller.getpost);
router.put('/:id/update', controller.updatepost);
router.delete('/:id/delete', controller.deletepost);

module.exports = router;