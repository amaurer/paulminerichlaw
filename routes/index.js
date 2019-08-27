var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
  res.render("index", { hideTitle : true, showBanner : false });
});

router.get("/business/", function(req, res) {
  res.render("business", { title : "Business Divsion", bread : "business" });
});

router.get("/premarital/", function(req, res) {
  res.render("premarital", { title : "Premarital Agreements", bread : "premarital" });
});

router.get("/pensions/", function(req, res) {
  res.render("pensions", { title : "Pension Division", bread : "pension" });
});

router.get("/family-residence/", function(req, res) {
  res.render("family-residence", { title : "Family Residence Division", bread : "family-residence" });
});


module.exports = router;
