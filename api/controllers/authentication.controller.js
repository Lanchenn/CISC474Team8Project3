const jwt = require('jsonwebtoken'),
    crypto = require('crypto'),
    User = require('../models/user'),
    config = require('../config/config');

function generateToken(user) {
    return jwt.sign(user, config.secret, {
        expiresIn: 10080 // in seconds
    });
}

//========================================
// Login Route
//========================================
exports.login = function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { return res.status(400).json({ error: "bad data" }); }
        if (!user) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (err) { return res.status(400).json({ error: "bad data" }); }
            if (!isMatch) { return res.status(400).json({ error: 'Your login details could not be verified. Please try again.' }); }

            let userInfo = user.toJson();
            res.status(200).json({
                token: 'Bearer ' + generateToken(userInfo),
                user: userInfo
            });
        });
    });
}

exports.authorize = function (req, res, next) {
    return res.status(200).json(req.user.toJson());
}
//========================================
// Registration Route
//========================================
exports.register = function (req, res, next) {
    // Check for registration errors
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if (!email) {
        return res.status(422).send({ error: 'You must enter an email address.' + " " + req.body.password});
    }
    if (!firstName || !lastName) {
        return res.status(422).send({ error: 'You must enter your full name.' + " " + req.body.email + " " + req.body.firstName + " " + req.body.lastName});
    }
    if (!password) {
        return res.status(422).send({ error: 'You must enter a password.' + " " + req.body.password});
    }

    User.findOne({ email: email }, function (err, existingUser) {
        if (err) { return next(err); }
        if (existingUser) {
            existingUser.save(function (err, user) {
                if (err) { return next(err); }
                let userInfo = existingUser.toJson();
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo,
                });
            });

        } else {
            let user = new User({
                email: email,
                password: password,
                provider: 'local',
                roles: ['User'],
                profile: { firstName: firstName, lastName: lastName }
            });
            user.save(function (err, user) {
                if (err) { return next(err); }
                let userInfo = user.toJson();
                res.status(201).json({
                    token: 'JWT ' + generateToken(userInfo),
                    user: userInfo
                });
            });
        }
    });
}

