const express = require("express");
const router = express.Router();
const createReport = require("../controllers/createReport");
const getReport = require("../controllers/getReport");

router.post("/", createReport);
router.get("/", getReport);

module.exports = router;