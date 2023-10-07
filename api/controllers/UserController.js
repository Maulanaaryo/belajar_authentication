const { user } = require("../models");
const { decryptPwd } = require("../helpers/bcrypt");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let users = await user.findAll();

      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password } = req.body;

      let result = await user.create({
        username,
        email,
        password,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let emailFound = await user.findOne({
        where: {
          email,
        },
      });

      if (emailFound) {
        if (decryptPwd(password, emailFound.password)) {
          res.status(200).json(emailFound);
        } else {
          res.status(403).json({
            message: `Invalid Password`,
          });
        }
      } else {
        res.status(404).json({
          message: "User not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      const id = +req.params.id;
      const { username, email, password } = req.body;
      let result = await user.update(
        { username, email, password },
        {
          where: { id },
        }
      );

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `User Id ${id} deleted successfully!`,
          })
        : res.status(404).json({
            message: `User Id ${id} not deleted successfully!`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      let result = await user.findByPk(id);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
