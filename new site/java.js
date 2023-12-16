let xhr = new XMLHttpRequest()

xhr.open("get",'https://fakestoreapi.com/products')
xhr.send()
console.log("xhr",xhr)
xhr.onreadystatechange = function(){
    let items =document.getElementById('items')
    let response = xhr.response
    console.log("response",response)
    let parced_response = JSON.parse(response)
    console.log("parsed_response",parced_response)
     datas=''
    for(let i=0;i<parced_response.length;i++){
         datas=datas+`
         <div class="card1">
        <h3 class="title">${parced_response[i].title}</h3>
        <img src="${parced_response[i].image}" alt="">
        <h5 class="rat">${parced_response[i].rating}</h5>
       </div>`
            }
            items.innerHTML=datas
}