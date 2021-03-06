const router            = require('express').Router();
const ContactController = require('../controllers/contacts');

router.get('/', ContactController.show);
router.get('/:id', ContactController.contact);
router.post('/add', ContactController.add);


module.exports = router;