{
   let myArr =[1,2,3,"haii"];
   console.log("arrLength :",myArr.length); 

   let arr1 = new Array(1,2,3,4);
   console.log("arr1 :",arr1);

   let arr =[1,2,3,4,5,6,7,8,9];
   console.log("arr[4] :",arr[4]);

   console.log("Index of 5 :",arr.indexOf(5));

   arr.push("End");
   console.log("Push :",arr);

   arr.unshift("Start");
   console.log("Unshift :",arr);

   arr.pop();
   console.log("Pop :",arr);

   arr.shift();
   console.log("shift :",arr);

   arr.splice(1,2);
   console.log("splice :",arr);

   arr.splice(2,0,10);
   console.log("splice :",arr);

   arr[0]=0;
   console.log("splice :",arr);

}
{
    //objects
     let obj ={
        firstName : "Neeraj",
        lastName : "M J",
        age :20,
        marks : [10,15,20]
     }
     console.log("obj :",obj);

     console.log("First name : ",obj.firstName);

     obj.firstName ="nivin"
     console.log("obj :",obj);

     obj.email = "nmj41198@gmail.com";
     console.log("obj : ",obj);


     //Json

     let json_str = JSON.stringify(obj);
     console.log("json_str :",json_str);

     let json_to_obj = JSON.parse(json_str);
     console.log("json_to_obj :",json_to_obj);
}