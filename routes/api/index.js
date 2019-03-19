const router = require("express").Router();
const potluckitemRoutes = require("./potluckitems");

// Book routes
router.use("/potluckitems", potluckitemRoutes);

module.exports = router;
