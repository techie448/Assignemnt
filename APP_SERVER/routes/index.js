var express = require("express");
var router = express.Router();
var ctrlAbout = require("./../controllers/about");
var ctrlList = require("./../controllers/list-display");

/* GET home page. */
router.get("/", (req, res) =>
  res.render("index", { title: "Mobile Phone Store" })
);

router.get("/about", ctrlAbout.main);

router.get("/list", ctrlList.main);

router.get("/detail/:phoneId", ctrlList.detail);

router.get("/new", ctrlList.newPhone);
router.post("/new", ctrlList.addNewPhone);

module.exports = router;
