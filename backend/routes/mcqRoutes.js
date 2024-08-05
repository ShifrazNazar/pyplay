const express = require("express");
const { getMcq } = require("../controllers/mcqController");
const router = express.Router();

router.get("/mcqs", getMcq);

module.exports = router;
