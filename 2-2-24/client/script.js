console.log("hai")
async function getuserData(){
    let userData = await fetch ('http://localhost:3000/getData')
    console.log("userData",userData)
    let parseduserData =await userData.json()
    console.log("parsedUserdata",parseduserData)
    let tbody = document.getElementById('tbody')
    let content=''
    for(let i=0;i<parseduserData.length;i++){
        content=content+`
        <tr>
        <td>${parseduserData[i]._id}</td>
        <td><input type="text" name="name" id="name"-${parseduserData[i]._id}" value='${parseduserData[i].name}' disabled="true"></td>
        <td><input type="email" name="email" id="email"-${parseduserData[i]._id}" value='${parseduserData[i].email}' disabled="true"></td>
        <td><input type="password" name="password" id="password"-${parseduserData[i]._id}"value='${parseduserData[i].password}' disabled="true"></td>
        <td><button onclick="btnclick('${parseduserData[i]._id}')">Edit</button></td>
        <td><button onclick="btnclicksave('${parseduserData[i]._id}')">Save</button></td>
        <tr>`
    }
    
    tbody.innerHTML=content
}
getuserData();

function btnclick(id){
    let _id = id;
    console.log("id:",_id)

    let name = document.getElementById(`name-${_id}`)
    console.log("name:",name)
    name.disabled = false

    let email=document.getElementById(`email-${_id}`)
    console.log("email:",email)
    email.disabled = false

    let password=document.getElementById(`password-${_id}`)
    console.log("password",password)
    password.disabled = false
}
async function btnclicksave(id){
    console.log("id",id);
    let name = document.getElementById(`name-${id}`).value;
    console.log("name",name)

    let email=document.getElementById(`email-${id}`).value;
    console.log("email:",email)
    

    let password=document.getElementById(`password-${id}`).value;
    console.log("password",password)

    let data ={
        id,
        name,
        email,
        password,
    }
    let json_data=JSON.stringify(data);

    await fetch('http://localhost:3000/editData',{
        "method" : "PUT",
        "headers": {
            "Content-Type" : "text/json"
        },
        "body":json_data,
        })

}
