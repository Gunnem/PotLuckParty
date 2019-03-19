const router = require("express").Router();
const potluckitemsController = require("../../controllers/potluckitemsController");

// Matches with "/api/books"
router.route("/")
  .get(potluckitemsController.findAll)
  .post(potluckitemsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(potluckitemsController.findById)
  .put(potluckitemsController.update)
  .delete(potluckitemsController.remove);

module.exports = router;
