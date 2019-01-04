const router = require("express").Router();
const controller = require("../../controllers/controller");


router.route("/")
  .get(controller.findAllUser)
  .post(controller.createUser)

router.route("/:id")
  .get(controller.findByIdUser)
  .delete(controller.removeUser)
  .put(controller.updateUser)



module.exports = router;
