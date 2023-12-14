{
    let arr =[1,2,3,4,5,6]
    console.log("array",arr)
    
    let arr_cont =[...arr,7,8,9]
    console.log(arr_cont)

    let obj={
        firstName : "neeraj",
        lastName :"mj"
    }
    console.log(obj)
    let objcont={
        ...obj,
        age:20
    }
    console.log(objcont)
}
{
    let arr=[1,2,3,4,5]
    console.log(arr)
    let [n,e,r,a,j]=arr
    console.log("n",n)
    console.log(e)
}
{
    let matrix =[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    console.log(matrix)
    let [row1,row2,ro3]=matrix
    console.log(row1)
    console.log(row2)
    console.log(ro3)

}
{
    let arr1=[1,2,3]
    let arr2=[4,5,6]
    let arr3=[...arr1,...arr2]
    console.log(arr3)
}
{
    let obj={
        firstName:"sponge",
        lastName:"bob",
        address:{
            streetno:1,
            pincode :680564
        }
    }
    let obj1={
        ...obj,
        hobby :"playing"
    }
    let obj2={
        ...obj,
        ...obj1
    }
    console.log(obj2)
}
{
    let arr=[
        {name:"neeraj",age:20,place:"Thrissur"},
        {name:"bob",age:10,place:"pazhuvil"}
]
    arr.forEach((element,index,array)=>{
        console.log("index:",index)
        console.log(element)
        console.log(array)
    })

    let findres = arr.find((element)=>{
        return element.name=="bob"
    })
    console.log("result=",findres)


    let filters=arr.filter((element,index)=>{
        return element.age==20
    })
    console.log("filter=",filters)

    let maping=arr.map((element)=>{
        return element.place
    })
    console.log("maps=",maping)


    let reduses=arr.reduce((total,element)=>{
        return total + element.age
    },0)
    console.log("total age=",reduses)

}
{
    let person = { 
        firstName : "neeraj",
        lastName : "M J",
        age : 20,
        getAge : function(){
            console.log('age of ${this.firstName}is ${this.age}')
        }
    }
    person.getAge()
    console.log(this)

    function greet(message,message2){
        console.log(`${message}and${message2} ${this.firstName}`)
    }
let res = greet.bind(person,"hii","hey");
console.log(res())
}
{
    function person(name,age,mark){
        this.name=name
        this.age=age
        this.mark =mark
        this.greeting=function(){
            console.log(`hai ${this.name},Your mark is ${this.mark}`)
        }
    }
    let person1=new person("bob",10,25)
    console.log("person",person1)
    person1.greeting();

    person.prototype.getAgeAndMark =function(){
        console.log(`hello ${this.name},your age is ${this.age} and your mark is ${this.mark}`)
    }
    person1.getAgeAndMark();

}   
{
    class person {
        name;
        age;
        mark;

        constructor(name,age,mark){
            this.name=name
            this.age=age
            this.mark=mark
        }
        greeting(){
            console.log(`hai ${this.name}`)
        }
    }
    let person1 = new person("sqid",22,45)
    console.log("person1",person1)
    person1.greeting()
    let person2 = new person("bob",21,55)
    console.log("person",person2)
    person1.greeting()

    person.prototype.getAgeAndMark=function(){
        console.log(`hello ${this.name}.your age is ${this.age} and your mark ${this.mark}`)
    }
    person1.getAgeAndMark();
    person2.getAgeAndMark()
}

    class Mybutton {
        button;
        constructor(content){
            this.button=document.createElement('button')
            this.button.innerHTML=content
            document.body.appendChild(this.button)
        }
        set width(width){
            this.button.style.width=width+"px";
        }
        set height(height){
            this.button.style.height=height+"px"
        }
        get width(){
            return this.button.style.width
        }
        get height(){
            return this.button.style.height
        }

        onClick(fn){
            this.button.onclick=fn
        }
    }
    let mybutton=new Mybutton('click here')
    console.log("myButton ",mybutton)

    mybutton.width=150
    mybutton.height=130
     console.log("myButtoWidth ",mybutton.width)
     console.log("myButtonHeight ",mybutton.height)

     mybutton.onClick(function(){
        console.log("button clicked")
     })

     class yellowButton extends Mybutton{
        onClick(fn){
            this.button.onclick=function(){
                fn()
                this.button.style.background ="yellow"
            }.bind(this)
        }
     }
     let myyellowbtn =new yellowButton("yellow button")
     myyellowbtn.width=200
     myyellowbtn.height=150
     console.log("myButtoWidth ",myyellowbtn.width)
     console.log("myButtonHeight ",myyellowbtn.height)
     myyellowbtn.onClick(function(){
        console.log("yellow button clicked")
     })

// synchronous sigle threadead language

console.log("first line")
console.log("second line")

setTimeout(()=>{
    console.log("from setTimeOut")
})

// let datas = fetch('https://jsonplaceholder.typicode.com/users')
// console.log("datas = ",datas)

console.log("third line")

// settimeout,setinterval this kind a moved to a web space enviornament 
// main priority to console.log 
// javascript engine - callback queue and microtask queue
// with help of Event loop it moves to call Stack


let xhr = new XMLHttpRequest()
xhr.open("get",'https://jsonplaceholder.typicode.com/users')
xhr.send()

console.log("xhr",xhr)
xhr.onereadystatechange = function(){
    console.log("readyState",xhr.readyState)
    console.log("statuscode",xhr.status)
    if(xhr.readyState==4){
        if(xhr.status==200){
            let reponse = xhr.response
            console.log("response",reponse)
            console.log("typeof response",typeof(reponse))

            let parced_response = JSON.parse(reponse)
            console.log("parsed_response",parced_response)
            console.log("type of parsed resonse",typeof(parced_response))
        }else{
            console.log("failed")
        }
    }else{
        console.log("satus not completed")
    }
}