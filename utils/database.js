const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
const ServerApi = mongodb.ServerApiVersion;

let _db = null;
// const mongoConnect = callback => MongoClient.connect('mongodb+srv://aniruddhabaidya:vFmBx9RawgBzRQ43@cluster0.llsgiyj.mongodb.net/?retryWrites=true&w=majority'
// ).then(client => {
//     console.log("mongodb connected")
//     _db = client.db()
// }).catch(e => {
//     console.log(e);
// })

const mongoConnect = async () => {
    try {
        const client = await MongoClient.connect(('mongodb+srv://aniruddhabaidya:vFmBx9RawgBzRQ43@cluster0.llsgiyj.mongodb.net/?retryWrites=true&w=majority'));
        _db = client.db();
        console.log("DB is set")
    } catch (error) {
        console.log(error)
    }
}

const getDb = async () => {
    try {
        if (_db) {
            return _db;
        }
        else {
            const client = await MongoClient.connect(('mongodb+srv://aniruddhabaidya:vFmBx9RawgBzRQ43@cluster0.llsgiyj.mongodb.net/?retryWrites=true&w=majority'));
            _db = client.db();
            console.log("DB is set")
            return _db;
        }

    } catch (error) {
        throw console.log("No database found!", error);
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

