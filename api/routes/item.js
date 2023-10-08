const itemRoute = require("express").Router();
const itemController = require("../controllers/ItemController");
const { authentication } = require("../middlewares/auth");

itemRoute.get("/", itemController.getAllItems);
itemRoute.post("/", authentication, itemController.create);
itemRoute.put("/:id", itemController.update);
itemRoute.delete("/:id", itemController.delete);
itemRoute.get("/account/:id", itemController.getItemById);

module.exports = itemRoute;
