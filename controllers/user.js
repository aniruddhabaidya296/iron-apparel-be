const CartService = require("../services/cart/cartService");
const UserService = require("../services/user/userService");


class UserController {
    static getUser = (req, res, next) => {
        UserService.getUser(req.body.userId)
            .then((result) => {
                console.log(result)
                console.log("User found");
                return res.status(200).send({
                    "status": 1,
                    "data": result
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }

    static updateUser = (req, res, next) => {
        UserService.updateUser(req.body.userId, req.body.userName, req.body.email)
            .then((result) => {
                console.log(result)
                console.log("User updated successfully");
                return res.status(200).send({
                    "status": 1,
                    "message": "User updated successfully"
                })
            }).catch((err) => {
                console.log(err)
                return res.sendStatus(500);
            });
    }
}

module.exports = UserController;