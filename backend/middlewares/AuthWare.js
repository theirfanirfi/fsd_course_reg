import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'
function AuthWare (req, res, next) {


    let headers = req.headers
    if ('authorization' in headers) {

        let token = headers['authorization']
        let authInformation = jwt.decode(token, 'superinvertor1234')

        if (authInformation != null) {
            console.log('authInformation', authInformation);

            let email = authInformation.email
            let user = UserModel.findOne({email: email})
            if (user) {
                next()
            } else {
                res.status(400).json({
                    'isLoggedIn': false,
                    'message': "You are not logged in"
                })
            }
        }
        else {
            res.status(400).json({
                'isLoggedIn': false,
                'message': "You are not logged in"
            })
        }


    } else {
        res.status(400).json({
            'isLoggedIn': false,
            'message': "You are not logged in"
        })
    }
}

export default AuthWare;