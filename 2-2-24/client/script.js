async function getuserData(){
    let userData = await fetch ('http://localhost:3000/getData')
    console.log("userData")
}