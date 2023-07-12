const { getDb } = require('../../utils/database');

class SignUpService {
    static async create (user) {
        const db = await getDb();
        return db.collection('users')
            .insertOne(user)
            .then(result =>
                console.log(result))
            .catch(e =>
                console.log('Error is ', e)
            );
    }
}

module.exports = SignUpService;
