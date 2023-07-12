const { getDb } = require('../../utils/database');

class UserService {
    static async getUser (userId) {
        const db = await getDb();
        return db.collection('users')
            .find({ id: userId })
            .toArray()
            .then(result => {
                console.log(result);
                return result;
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            });
    }

    static async updateUser (userId, userName, userEmail) {
        const db = await getDb();
        return db.collection('users')
            .updateOne({ id: userId }, { $set: { email: userEmail, name: userName } })
            .then(result => {
                console.log(result);
            })
            .catch(e => {
                console.log(e);
                throw {
                    status: 0,
                    message: 'Something went wrong'
                };
            }
            );
    }
}

module.exports = UserService;
