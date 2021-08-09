const express = require('express')
const router = express.Router()
const userModel = require('../model/user')

// sign up
router.post('/signup', async (req, res) => {

    const {name, email, password } = req.body

    try{

        const user = await userModel.findOne({email})

        if(user){
            return res.status(400).json({
                msg : "user email, please other email"
            })
        }
        else{
            const user = new userModel({
                name, 
                email,
                password
            })

            await user.save()
        }

    }
    catch(err){
        res.status(500).json({
            msg : err.message
        })
    }
})

// login

module.exports = router