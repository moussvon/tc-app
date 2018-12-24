import mongoose from 'mongoose'
import UserSchema from '../models/User'
const bcrypt = require('bcryptjs')


const User = mongoose.model('User', UserSchema)

const updateUser = (req, res) => {
    User.findOneAndUpdate(
        req.params.idUser,
        req.body, { new: 'true' },
        (err, User) => {
            if (err) res.send(err)
            res.json(User)
        }
    )
}

const deleteUser = (req, res) => {
    User.findOneAndDelete(
        req.params.idUser,
        (err) => {
            res.send(err)
        })
}

const getUser = (req, res) => {
    const id = req.params.idUser
    if (id !== undefined) {
        const user = User.find({ _id: req.params.idUser }, (err, user) => {
            if (err) res.send(err)
            res.json(user)
        })
    } else {
        const user = User.find({}, (err, user) => {
            if (err) res.send(err)
            res.json(user)
        })
    }
}

const register = (req, res) => {
    req.checkBody('nom', 'The name is required').notEmpty();
    req.checkBody('prenom', 'The first name is required').notEmpty();
    req.checkBody('email', 'The email is required').notEmpty();
    req.checkBody('phoneNumber', 'The phoneNumber is required').notEmpty();
    req.checkBody('password', 'The password is required').notEmpty();
    req.checkBody('passwordConf', "Don't MAtch").equals(req.body.password);
    req.checkBody('userName', 'The userNameame is required').notEmpty();

    const err = req.validationErrors()

    if (err) {
        res.json({
            err: err[0].msg
        })
    } else {
        const userData = {
            email: req.body.email,
            nom: req.body.nom,
            prenom : req.body.prenom,
            userName: req.body.userName,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            passwordConf: req.body.passwordConf,
        }
        const newUser = new User(userData)

        newUser.save((err, user) => {
            if (err) {
                res.json({
                    err: err
                })
            } else {
                res.json({
                    user
                })
            }
        })
    }
}

const authenticate = (email, password, callback) => {
    User.findOne({ email: email })
        .exec(function(err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}


const login = (req, res) => {
    req.checkBody('email', 'The email is required').notEmpty()
    req.checkBody('password', 'The password is required').notEmpty()

    const err = req.validationErrors()
    if (err) {
        res.json({
            err: err[0].msg
        })
    } else {
        authenticate(req.body.email, req.body.password, (error, user) => {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                res.json({
                    err: 'Im hree'
                })
            } else {
                req.session.userId = user._id;
                res.json({
                    success: 'success'
                })
            }
        })
    }

}

const logout = (req, res, next) => {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                res.json({
                    method: 'Logged Out'
                })
            }
        });
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser,
    register,
    login,
    logout
}
