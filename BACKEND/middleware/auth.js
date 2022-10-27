const jwt = require('jsonwebtoken');
const createHttpError = require('http-errors');
const User = require('../model/UserSchema');

async function auth(err, req, res, next){
    try {
        const token = req.header('auth-token');
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const loggedIn = await User.findOne({_id: decode._id})
        if(!loggedIn) throw createHttpError.BadRequest('Invalid credentials!');
        req.loggedIn = loggedIn;
        next()
    } catch (error) {
        next(createHttpError.Unauthorized(error.message))
    }
}