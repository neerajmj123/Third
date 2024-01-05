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
        <td>${parseduserData[i].name}</td>
        <td>${parseduserData[i].email}</td>
        <td>${parseduserData[i].password}</td>
        <tr>`
    }
    tbody.innerHTML=content
}
getuserData();