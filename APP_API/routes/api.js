let express = require('express');
const router = express.Router();

const ctrlPhone = require('../controllers/main');

router.get('/phones', ctrlPhone.getPhones);
router.post('/phones', ctrlPhone.createPhone);
router.put('/phones/:phoneid', ctrlPhone.deletePhone);
router.get('/phones/:phoneid', ctrlPhone.getSinglePhone);
router.put('/phones/:phoneid', ctrlPhone.updatePhone);

module.exports = router;