async function submitform() {
    let name = document.getElementById('name').value
    console.log("name", name)
    let genre = document.getElementById('genre').value
    console.log("genre", genre)
    let director = document.getElementById('director').value
    console.log("director", director)


    let image = document.getElementById('image')
    console.log("image", image)

    if (image.files && image.files[0]) {
        const reader = new FileReader()
        reader.onload = async function(e) {
            const base64image = e.target.result;
            console.log("base64",base64image)

            let data = {
                name,
                genre,
                director,
                base64image,
            }
            let json_data = JSON.stringify(data) 
            try {
                let response = await fetch('http://localhost:4101/submit',{
                    "method": "POST",
                "headers": {
                    "Content-Type": "application/json",
                },
                "body": json_data,
                })

            let parsed_response = await response.text()
            if (parsed_response === "success") {
                alert('form submited sucessfully')
            } else {
                alert("form submission failed")
            }
            } catch (error) {
                console.error("error",error)
                alert("something wrong")
            }   
        }
        reader.readAsDataURL(image.files[0]);
    }
}

async function getMoviesData(){
    let movies=await fetch('/getMovies')
    let parsed_Data = await movies.json()
    let showmovies = document.getElementById("")
}