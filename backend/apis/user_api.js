import express from "express";
const user_router = express.Router()
import users from "../data/users.js";
import jwt from 'jsonwebtoken'
import UserModel from "../models/UserModel.js";
// user_router.get('/', (req, res, next) => {
// res.status(200).json(users)
// });

user_router.post('/register', async (req,res, next)=> {
    let user = req.body
   let checkUser = await UserModel.findOne({email:user.email})
   if(checkUser != null){
    res.status(400).json({
        'isRegistered': false,
        'message': "This email already exists",
        "user": null
    })
   }else {
    let newUser = new UserModel(user);
    let isSaved = await newUser.save();
    console.log('isSaved', isSaved)
    res.status(200).json(isSaved)
   }
})

user_router.post('/login', (req, res, next) => {
    let user = req.body

    let checkUser = UserModel.findOne({email: user.email, password: user.password})

    if(checkUser != null){
        let token = jwt.sign({email: user.email},'superinvertor1234');
    res.status(200).json({
        'isLoggedIn': true,
        user: user,
        token: token,
    })
}else {
        res.status(400).json({
        'isLoggedIn': false,
        user: null,
    })
}

})




export default user_router;