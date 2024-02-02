let success_function = require('../util/response-handler').success_function
let error_function = require('../util/response-handler').error_function
let users = require('../db/models/users')
let jwt = require('jsonwebtoken')
let bcrypt= require('bcryptjs')
let dotenv = require('dotenv')
dotenv.config();

exports.login = async function(req,res){
    try {
        let email = req.body.email
        console.log('email',email)
        let password = req.body.password
        console.log("password",password)
        
        let user = await users.findOne({email})
        console.log('user',user)
        if(user){
            let db_password = user.password
            console.log("db_password",db_password)

            bcrypt.compare(password,db_password,(err,auth)=>{
                
                if(auth=== true){
                    let access_token = jwt.sign({user_id : user.user_id},process.env.PRIVATE_KEY,{expiresIn : "1d"})
                    console.log("access_token ",access_token)
    
                    let response = success_function({
                        statusCode : 200,
                        data : access_token,
                        message : "login sucessfull"
                    })
                    res.status(response.statusCode).send(response)
                    return
                }else{
                    let response = error_function({
                        statusCode :400,
                        message : "wrong password"
                    })
                    res.status(response.statusCode).send(response)
                    return
                }
            })
            
        }else{
            let response = error_function({
                statusCode :404,
                message : 'user not found'
            })
            res.status(response.statusCode).send(response)
            return
        }
    } catch (error) {
        console.log('error',error)
        let response = error_function({
            statusCode : 400,
            message : error.message?error.message:error,
        })
        res.status(response.statusCode).send(response)
        return
    }
}