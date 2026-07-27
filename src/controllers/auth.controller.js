const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

async function registerUser(req, res) {
    const { username, email, password, role = "user" } = req.body

    const isUserExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserExists) {
        return res.status(400).json({
            message: "User Already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password: hash, role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SECRET)

    res.cookies('token', token)

    res.status(201).json({
        message: "User Created Successfully!",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        }
    })




}

module.exports = { registerUser }





