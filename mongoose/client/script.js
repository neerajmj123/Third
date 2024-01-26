async function submitform(){
    let name = document.getElementById('name').value
    console.log("name",name)
    let email = document.getElementById('email').value
    console.log("email",email)
    let password = document.getElementById('password').value
    console.log("password",password)

    let data={
        name,
        email,
        password,
    }
    let json_data = JSON.stringify(data)
    let response = await fetch('/submit',{
        "method":"POST",
        "headers":{
            "Content-Type":"application/json",
        },
        "body":json_data,
    })
    let parsed_response = await response.text()
    if(parsed_response === "success"){
        alert('form submited sucessfully')
    }else{
        alert("form submission failed")
    }
}
async function getuserData(){
    let userData = await fetch ('http://localhost:4300/getData')
    console.log("userData",userData)
    let parseduserData =await userData.json()
    console.log("parsedUserdata",parseduserData)
    let tbody = document.getElementById('tbody')
    let content=''
    for(let i=0;i<parseduserData.length;i++){
        content=content+`
        <tr>
        <td>${parseduserData[i]._id}</td>
        <td><input type="text" name="name" id="name-${parseduserData[i]._id}" value='${parseduserData[i].name}' disabled="true"></td>
        <td><input type="email" name="email" id="email-${parseduserData[i]._id}" value='${parseduserData[i].email}' disabled="true"></td>
        <td><input type="password" name="password" id="password-${parseduserData[i]._id}"value='${parseduserData[i].password}' disabled="true"></td>
        <td><button onclick="btnclick('${parseduserData[i]._id}')">Edit</button></td>
        <td><button onclick="btnclicksave('${parseduserData[i]._id}')">Save</button></td>
        <td><button onclick="btnDelete('${parseduserData[i]._id}')">Delete</button></td>
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
async function btnDelete(id){
    console.log("id",id)
    let response = await fetch ('http://localhost:4300/deleteData',{
        "method":"DELETE",
        "header":{
            "Content-Type":"application/plain",
        },
        "body":id,
    })
        console.log("response",response)
        let parsed_resonse =await response.text();
        console.log("parsed_response",parsed_resonse)

        if(parsed_resonse ==="Success"){
            alert("Deletion Successful")
        }else{
            alert("Deletion Failed")
        }
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

    await fetch('http://localhost:4300/editData',{
        "method" : "PUT",
        "headers": {
            "Content-Type" : "text/json"
        },
        "body":json_data,
        })

    }
    function validateName(){
        let name = document.getElementById('name').value
        let name_error = document.getElementById('name-error')
        let name_regex=/^[A-Za-z]{2,30}( [A-za-z]{2,30})?$/
        let isnamevalid=name_regex.test(name)
        console.log("isnamevalid",isnamevalid)
    
        if(!isnamevalid){
            name_error.innerHTML="Invalid Name"
            return
        }else{
            name_error.innerHTML=""
            return
        }
    }
    function validateEmail(){
        let email = document.getElementById('email').value
        let email_error= document.getElementById('email-error')
        let email_regex=/^[a-z0-9-_]*@([a-z0-9]+)*(\.[a-z]{2,3})/
        let isemailvalid=email_regex.test(email)
        console.log("isemailvalid",isemailvalid)
    
        if(!isemailvalid){
            email_error.innerHTML="Invalid Email"
            return
        }else{
            email_error.innerHTML=""
            return
        }
    }
    function validatePwd(){
        let password = document.getElementById('password').value
        let password_error= document.getElementById('password-error')
    let password_regex=/^[a-z0-9_@\.]{6,}$/
    let ispasswordvalid=password_regex.test(password)
    console.log("ispasswordvalid",ispasswordvalid)

    if(!ispasswordvalid){
        password_error.innerHTML="Invalid Password"
        return
    }else{
        password_error.innerHTML=""
        return
    }
}