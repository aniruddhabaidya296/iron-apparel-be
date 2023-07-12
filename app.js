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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/auth', authRouter);
app.use('/cart', cartRouter);
app.use('/user', userRouter);

module.exports = app;
