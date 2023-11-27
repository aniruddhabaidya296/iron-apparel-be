const SignInService = require('../../services/signIn/signInService');

exports.postSignIn = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    SignInService.signIn(email, password)
        .then((result) => {
            console.log(result);
            console.log('User signed in');
            return res.status(200).send({
                'status': 1,
                'data': result
            });
        }).catch((err) => {
            console.log(err);
            if (err.statusCode && err.message) {
                return res.status(err.statusCode).send({
                    'message': err.message
                });
            }
            return res.sendStatus(500);
        });
};


