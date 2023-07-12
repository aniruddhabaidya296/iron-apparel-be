const jwt = require('jsonwebtoken');
require('dotenv').config();

class JsonWebToken {
    static generate (data) {
        const tokenOptionalInfo = {
            algorithm: 'HS256',
            expiresIn: 60 * 60 * 24
        };
        return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, tokenOptionalInfo);
    }
}

module.exports = JsonWebToken;
