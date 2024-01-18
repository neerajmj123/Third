

async function gettasks(){
    let usertasks = await fetch ('http://localhost:4020/getData')
    console.log("userTasks",usertasks)
    let parsedUserTask = await usertasks.json()
    console.log("parsedUserTasks",parsedUserTask)
    let tasklist = document.getElementById('tasklist')
    let content = ''
    for(let i=0;i<parsedUserTask.length;i++){
        content=content+`
        <ul>
        <li><input type="text" name="tasks" id="taskinput-${parsedUserTask[i]._id}" value='${parsedUserTask[i].tasks}'>
        <button onclick="btnDelete('${parsedUserTask[i]._id}')">Delete</button>
        <button onclick="btnUpdate('${parsedUserTask[i]._id}')">Update</button></li>
        </ul>`
    }
    tasklist.innerHTML=content
    
}
gettasks();
async function btnDelete(id){
    console.log("id",id)
    let response = await fetch ('http://localhost:4020/deleteData',{
        "method":"DELETE",
        "header":{
            "Content-Type":"text/plain",
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
async function btnUpdate(id){
    console.log("id",id)
    let tasks = document.getElementById(`taskinput-${id}`).value;
    console.log("tasks",tasks)

    let data = {
        tasks,
    }
    let json_data=JSON.stringify(data);

    await fetch('http://localhost:4020/editData',{
        "method" : "PUT",
        "headers":{
            "Content-Type" : "text/json"
        },
        "body":json_data

    })
    
}