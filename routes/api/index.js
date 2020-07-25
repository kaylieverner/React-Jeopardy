const router = require("express").Router();
const bookRoutes = require("./LoginAPI");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
