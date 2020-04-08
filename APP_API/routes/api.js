let express = require("express");
const router = express.Router();

const ctrlPhone = require("../controllers/main");

router.get("/phones", ctrlPhone.getPhones);
router.post("/phones", ctrlPhone.createPhone);
router.delete("/phones/:phoneId", ctrlPhone.deletePhone);
router.get("/phones/:phoneId", ctrlPhone.getSinglePhone);
router.put("/phones/:phoneId", ctrlPhone.updatePhone);

module.exports = router;
