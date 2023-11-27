const User = require('../../models/user');
const SignUpService = require('../../services/signUp/signUpService');

exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const user = new User(name, email, password);
    SignUpService.create(user)
        .then((result) => {
            console.log(result);
            console.log('User Created');
            return res.status(200).send({
                'status': 1,
                'data': 'User added successfully'
            });
        }).catch((err) => {
            console.log(err);
            return res.sendStatus(500);
        });
};