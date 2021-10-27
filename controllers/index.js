const router = require("express").Router();
const apiRoutes = require("./api");
const mainRoutes = require("./mainRoutes.js");
const dashRoutes = require("./dashRoutes.js");

router.use("/", mainRoutes);
router.use("/dashboard", dashRoutes);
router.use("/api", apiRoutes);

module.exports = router;
