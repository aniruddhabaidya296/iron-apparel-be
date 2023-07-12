const uuid = require('uuid')

class User {
    constructor(name, email, password) {
        this.id = uuid.v4().toString();
        this.email = email;
        this.name = name;
        this.password = password;
        this.cart = [];
    }
}

module.exports = User