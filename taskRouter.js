const { Router } = require("express");
const router = Router();

const { } = require("../controller/taskController");

router.post("/store/task", storeTask);

module.exports = router;
