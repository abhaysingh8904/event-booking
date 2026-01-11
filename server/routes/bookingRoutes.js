const router = require("express").Router();
const c = require("../controllers/bookingController");
router.post("/", c.bookTicket);
module.exports = router;