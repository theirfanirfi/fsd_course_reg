import express from "express";
const user_router = express.Router()
import users from "../data/users.js";
import jwt from 'jsonwebtoken'

user_router.get('/', (req, res, next) => {
res.status(200).json(users)
});

user_router.post('/register', (req,res, next)=> {
    let user = req.body
    users.push(user)
    res.status(200).json(users)
})

user_router.post('/login', (req, res, next) => {
    let user = req.body
    user = users.find(u => u.email == user.email && u.password == user.password)
    if(user){
        let token = jwt.sign(user,'superinvertor1234');
    res.status(200).json({
        'isLoggedIn': true,
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