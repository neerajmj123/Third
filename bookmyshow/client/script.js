async function submitform(){
    let name = document.getElementById('name').value
    console.log("name",name)
    let genre = document.getElementById('genre').value
    console.log("genre",genre)
    let director= document.getElementById('director').value
    console.log('director',director)

    let data={
        name,
        genre,
        director,
    }
    let json_data = JSON.stringify(data)
    let response = await fetch('/submit',{
        "method":"POST",
        "headers":{
            "Content-Type":"application/json",
        },
        "body":json_data
        
    })
    let parsed_response = await response.text();
    if(parsed_response === "success"){
        alert("Movie Added")
    }else{
        alert("Something error")
    }
}
async function getMoviesData(){
    let movies=await fetch('/getMovies')
    let parsed_Data = await movies.json()
    let showmovies = document.getElementById("")
}