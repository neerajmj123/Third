const users = require('../db/models/users')
async function createUser(req,res){
    try {
        const datas = req.body
        const new_user = await users.create(datas)

        if (new_user) {
            res.status(201).send("success");
            return;
        } else {
            res.status(400).send('failed');
            return;
        }
    } catch (error) {
        console.log("error : ", error);
        res.status(400).send("failed");
        return;
    }
}
async function getuserData(){

}
async function editData(){

}
async function deleteData(){

}
module.exports={
    createUser,
    getuserData,
    editData,
    deleteData
}