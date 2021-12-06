const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const itemRoutes = require("./itemRoutes");

router.use(userRoutes);
router.use(itemRoutes);

module.exports = router;
