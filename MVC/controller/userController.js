const { error } = require('console');
const users = require('../db/models/users')
const success_function = require('../util/response-handler').success_function;
const error_function = require('../util/response-handler').error_function
exports.createUser = async function (req,res){
    try {
        const datas = req.body
        const isUserExist = await users.findOne({email : datas.email})
        console.log("isUserExist",isUserExist)

        if(isUserExist){
            let response = error_function({
                statusCode : 400,
                message : "user alredy exist"
            })
            res.status(response.statusCode).send(response)
        }
        const new_user = await users.create(datas)

        if (new_user) {
            let response = success_function({
                statusCode : 201,
                data : new_user,
                message : "user created succesfuly",
            })
            res.status(response.statusCode).send(response);
            return;
        } else {
            let response = error_function({
                statusCode : 400,
                message : "user creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
        }
    } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : error.message?error.message:error,
        })
        res.status(response.statusCode).send(response);
        return;
    }
}
 exports.getData = async function (req,res){
        try {
            const user = await users.find()

            if(user.length>0){
                res.status(200).send(user)
            }else{
                res.status(400).send("user not found")
            }
        } catch (error) {
            console.error("users canot be fetch",error)
            res.status(400).send("data not found")
        }
}
exports.editData = async function ( res,req){
 let data = req.body
 console.log("data",data)
 let id = data.id
 console.log("id",id)

 let _id = new mongoose.Types.ObjectId(id)
 console.log("_id",_id)

 let updateData ={
    name : data.name,
    email :data.email,
    password :data.password
 }
 const isUserExist = await users.findOne({email : data.email})
 console.log("isuserExist",isUserExist)

 if(isUserExist){
    let response= error_function({
        statusCode : 400,
        message : "user already exist ",
    })
    res.status(response.statusCode).send(response)
    return
 }
 await users.updateOne({_id},{$set:updateData})
 .then((message)=>{
    console.log("document updted sucessfully ",message)
    res.status(200).send("document updtaes successfully")

 })
 .catch((error)=>{
    console.log("document not updated ",error)
    res.status(400).send("failed")
 })

}
exports.deleteData =async function (req,res){
let data = req.body;
console.log("data",data)

let id = data;
console.log("id",id)

let _id = new mongoose.Types.ObjectId(id)
console.log("_id",_id)

users.findByIdAndDelete(_id)
.then((message)=>{
    console.log("deleted sucessfully")
    res.status(200).send("Success")
})
.catch((error)=>{
    console.log("delted succesfully")
    res.status(200).send("failed")
})
}
