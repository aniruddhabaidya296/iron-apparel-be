const express = require('express');
const adminRouter = require('./routes/admin');
const app = express();
const port = 3000;
const mongoConnect = async () => await require('./utils/database').mongoConnect();
const bodyParser = require('body-parser');
const shopRouter = require('./routes/shop');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const userRouter = require('./routes/user');
const { getDb } = require('./utils/database');
const admin = require('firebase-admin');
const serviceAccount = require('./ecommerce-app-firebase-adminsdk.json');
const cors = require('cors');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://ecommerce-app-f3e97.appspot.com/',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/user', userRouter);

mongoConnect();

module.exports = app;
