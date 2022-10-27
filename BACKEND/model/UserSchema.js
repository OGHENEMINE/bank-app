// const { string } = require('joi');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        min: 8
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    role:{
        type: String,
        default: 'customer'
    },
    verificationToken: {
        type: String,
        default: ''
    },
    emailVerifiedAt:{
        type: Date,
        default: null
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
UserSchema.pre('save', function(next){
    if (!this.isModified('password')) return next();
    
    const user = this
    bcrypt.genSalt(10, function(err, salt){
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err)
            user.password = hash
            next();
        })
    })
})

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateVerificationToken = async function(){
    const code = Math.random().toString().slice(2, 8)
    this.verificationCode = await bcrypt.hash(code, await bcrypt.genSalt(10))
    await this.save()
    return code
}

UserSchema.methods.verifyToken = async function(token){
    if(await bcrypt.compare(token, this.verificationCode)){
        this.verificationCode = '';
        this.emailVerifiedAt = Date.now();
        return await this.save()
    }
    return false
}

UserSchema.methods.emailVerified = function(){
    return this.emailVerifiedAt
}

UserSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.verificationCode
    return user
}

const User = mongoose.model('User', UserSchema);
module.exports = User