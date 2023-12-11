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