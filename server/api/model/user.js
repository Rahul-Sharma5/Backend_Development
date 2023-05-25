const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    userType: String,
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
})


// ! we are generating JWT Token

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        //    console.log(err);
    }
}



module.exports = mongoose.model('User', userSchema);