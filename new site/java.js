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
         <div class="card">
      <h3 class="title">${parced_response[i].title}</h3>
      <img src=${parced_response[i].image} alt="image" class="image">
      <p>${parced_response[i].category}</p>
      <p class="price">₹${parced_response[i].price}</p>
      <button class="btn">Add Cart</button>
    </div>
         `
            }
            items.innerHTML=datas
}
