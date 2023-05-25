const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authenticate');




// ! Connection User Model file
const User = require('../model/user');


// ! Hashing Password for Register Here //
const securepassword = async (password) => {

    try {

        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;

    } catch (error) {
        res.status(400).send(error.message);
    }

}

// ! Signup Router //
router.post('/signup', async (req, res, next) => {

    const {name, email, password, userType} = req.body;

    if( !name || !email || !password || !userType ){
        return res.status(422).json({error: "please fill all data"});
    }

    try {

        const spassword = await securepassword(req.body.password)

        const user = new User({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name,
            email: req.body.email,
            password: spassword,
            userType: req.body.userType

        });

        const userData = await User.findOne({ email: req.body.email })

        if (userData) {
            return res.status(422).json({ error: "Email already Exit" });

        } else {
            await user.save();
            res.status(200).json({ message: "user registered successfuly" });
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
})

// ! Loginin Router //
router.post('/signin', async (req, res, next) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({error:"Plz Filled the data"})
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
                     
            const isMatch = await bcrypt.compare(password, userLogin.password);

        if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials " });
        } else {
            
            token = await userLogin.generateAuthToken();
            /* console.log(token); */

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            
            res.json({ token });
        }
        } else {
             res.status(400).json({ error: "Invalid Credientials " });
        }

    } catch (err) {
        console.log(err);
    }

})


module.exports = router;