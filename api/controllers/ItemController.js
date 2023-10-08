const { item, user } = require("../models");
const { tokenVerifier } = require("../helpers/jsonwebtoken");

class ItemController {
  static async getAllItems(req, res) {
    try {
      let items = await item.findAll({
        include: [user],
      });

      res.status(200).json(items);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, type, price, image } = req.body;
      const userId = +req.userData.id;

      let result = await item.create({
        name,
        type,
        price,
        image,
        userId,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static update(req, res) {}

  static delete(req, res) {}

  static getItemById(req, res) {}
}

module.exports = ItemController;
