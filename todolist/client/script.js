console.log("haiii")

async function gettasks(){
    let usertasks = await fetch ('http://localhost:4050/getData')
    console.log("userTasks",usertasks)
    let parsedUserTask = await usertasks.json()
    console.log("parsedUserTasks",parsedUserTask)
    let tasklist = document.getElementById('tasklist')
    let content = ''
    for(let i=0;i<parsedUserTask.length;i++){
        content=content+`
        <ul>
        <li><input type="text" name="tasks id="taskinput" value='${parsedUserTask[i].taskinput}'><button>Delete</button></li>
        </ul>`
    }
    tasklist.innerHTML=content
    
}
gettasks();