const { getDb } = require('../../utils/database');
const FirebaseUtils = require('../../utils/firebase');
const admin = require('firebase-admin');

class UserService {

    static async uploadImage(rawfile, userId) {
        if (!rawfile) {
            throw {
                status: 0,
                message: 'No file uploaded'
            };
        }
        try {
            const imageUrl = await FirebaseUtils.uploadImageToFirebase(rawfile, 'images');
            this.updateUserProficPicture(userId, imageUrl);
            return imageUrl;
        } catch (err) {
            console.log('error uploading ', err)
            throw {
                status: 0,
                message: 'No file uploaded'
            };
        }


    }
    static async getUser(userId) {
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

    static async updateUserProficPicture(userId, imageUrl) {
        const db = await getDb();
        return db.collection('users')
            .updateOne({ id: userId }, { $set: { imageUrl: imageUrl } })
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

    static async updateUser(userId, userName, userEmail) {
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
