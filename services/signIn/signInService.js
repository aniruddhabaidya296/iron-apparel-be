
const { getDb } = require("../../utils/database");
const JsonWebToken = require("../../utils/jwt");

class SignInService {
    static async signIn(userEmail, password) {
        const db = await getDb();
        let user = await db.collection('users').findOne({ email: userEmail })
        if (!user) {
            throw {
                message: "Login Failed. User not found!",
                statusCode: 401
            };
        } else if (user.password === password) {
            const accessToken = JsonWebToken.generate(user);
            return {
                "user": user,
                "accessToken": accessToken
            };
        } else if (user && user.password !== password) {
            throw {
                message: "Please check your password",
                statusCode: 401
            };
        } else {
            throw {
                message: "Login Failed.",
                statusCode: 401
            };
        }
    }
}

module.exports = SignInService