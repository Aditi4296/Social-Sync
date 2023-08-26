const Users = require ('../models/userModel.js')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


const authCtrl = {
    register: async (req, res) => {
        try {
            const {fullName, username, email, password, gender} = req.body
            let newUserName = username.toLowerCase().replace(/ /g,'')
            console.log(newUserName)
            res.json({msg: 'Registered'})
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }

    },
    login: async (req, res) => {
        try {
            
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }

    },
    logout: async (req, res) => {
        try {
            
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }

    },
    generateAccessToken: async (req, res) => {
        try {
            
        } catch (error) {
            return res.status(500).json({
                msg: error.message
            })
        }

    },
}

module.exports = authCtrl