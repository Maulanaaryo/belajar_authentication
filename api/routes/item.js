const itemRoute = require("express").Router();
const itemController = require("../controllers/ItemController");

itemRoute.get("/", itemController.getAllItems);
itemRoute.post("/", itemController.create);
itemRoute.put("/:id", itemController.update);
itemRoute.delete("/:id", itemController.delete);
itemRoute.get("/account/:id", itemController.getItemById);

module.exports = itemRoute;
